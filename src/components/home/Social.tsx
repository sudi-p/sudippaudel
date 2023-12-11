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
      link: "https://www.linkedin.com/in/sudippau"
    }, {
      icon: <GitHubIcon sx={{ fontSize: 50 }}/>,
      link: "https://github.com/sudi-p"
    }
  ]
  return (
    <div>
      {links.map(({ link, icon }) => (
        <a href={link} target="_next" className="mr-4">
          {icon}
        </a>
      ))}
    </div>
  )
}
