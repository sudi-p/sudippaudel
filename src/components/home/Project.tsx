import React from 'react'
 
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
    <div  className="h-80 w-80 relative group border border-solid border-blue-200 rounded-lg overflow-hidden">
        <div style={{backgroundImage: `url(${image})`}} className="absolute overflow-hidden inset-0 z-10  bg-cover bg-center bg-no-repeat brightness-50 hover:brightness-100 "> </div>
        <div className="z-20 p-4 cursor-pointer h-full relative text-white flex flex-col justify-center items-center">
          <div className="mb-4 text-4xl group-hover:hidden">{title}</div>
          <div className="hidden group-hover:block p-4 text-center">{description}</div>
          <div className="gap-4 flex-wrap justify-center hidden group-hover:flex">
            {tags.map(tag => (
              <div className="p-2 border-2 border-solid border-white rounded-sm">{tag}</div>
            ))}
          </div>
          {link && <button className="hidden group-hover:block p-4"><a href={link}>Link to Github</a></button>}
        </div>
    </div>
  )
}

export default Project