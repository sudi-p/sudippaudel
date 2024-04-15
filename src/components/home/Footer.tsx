import React from 'react';
import { FaPeopleCarryBox } from "react-icons/fa6";
import Section from './Section';
import Social from './Social';

type FooterProps = {
  handleClick : () => void;
}

const Footer = ({ handleClick}: FooterProps) => {
  return (
    <Section>
      <div className="relative">
        <div className=" leading-relaxed flex justify-between max-w-screen-xl m-auto tracking-wide p-10 text-center bg-blue-200 rounded-xl w-4/5 absolute inset-x-0 -top-[60px]">
          <p className="font-bold text-2xl">Start a project</p>

          <div className="text-xl">
            Interested in working together? Drop me a message
          </div>

          <div onClick={handleClick} className="flex gap-2 items-center bg-blue-400 p-2 rounded-lg text-white font"> <FaPeopleCarryBox /> Ready to roll!</div>
        </div>
        <div>
          <div className="p-32 text-2xl font-extralight text-center m-auto w-max flex flex-col items-center">
            <p className="mb-8">
              "Fall seven times, stand up eight."
            </p>
            Connect me on: <Social/>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Footer