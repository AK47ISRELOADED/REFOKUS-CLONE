import React from 'react'
import Button from './Button'


const  Navbar = () => {
  return (
    <div className=' max-w-screen-lg mx-auto flex items-center gap-20 p-3 py-5 relative border-b-[1px] absolute bg-[#151517]   text-white border-zinc-700'>
      <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
       <div id='links' className='flex items-center  gap-10'>
        
        {["home", "work" , "careers" , "news"].map((elem,index)=> (
            
        <a key={index} className='flex items-center gap-1 text-sm font-["Satoshi_Variable"] ' href="#">
            {index === 1 && <span key={index} style={{boxShadow: "0 0 0.25rem #00FF19 "}} className='inline-block mt-1 h-1 w-1 rounded-full bg-green-600'></span>}
            {index === 3 && <span key={index} className='inline-block  mr-6 '>|</span>}
            {elem}</a>) 
        )    }
       </div>
       < Button />
    </div>
  )
}

export default Navbar
