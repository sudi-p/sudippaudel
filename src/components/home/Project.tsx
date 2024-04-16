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
    <div  className="h-96 w-96 relative group border border-solid border-blue-200 rounded-lg overflow-hidden">
        <div style={{backgroundImage: `url(${image})`}} className="absolute overflow-hidden inset-0 z-10  bg-cover bg-center bg-no-repeat brightness-50 hover:brightness-100 "> </div>
        <div className="z-20 p-4 cursor-pointer h-full relative text-white flex flex-col gap-5 justify-center items-center">
          <div className="mb-4 text-4xl group-hover:hidden">{title}</div>
          <div className="hidden group-hover:block p-4 text-center text-xl">{description}</div>
          <div className="gap-4 flex-wrap justify-center hidden group-hover:flex">
            {tags.map(tag => (
              <div key={tag} className="px-4 py-2 border-2 border-solid border-white rounded-3xl">{tag}</div>
            ))}
          </div>
          {link && <a href={link} target="_next" className="hidden opacity-90 hover:opacity-100 group-hover:flex items-center justify-center gap-2 p-2 rounded-xl mt-10 border-2 border-solid w-full border-white text-center text-xl"> <FaGithub/>Source</a>}
        </div>
    </div>
  )
}

export default Project