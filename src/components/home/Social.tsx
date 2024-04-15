import React from 'react';
import Icon from '@mui/material/Icon';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton } from '@mui/material';

export default function Social() {
  
  const links = [
    {
      icon: <LinkedInIcon sx={{ fontSize: 50 }} />,
      color: "#0a66c2",
      link: "https://www.linkedin.com/in/sudippau"
    }, {
      icon: <GitHubIcon sx={{ fontSize: 50 }} />,
      color: "#000",
      link: "https://github.com/sudi-p"
    }
  ]
  return (
    <div className="flex w-max">
      {links.map(({ link, icon, color }) => (
        <a href={link} key={link} style={{ color: color}} target="_next" className={`mr-2 p-2 opacity-100 hover:opacity-70 hover:text-[${color}]`}>
          {icon}
        </a>
      ))}
    </div>
  )
}
