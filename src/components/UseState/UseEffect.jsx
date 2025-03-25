import React, { useEffect, useState } from 'react'

const UseEffect = () => {
const [screenWidth, setScreenWIDTH] = useState(window.screen.width)

const windowResize =()=>{
  setScreenWIDTH(window.innerWidth)
}

useEffect(()=>{
  window.addEventListener('resize', windowResize)
})

  return (
    <div className='bg-black text-white flex flex-wrap justify-center items-center h-screen'>
      {`The Screen size is ${screenWidth}`}
    </div>
  )
}

export default UseEffect
