import React from 'react';
import Icon from '@mui/material/Icon';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton } from '@mui/material';

export default function Social() {
  const linkIconStyle = {
    fontSize: 50,

  }
  const links = [
    {
      icon: <LinkedInIcon sx={{ fontSize: 50 }} />,
      title: "Connect with me on ",
      link: "https://www.linkedin.com/in/sudippau"
    }, {
      icon: <GitHubIcon sx={{ fontSize: 50 }} />,
      title: "View my projects on ",
      link: "https://github.com/sudi-p"
    }
  ]
  return (
    <div className="flex">
      {links.map(({ link, icon, title }) => (
        <a href={link} key={link} target="_next" className="mr-4 p-2 relative flex items-center  group hover:border border-solid focus:outline-none focus:ring active:bg-indigo-600 active:text-white">
          <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-violet-600 transition-all duration-500 group-hover:w-full"></span>
          <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-violet-600 transition-all duration-500 group-hover:h-full"></span>
          <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-violet-600 transition-all duration-500 group-hover:w-full"></span>
          <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-violet-600 transition-all duration-500 group-hover:h-full"></span>
          <span className="hidden group-hover:block text-lg font-bold">{title}</span>
          {icon}
        </a>
      ))}
    </div>
  )
}
