function Resuma(){
    return(
    <div id="resuma" className='w-full h-auto text-6xl flex-col  md:h-screen border bg-[#0A101e] flex items-center justify-center text-center'>
        <div className=" relative mt-10 text-center">
        <h1 className="absolute md:w-[700px] flex justify-center items-center w-full md:flex hidden border top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:text-[60px] text-[10px] md:text-[120px] font-[700] text-white/5 tracking-[8px] select-none">
          RESUMA
        </h1>
    <h2 className="relative z-10 text-4xl font-bold mt-2 text-[#d4af37] tracking-[4px]">
      RESUMA
    </h2>
    <div className="flex justify-center mt-4">
      <span className="w-16 h-0.5 bg-[#3a3d4f]"></span>
      <span className="w-16 h-0.5 bg-[#d4af37]"></span>
      <span className="w-16 h-0.5 bg-[#3a3d4f]"></span>
    </div>
        </div>
        <div className="w-full mt-10 md:h-[400px] h-auto border flex md:flex-row flex-col">
          <div className="md:w-1/2 w-full border h-full md:pl-[0px] pl-5 md:mb-0 mb-3">
            <div className="border flex mt-2 items-center justify-start md:pl-[76px]">
              <img src="/edu_icon.png" className="w-[40px] h-[33px]" />
              <h2 className="text-[37px] ml-2  text-white mt-1">Education</h2>
            </div>
            <div className="md:ml-[90px] mt-3">
              <div className="flex group">
              <div>
              <div className="border-gray-500 group-hover:border-yellow-400 group-hover:bg-yellow-400 transition-all duration-300 border-[1.7px] w-[10px] h-[10px] rounded-full"></div>
              <div className="w-[1px] ml-1 h-[160px] border border-gray-500 "></div>
              </div>
              <div className="border w-auto text-start h-[150px] pl-3 mt-2 p-1 pt-2">
                <h1 className="text-[20px] text-yellow-400">Matric of Computer Science</h1>
                <p className="text-gray-400 text-[17px] mt-2 font-[500] text-start">2012 - 2024</p>
                <h1 className="text-[20px] mt-4 text-white">School of Al Sehar Academy</h1>
                <p className="text-[17px] text-gray-400 text-start max-w-[400px] mt-3">Secured Matriculation in Computer Science from Al Sehar Academy with distinction in core subjects.</p>
              </div>
              </div>
              <div className="flex group">
              <div>
              <div className="border-gray-500 border-[1.7px] group-hover:border-yellow-400 group-hover:bg-yellow-400 transition-all duration-300 w-[10px] h-[10px] rounded-full"></div>
              <div className="w-[1px] ml-1 h-[160px] border border-gray-500"></div>
              </div>
              <div className="border w-auto text-start h-auto pl-3 mt-2 p-1 pt-2">
                <h1 className="text-[20px] text-yellow-400"> 3-Year Diploma in Software Engineering</h1>
                <p className="text-gray-400 text-[17px] mt-2 font-[500] text-start">2024 - 2027</p>
                <h1 className="text-[20px] mt-4 text-white truncate max-w-[340px]" title="Memon Industrial and Technical Institute">Collage of Memon Industrial and Technical Institute</h1>
                <p className="text-[17px] text-gray-400 text-start max-w-[400px] mt-3">Pursuing a 3-year Diploma in Software Engineering with emphasis on full-stack development, algorithms, and system design.</p>
              </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 w-full border h-full md:pl-[0px] pl-5">
            <div className="border flex mt-2 items-center justify-start md:pl-[76px]">
              <img src="/exp-icon.png" className="w-[40px] h-[33px]" />
              <h2 className="text-[37px] ml-2  text-white mt-1">Experience</h2>
            </div>
            <div className="flex group">
              <div>
              <div className="border-gray-500 group-hover:border-yellow-400 group-hover:bg-yellow-400 transition-all duration-300 border-[1.7px] w-[10px] h-[10px] rounded-full"></div>
              <div className="w-[1px] ml-1 h-[160px] border border-gray-500 "></div>
              </div>
              <div className="border w-auto text-start h-[150px] pl-3 mt-2 p-1 pt-2">
                <h1 className="text-[20px] text-yellow-400">Senior UX/UI Designer</h1>
                <p className="text-gray-400 text-[18px] mt-3 font-[500] text-start">2023 - 2026 Present</p>
                <h1 className="text-[20px] mt-4 text-white">School of Al Sehar Academy</h1>
                <p className="text-[17px] text-gray-400 text-start max-w-[400px] mt-3">Secured Matriculation in Computer Science from Al Sehar Academy with distinction in core subjects.</p>
              </div>
              </div>
          </div>
        </div>
    </div>
    )
}
export default Resuma