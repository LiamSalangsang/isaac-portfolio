import React, { useState, useEffect } from 'react';
import { projectData,data } from '../../public/data'
import '../index.css';

const Projects = () => {
  const [desc, setdesc] = useState(false)

  const handleDesc=()=>{
    setdesc(!desc)
  }
  
  return (
    <div className=' w-full '>
    <div id = 'projects' className=' w-[75%] md:w-[30%] flex gap-1 justify-center shadow-md font-bold  text-white text-xl  shadow-gray-500 rounded-full p-4 z-30'>

    Projects
    <span className='hidden md:inline'> (Check Mobile Size Window!)</span>
    <span className='md:hidden'> (click for description!)</span>
    </div>
    

    <div className='space-y-[5rem] w-[100%] text-white md:pl-10 pl-4 pr-4 mt-10 pb-10 z-30'
    >
    {projectData.map(item=>{


      return(
        <>
        <div className=''>
        <button  onClick={handleDesc} className=" relative p-9 md:cursor-default border-white hover:bg-blue-600 md:hover:border-white ease-in duration-200 w-full border-2 rounded-[5rem] z-10">
        <div className='absolute left-[-0.5rem] z-20'>

        </div>
        <div className='z-30 md:text-[1rem] text-[0.8rem]'>{item.duration}</div>
        <div className = 'font-bold z-30  md:cursor-none md:text-[1rem] text-[0.8rem]'>{item.title}</div>
        <div className='md:block hidden mb-2 z-30 md:text-[1rem] text-[0.8rem]'> {item.description}</div>
        <div className='font-bold mb-2 underline'>Skills</div>
        {item.skills.map((desc,idx) => (
                <li key={idx}>{desc}</li>
              ))}

{desc?(<div className='rounded-[0.5rem] p-[2rem] md:text-[1rem] text-[0.8rem] w-full absolute top-[0px] left-0 z-30 bg-gray-600 '>{item.description}</div>):(null)}
        
        </button>
        </div>
        </>
        
      )
    })}
    </div>
    


  
    </div>


  )
}

export default Projects