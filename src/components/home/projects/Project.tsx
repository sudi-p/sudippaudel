import React from 'react';
import { FaGithub } from "react-icons/fa";
import Screenshots from './Screenshots';

type ProjectProps = {
  title: string,
  description: string,
  type: string,
  images: Array<string>,
  screenshotsAvailable: boolean,
  link?: string,
  tags: Array<string>
}

const Project = ({
  title,
  description,
  tags,
  screenshotsAvailable,
  images,
  link
}: ProjectProps) => {
  return (
    <div className="lg:flex gap-10 m-auto border-b border-solid border-gray-300 mb-10">
      <Screenshots images={images} screenshotsAvailable={screenshotsAvailable}/>
      <div className="z-20 flex flex-1 flex-col text-left">
        <span className="text-3xl font-bold mt-4 mb-8">{title}</span>
        <div className="text-xl leading-7 mb-5">{description}</div>
        <div className="gap-4 flex-wrap flex items-center">
          Tags: 
          {tags.map(tag => (
            <div key={tag} className="px-4 py-2 border-2 border-solid border-gray-300 rounded-xl font-bold">{tag}</div>
          ))}
        </div>
        {link && <a href={link} target="_next" className="opacity-90 hover:opacity-100 flex items-center justify-center gap-2 p-2 mb-5 mt-10 w-max text-center text-xl text-blue-400 border border-solid border-gray-300"> <FaGithub />Source</a>}
      </div>
    </div>
  )
}

export default Project