import React from 'react'
import { FiArrowRight } from "react-icons/fi";

export const Boxs = () => {
  return (
    <div className='h-[60vh] w-[95%] flex gap-4   items-center m-auto '>

<div className='h-full w-2/6 rounded-2xl bg-zinc-800 px-6 py-3 hover:px-7 transition-all hover:bg-zinc-700 '>
            <h3 className='w-full flex items-center justify-between text-sm  capitalize'>up next:project <FiArrowRight /> </h3>
            <h2 className='text-2xl capitalize mt-5'>project & case</h2>
            <h2 className='text-2xl capitalize '>studies</h2>

            <h2 className='text-[1.7vh] capitalize mt-48'>form brand to  wesite ,our</h2>
            <h2 className='text-[1.7vh] capitalize '>work speaks for itselfs</h2>

        </div>


        <div className='h-full w-2/3 rounded-2xl bg-zinc-800 px-6 py-3 hover:bg-violet-600'>
            <h3 className='w-full flex items-center justify-between text-sm  capitalize'>get in touch <FiArrowRight /> </h3>
            <h2 className='text-2xl capitalize mt-5'>lets get to  it ,</h2>
            <h2 className='text-2xl capitalize '>together</h2>

            <h1 className='text-7xl tracking-tight  mt-20 '>Start a Project</h1>
            <button className='rounded-full border px-6 py-2 mt-8'>contact us</button>
        </div>
        
    </div>
  )
}
