import React from 'react'

function About() {
  return (
    <div id="about" className='w-full pt-10 pb-16 bg-[#0A101e] flex flex-col items-center'>
      
      {/* Heading Section */}
      <div className="relative mt-10 text-center px-4">
        <h1 className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[80px] md:text-[120px] font-[700] text-white/5 tracking-[8px] select-none">
          ABOUT ME
        </h1>
        <h2 className="relative z-10 text-4xl md:text-5xl font-bold mt-2 text-[#d4af37] tracking-[4px]">
          ABOUT ME
        </h2>
        <div className="flex justify-center mt-4 mb-5">
          <span className="w-16 h-0.5 bg-[#3a3d4f]"></span>
          <span className="w-16 h-0.5 bg-[#d4af37]"></span>
          <span className="w-16 h-0.5 bg-[#3a3d4f]"></span>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-7xl mx-auto mt-10 px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center md:items-start">

          {/* Left Side - Image */}
          <div className='md:w-[45%] w-full flex justify-center md:justify-end'>
            <div className='w-full max-w-[380px] md:w-[85%] aspect-[4/5] border-2 border-[#d4af37]/20 rounded-xl overflow-hidden'>
              <img 
                src="/user_image.png" 
                alt="Huzaifa Asif" 
                className='w-full h-full object-cover' 
              />
            </div>
          </div>

          {/* Right Side - Info */}
          <div className='md:w-[55%] w-full'>
            <div className='space-y-6'>
              <h1 className='text-3xl md:text-[35px] font-semibold text-white'>
                Hi, There! I'm Huzaifa Asif
              </h1>
              
              <p className='text-2xl md:text-[25px] text-yellow-400'>Web Designer</p>

              <p className='text-[17px] md:text-[20px] text-gray-400 leading-relaxed tracking-wide'>
                I am a passionate Front-End Developer focused on creating modern, responsive, and user-friendly websites.
                I build clean and interactive web experiences using HTML, CSS, JavaScript, and Tailwind CSS.
              </p>

              {/* Personal Info */}
              <div className='space-y-4 text-[17px] md:text-[19px] text-gray-400'>
                <p><span className='inline-block w-24'>Birthday</span> : October 30, 2008</p>
                <p><span className='inline-block w-24'>Phone</span> : +923171325641</p>
                <p><span className='inline-block w-24'>Email</span> : huz07610761@gmail.com</p>
                <p><span className='inline-block w-24'>From</span> : Korangi no.2/3, Karachi</p>
                <p><span className='inline-block w-24'>Country</span> : Pakistan</p>
                <p><span className='inline-block w-24'>Language</span> : English & Urdu</p>
              </div>

              {/* Download CV Button */}
              <a 
                href="/main_inpotant.pdf" 
                download="Huzaifa-Asif-CV.pdf"
                className="inline-block mt-4 bg-yellow-400 hover:bg-yellow-500 text-black text-[18px] px-8 py-3.5 font-medium rounded-full transition-all duration-300 shadow-lg shadow-yellow-400/50 hover:shadow-xl"
              >
                Download CV
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About