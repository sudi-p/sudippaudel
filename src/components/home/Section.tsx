import React, { ReactNode, forwardRef } from 'react';

type SectionProps = {
  children: ReactNode,
  bgColor?: string
}

const Section = forwardRef( function Section({children, bgColor}: SectionProps, ref){
  return (
    <div ref={ref} className="z-10 border-b-2 border-solid border-gray-300 bg-blue-50 " style={{backgroundColor: bgColor}}>
      <div className="max-w-screen-xl m-auto relative ">
      {children}
        </div>
    </div>
  )
});

export default Section