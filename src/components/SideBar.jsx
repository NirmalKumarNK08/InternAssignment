import React, { useState, useEffect } from 'react'
import { AiFillHome, AiFillContacts, AiOutlineClose } from "react-icons/ai";
import { HiInformationCircle } from "react-icons/hi";
import { MdLibraryBooks } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Sidebar = ({children}) => {
  //Routing to all the components
  const navLinks = [
    {
      path: "/",
      name: "Home",
      icon: <AiFillHome />
    },
    {
      path: "/information",
      name: "Information",
      icon: <HiInformationCircle />
    },
    {
      path: "/guide",
      name: "Guide",
      icon: <MdLibraryBooks />
    },
    {
      path: "/contact",
      name: "Contact",
      icon: <AiFillContacts />
    },
  ]

  const [isOpen, setIsOpen] = useState(true);
  const [isWidth, setIsWidth] = useState(true);
  const toggleSideBarOpen = () => {
    setIsOpen(!isOpen);
  };
  
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 768) {
        setIsOpen(true);
        setIsWidth(false);
      } else {
        setIsOpen(false);
        setIsWidth(true);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="container">
      <div style={{transform: !isOpen && "translateX(-18em)"}} className="sideNavBar">
        <div className="topNav">
          <h1 className='logo'>Intern</h1>
          <div onClick={toggleSideBarOpen} style={{transform: !isOpen && "translateX(5em)"}} className="hamburgerIcon">{isOpen ? <AiOutlineClose/> : <FaBars/>}</div>
        </div>
        {
          navLinks.map((links, index) => (
            <NavLink to={links.path} key={index} onClick={isWidth && toggleSideBarOpen} className="eachLink" activeclassName="active">
              <div className="linksIcon"> {links.icon} </div>
              <div className="linksName"> {links.name} </div>
            </NavLink>
          ))
        }
      </div>
      <main style={{width: "100%"}} className='mainScreen'>{children}</main>
    </div>
  )
}

export default Sidebar