import React from 'react';
import { FaPeopleCarryBox } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import Section from './Section';
import Social from './Social';

type FooterProps = {
  handleClick : () => void;
}

const Footer = ({ handleClick}: FooterProps) => {
  return (
    <Section>
      <div className="relative">
        <div className=" leading-relaxed flex justify-between items-center max-w-screen-xl m-auto tracking-wide p-10 text-center bg-blue-200 rounded-xl w-4/5 absolute inset-x-0 -top-[60px]">
          <p className="font-bold text-2xl">Start a project</p>
          <div className="text-xl">
            Interested in working together? Drop me a message
          </div>
          <div onClick={handleClick} className="flex gap-2 items-center bg-blue-500 p-4 rounded-lg text-white cursor-pointer font-bold"> <FaPeopleCarryBox /> Ready to roll!</div>
        </div>
        <div>
          <div className="pt-32 pb-16 text-2xl font-extralight text-center m-auto w-max flex flex-col items-center">
            <p className="mb-12">
              "Fall seven times, stand up eight."
            </p>
            <span className="flex item-center gap-2 mb-4">Mail me on <span className="text-blue-500 flex items-center"><CiMail /> spaudel645@gmail.com</span></span>
             Connect me on: <Social/>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Footer