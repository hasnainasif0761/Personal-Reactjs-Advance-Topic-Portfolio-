import React, {useEffect, useState} from 'react'

function MovingBall() {
  
  const [position,setPosition] = useState({x:0,y:0})

  useEffect(()=>{
    const handleMove = (e) =>{
      setPosition({ x:e.clientX,y:e.clientY });
    }
    window.addEventListener('mousemove',handleMove)
    return()=>{
      window.removeEventListener('mousemove',handleMove)
    }
  },[])


  return (
    <div className='fixed w-4 h-4 bg-yellow-300 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference'
    style={{
        left:`${position.x}px`,
        top:`${position.y}px`
    }}
    >
    </div>
  )
}

export default MovingBall