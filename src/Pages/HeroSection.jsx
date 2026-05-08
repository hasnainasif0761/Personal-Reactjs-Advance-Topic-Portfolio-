import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";


function HeroSection() {
  return (
    <div className='w-full h-screen hero_Cont flex items-center justify-center'>
        <div className="w-full md:w-[65%] md:px-0 px-3 h-1/2 text-center flex flex-col justify-center items-center">
            <h1 className='text-2xl md:text-6xl font-["Poppins",sans-serif] font-semibold md:mb-3 text-white'>Hi, I am <span className='text-yellow-400'>Huzaifa Asif</span></h1>
            <p className='max-w-[450px] md:max-w-[850px] text-gray-400 text-stroke-1 mt-3   font-["Inter",sans-serif] tracking-wider text-sm md:text-xl'>
            I am a frontend web developer. I can provide clean code and pixel perfect design.
            I also make website more & more interactive with web animations.</p>
            <div className='flex gap-3 md:mt-4 mt-4'>
                <span className='w-[45px] h-[45px] border flex items-center justify-center rounded-full border-2 border-gray-400 hover:border-white cursor-pointer transition-all duration-300'><FaLinkedinIn size={20} className='text-gray-400 hover:text-white' /></span>
                <span className='w-[45px] h-[45px] border flex items-center justify-center rounded-full border-2 border-gray-400 hover:border-white cursor-pointer transition-all duration-300'><FaGithub size={20}  className='text-gray-400  hover:text-white' /></span>
                <span className='w-[45px] h-[45px] border flex items-center justify-center rounded-full border-2 border-gray-400 hover:border-white cursor-pointer transition-all duration-300'><SiLeetcode size={20}  className='text-gray-400 hover:text-white' /></span>
            </div>
        </div>
    </div>
  )
}

export default HeroSection