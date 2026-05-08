import React, {useEffect, useState} from 'react'
import { FaPhone } from "react-icons/fa6";
import '../index.css'
import { BsList } from "react-icons/bs";



function Navbar() {
  const [showBg, setShowBg] = useState(false);
  const [isOpen, setIsOpen] = useState(false)

  useEffect(()=>{
    const handleEvent = () =>{
      if(window.scrollY > 10){
      setShowBg(true)
    }else{
      setShowBg(false)
    }
    }

    window.addEventListener('scroll',handleEvent);

    return()=>{
      window.removeEventListener('scroll',handleEvent);
    }  
  },[])

  return (
    <nav className={`w-full h-20 ${showBg ? 'bg-[#070f1c]' : 'bg-transparent'} transition-all duration-300 ease-in-out flex justify-between items-center px-5 fixed top-0 left-0`}>
     <div>
           <p className='text-white md:text-3xl text-lg logo_head tracking-widest'>&lt; <span className='text-yellow-400'>H</span>uzaifa /&gt;</p> 
     </div>
     <ul className='hidden md:flex gap-10'>
        <li><a href="#" className="text-white font-semibold hover:text-gray-300 duration-150">HOME</a></li>
        <li><a href="#about" className='text-white font-semibold hover:text-gray-300 duration-150'>ABOUT</a></li>
        <li><a href="#resuma" className="text-white font-semibold hover:text-gray-300 duration-150">RESUMA</a></li>
        <li><a href="#project" className="text-white font-semibold hover:text-gray-300 duration-150">PROJECT</a></li>
        <li><a href="#contact" className="text-white font-semibold hover:text-gray-300 duration-150">CONTACT</a></li>
     </ul>
     <p className='hidden md:flex items-center gap-4 font-semibold justif-center text-lg text-yellow-400'><FaPhone className='text-white' /> +92 311 124 3675</p>
    <BsList size={40} onClick={()=>setIsOpen(!isOpen)}  className="flex md:hidden select-none text-white cursor-pointer" />
    {
        <ul className={`absolute top-full transition-all duration-300 ease-in-out ${isOpen?'left-0':'-left-full'} w-full bg-black/50 h-screen md:hidden flex flex-col gap-4 justify-center items-center shadow-lg`}>
        <li><a href="#" className="text-white font-semibold hover:text-gray-300 duration-150" onClick={()=>setIsOpen(false)}>HOME</a></li>
        <li><a href="#about" className='text-white font-semibold hover:text-gray-300 duration-150' onClick={()=>setIsOpen(false)}>ABOUT</a></li>
        <li><a href="#resuma" className="text-white font-semibold hover:text-gray-300 duration-150" onClick={()=>setIsOpen(false)}>RESUMA</a></li>
        <li><a href="#project" className="text-white font-semibold hover:text-gray-300 duration-150" onClick={()=>setIsOpen(false)}>PROJECT</a></li>
        <li><a href="#contact" className="text-white font-semibold hover:text-gray-300 duration-150" onClick={()=>setIsOpen(false)}>CONTACT</a></li>
     </ul>
      
    }
    </nav>
  )
}

export default Navbar