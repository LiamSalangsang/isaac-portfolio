import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineHome, AiOutlineProject } from "react-icons/ai";
import { GrProjects } from "react-icons/gr";

const Sidenav = () => {
  const [nav, setNav] = useState(false);

  function handleNav() {
    setNav(!nav);
    console.log("navigation state changed");
  }

  function handleClose() {
    setNav(false);
    console.log("navigation closed");
  }

  return (
    <div>
      <AiOutlineMenu
        size={40}
        onClick={handleNav}
        className="top-4 right-4 z-[99] md:hidden hover:translate-x-[-8px] ease-in duration-[0.2s] fixed"
      />

      {nav ? (
        <div className=" fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-50">
          <a
            href="#main"
            className=" items-center flex w-[75%]flex justify-center shadow-lg rounded-full m-2 p-4 bg-gray-100 w-[75%] shadow-gray-500 hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={24} />
            <span className="pl-4">Home</span>
          </a>
          <a
            href="#work"
            className=" items-center flex w-[75%]flex justify-center shadow-lg rounded-full m-2 p-4 bg-gray-100 w-[75%] shadow-gray-500 hover:scale-110 ease-in duration-200"
          >
            <GrProjects size={22} />
            <span className="pl-4">Experience</span>
          </a>
          <a
            href="#projects"
            className=" items-center flex w-[75%]flex justify-center shadow-lg rounded-full m-2 p-4 bg-gray-100 w-[75%] shadow-gray-500 hover:scale-110 ease-in duration-200"
          >
            <AiOutlineProject size={24} />
            <span className="pl-4">Projects</span>
          </a>
          <button className=" hover:scale-110 ease-in duration-200 shadow-lg rounded-full m-2 p-4 bg-gray-100 w-[25%] shadow-gray-500" onClick={handleClose}> Close </button>
        </div>
      ) : null}

      <div className=" md:flex md:justify-center w-full hidden  m-2 fixed z-50">
        <div className="flex gap-2">
          <a
            className=" flex justify-center group mb-2 p-5 bg-gray-100 shadow-lg shadow-gray-500 rounded-full hover:bg-gray-400 ease-in duration-200"
            href="/"
          >
           <div className="flex  gap-1 items-center ">

            <AiOutlineHome className="group-hover:text-white ease-in duration-200" />
            <span>Home</span>

           </div>
          </a>

          <a
            className="group mb-2 p-5 bg-gray-100 shadow-lg shadow-gray-500 rounded-full hover:bg-gray-400 ease-in duration-200"
            href="#work"
          >
           <div className="flex  gap-1 items-center ">
            <GrProjects className="group-hover:text-white ease-in duration-200" />
            <span>Work</span>
           </div>
          </a>

          <a
            className="group mb-2 p-5 bg-gray-100 shadow-lg shadow-gray-500 rounded-full hover:bg-gray-400 ease-in duration-200"
            href="#projects"
          >
            <div className="flex gap-1 items-center ">
              <AiOutlineProject className="group-hover:text-white ease-in duration-200" />
              <span>Projects</span>
            </div>
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
