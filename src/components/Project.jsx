import React from 'react'
import Button from './Button'


const Project = ({elem,index}) => {

  return (


    <>
    <div className='w-[90vw] h-[95vh]  rounded-2xl flex p-8 gap-5' style={{backgroundColor:elem.color}}>
      <div className='w-[50%] h-full flex flex-col gap-4 items-end ' id="left">
      <img className='w-80 rounded-2xl '  src={elem.img1} alt="" />
      <img className='w-[98%] rounded-2xl' src={elem.img2} alt="" />

      </div>
      <div className='w-[50%] h-full flex flex-col relative' id="right">
      <video className='w-[96%]  rounded-2xl' src={elem.video} muted loop autoPlay></video>
      <p className='text-sm mt-4 font-["Satoshi_Variable"]' >{elem.para}</p>
      <h5 className='text-m mt-2 font-["Satoshi_Variable"]'>{elem.head}</h5>
      <div className='relative h-12 flex justify-start items-center w-36 mt-5' >
      < Button  />
      </div>
      </div>
    </div>
    </>
  )
}

export default Project
