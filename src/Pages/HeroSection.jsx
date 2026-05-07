import React from 'react'

function HeroSection() {
  return (
    <div className='w-full h-screen hero_Cont flex items-center justify-center'>
        <div className="w-[65%] h-1/2 text-center flex flex-col justify-center items-center">
            <h1 className='text-6xl font-["Poppins",sans-serif] font-semibold text-white'>Hi, I am <span className='text-yellow-400'>Huzaifa Asif</span></h1>
            <p className='font-bold text-gray-400 text-stroke-1 mt-3 font-["Poppins",sans-serif] tracking-wide text-2xl'>
            I am a frontend web developer. I can provide clean code and pixel perfect design.
            I also make website more & more interactive with web animations.</p>
            <div>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </div>
  )
}

export default HeroSection