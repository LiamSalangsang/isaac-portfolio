import React from 'react';
import background from '../assets/isaacbackground.jpg';
import background2 from '../assets/car.jpg';
import { TypeAnimation } from 'react-type-animation';
import { GrLinkedin, GrGithub } from 'react-icons/gr';
import profile from '../assets/isaadprofile.jpg'

const Main = () => {
  return (
    <div id="main" className="relative">
        <img className=" w-full h-screen object-cover md:object-right z-10" src={background2} alt="Tiger BackGround" />
      <div className='text-white w-full text-center absolute top-[12rem] flex flex-col justify-center items-center z-30'>
      <img  className = 'w-[12rem] h-[12rem]  object-cover rounded-full border-2 border-black' src={profile} alt="" />
        <h1 className='xl:text-[3rem] xl:leading-[3rem] font-bold text-[2rem] mb-5 mt-5'>Hi!</h1>
        <h1 className=' xl:text-[3rem] xl:leading-[3rem] font-bold text-[2rem] mb-4'> I am  <span className='text-black'> Isaac Arli </span></h1>
        <TypeAnimation
          sequence={[
            "This Is My Portfolio!",
            4000,
            ""
          ]}
          wrapper="span"
          speed={30}
          className='xl:text-[3rem] font-bold text-[2rem]'
          repeat={Infinity}
        />
        <div className='flex justify-center gap-4 mt-4'>
          <a  className = 'hover:shadow-xl hover:shadow-blue-600 ease-in duration-200'  target="_blank" href="https://www.linkedin.com/in/isaac-arli/?originalSubdomain=au">
            <GrLinkedin size={50} />
          </a>
          <a className = 'hover:text-blue-600 ease-in duration-200' target="_blank" href="https://github.com/MiniSoda17">
            <GrGithub  size={50} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Main;
