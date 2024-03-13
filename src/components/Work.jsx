import React from 'react'
import {data} from '../../public/data'


const Work = () => {
  return (
    <div className='bg-black h-screen w-full'>

    <div id='work' className=' w-[40%] md:w-[15%] flex justify-center shadow-md font-bold  text-white text-xl  shadow-gray-500 rounded-full p-4 z-30'>
    Work Experience</div>

    <div className=' text-white md:mt-[3.2rem] mt-[5rem] pl-10 flex justify-center flex-col z-30'
    >
    {data.map(item=>{


      return(
        <div className=" relative p-9 border-l border-white z-30">
        <div className='absolute left-[-0.5rem] top-[2.6rem] p-2 bg-gray-500 rounded-full z-30'>

        </div>
        <div className='md:text-[1rem] text-[0.8rem]'>{item.time}</div>
        <div className = 'font-bold md:text-[1rem] text-[0.8rem]'>{item.name}</div>
        {item.description.map((desc, idx) => (
                <li className = 'md:text-[1rem] text-[0.8rem]' key={idx}>{desc}</li>
              ))}

        </div>
      )
    })}
    </div>
    </div>

  )
}

export default Work