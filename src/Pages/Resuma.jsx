function Resuma(){
    return(
    <div id="resuma" className='w-full text-6xl flex-col  h-screen border bg-[#0A101e] flex items-center justify-center text-center'>
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
        <div className="w-full h-[300px] border">
          <div className="w-1/2 border h-full"></div>
          <div className="w-1/2 border h-full"></div>
        </div>
    </div>
    )
}
export default Resuma