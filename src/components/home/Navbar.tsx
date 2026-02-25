import React, { ReactNode, forwardRef } from 'react';
import { FaHome } from "react-icons/fa";
import { MdDeveloperMode, MdContactMail } from "react-icons/md";
import { GoCodeReview } from "react-icons/go";
import { CgWebsite } from "react-icons/cg";
import { IoNewspaperOutline } from "react-icons/io5";

type NavbarProps = {
  homeRef: HTMLDivElement | null,
}

const Navbar = () =>{
  const links = [
    { icon: <FaHome />, text: "Home", id:"home" },
    { icon: <MdDeveloperMode />, text: "Skills", id:"skills"  },
    { icon: <GoCodeReview />, text: "Projects", id:"projects" },
    { icon: <IoNewspaperOutline />, text: "Blogs", id:"blogs" },
    { icon: <CgWebsite />, text: "Testimonials", id:"testimonials" },
    { icon: <MdContactMail />, text: "Contact", id:"contact" },
  ]
  return (
    <div className="z-50 fixed lg:top-0 left-0 lg:left-4 right-0 lg:right-auto bottom-0 flex justify-center">
      <ul className="text-2xl m-auto z-50 flex lg:block rounded-xl bg-blue-300 bg-opacity-10 border border-blue-300 backdrop-blur-md shadow-md text-center">
        {links.map(({icon, text, id})=>(
          <li key={text} onClick={() => {
            const element = document.getElementById(id)
            element?.scrollIntoView({
              behavior: 'smooth'
            });
          }} className="group hover:text-3xl hover:text-blue-600 cursor-pointer w-12 md:w-16  h-12 md:h-16 flex items-center justify-center ">{icon}
          </li>
        ))}
      </ul>
    </div>
  )
};

export default Navbar;

// type NavBarIconProps = {
//   icon: ReactNode,
//   text: String,
// }

// const NavBarIcon = ({ icon }: NavBarIconProps) => {
//   return (
//     <li className="group hover:text-3xl hover:text-blue-600 cursor-pointer w-16 h-16 flex items-center justify-center ">{icon}
//     </li>
//   );
// }