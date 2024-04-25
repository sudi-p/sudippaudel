import React from 'react';
import { FaGithub } from "react-icons/fa";
 
type ProjectProps = {
  title: string,
  description: string,
  type: string,
  image: string,
  link?: string,
  tags: Array<string>
}

const Project = ({
  title,
  description,
  tags,
  image,
  link
}: ProjectProps) => {
  return (
    <div  className="flex gap-10 m-auto border-b border-solid border-gray-300 mb-10">
        <div style={{backgroundImage: `url(${image})`}} className=" h-96 w-96 z-10 flex-1 bg-cover bg-center bg-no-repeat rounded-lg" />
        <div className="z-20 flex flex-1 flex-col text-left">
          <span className="text-3xl font-bold mb-8">{title}</span>
          <div className="text-xl leading-7 mb-5">{description}</div>
          <div className="gap-4 flex-wrap flex">
            {tags.map(tag => (
              <div key={tag} className="px-4 py-2 border-2 border-solid border-gray-300 rounded-3xl">{tag}</div>
            ))}
          </div>
          {link && <a href={link} target="_next" className="opacity-90 hover:opacity-100 flex items-center justify-center gap-2 p-2 mb-5 rounded-xl mt-10 border-2 border-solid w-full border-gray-300 text-center text-xl"> <FaGithub/>Source</a>}
        </div>
    </div>
  )
}

export default Project