import React from 'react'
 
type ProjectProps = {
  title: string,
  description: string,
  type: string,
  link: string,
}

const Project = ({
  title,
  description,
  type,
  link
}: ProjectProps) => {
  return (
    <div className="p-4">
      <div className="p-4">{title}</div>
      <div className="p-4">{description}</div>
      <div className="p-4"><a href={link}>Link to Github</a></div>
    </div>
  )
}

export default Project