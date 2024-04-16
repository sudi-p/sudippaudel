import React, { ReactNode, forwardRef } from 'react';
import { FaHome } from "react-icons/fa";
import { MdDeveloperMode } from "react-icons/md";
import { GoCodeReview } from "react-icons/go";
import { CgWebsite } from "react-icons/cg";

type NavbarProps = {
  homeRef: HTMLDivElement | null,
}
const Navbar = forwardRef(function Navbar({}, ref) {
  const { homeRef, skillsRef, projectsRef ,testimonialsRef } = ref;
  const links = [
    { icon: <FaHome />, text: "Home", ref:homeRef },
    { icon: <MdDeveloperMode />, text: "Skills", ref:homeRef  },
    { icon: <GoCodeReview />, text: "Projects", ref:homeRef },
    { icon: <CgWebsite />, text: "Testimonials", ref:homeRef },
  ]
  return (
    <div className="z-50 fixed top-0 left-4 bottom-0 flex justify-center">
      <ul className="text-2xl m-auto z-50 rounded-xl bg-blue-300 border border-blue-300 bg-opacity-10 backdrop-blur-md shadow-md text-center">
        <li onClick={() => {
          homeRef.current?.scrollIntoView({
            behavior: 'smooth'
          });
        }} className="group hover:text-3xl hover:text-blue-600 cursor-pointer w-16 h-16 flex items-center justify-center "><FaHome />
        </li>
        <li onClick={() => {
          skillsRef.current?.scrollIntoView({
            behavior: 'smooth'
          });
        }} className="group hover:text-3xl hover:text-blue-600 cursor-pointer w-16 h-16 flex items-center justify-center "><MdDeveloperMode />
        </li>
        <li onClick={() => {
          projectsRef.current?.scrollIntoView({
            behavior: 'smooth'
          });
        }} className="group hover:text-3xl hover:text-blue-600 cursor-pointer w-16 h-16 flex items-center justify-center "><GoCodeReview />
        </li>
        <li onClick={() => {
          testimonialsRef.current?.scrollIntoView({
            behavior: 'smooth'
          });
        }} className="group hover:text-3xl hover:text-blue-600 cursor-pointer w-16 h-16 flex items-center justify-center "><CgWebsite />
        </li>
      </ul>
    </div>
  )
});

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