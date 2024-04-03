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
      icon: <LinkedInIcon sx={{ fontSize: 50 }}/>,
      title: "Connect with me on ",
      link: "https://www.linkedin.com/in/sudippau"
    }, {
      icon: <GitHubIcon sx={{ fontSize: 50 }}/>,
      title: "View my projects on ",
      link: "https://github.com/sudi-p"
    }
  ]
  return (
    <div>
      {links.map(({ link, icon, title }) => (
        <a href={link} key="link" target="_next" className="mr-4 p-2 border-slate-400">
          <span className="hidden hover:block">{title}</span>
          {icon}
        </a>
      ))}
    </div>
  )
}
