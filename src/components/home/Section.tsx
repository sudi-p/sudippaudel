import React, { ReactNode } from 'react';

type SectionProps = {
  children: ReactNode,
  bgColor?: string,
}

const Section = ({children, bgColor}: SectionProps) => {
  return (
    <div className="border-b-2 border-solid border-gray-200" style={{backgroundColor: bgColor}}>
      <div className="max-w-screen-xl m-auto relative ">
      {children}
        </div>
    </div>
  )
}

export default Section