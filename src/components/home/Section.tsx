import React, { ReactNode, forwardRef } from 'react';

type SectionProps = {
  children: ReactNode,
  id: string,
  bgColor?: string
}

const Section = ({children, bgColor, id}: SectionProps) => {
  return (
    <div id={id} className="sm:px-10 px-5 z-10 border-b-2 border-solid border-gray-300 bg-blue-50 " style={{backgroundColor: bgColor}}>
      <div className="max-w-screen-xl m-auto relative ">
      {children}
        </div>
    </div>
  )
};

export default Section