import React, { useState } from 'react'
import { useScroll ,motion ,useMotionValueEvent } from "framer-motion"
const Work = () => {

    const [images, setimages] = useState([
      {url: "https://plus.unsplash.com/premium_photo-1710679068192-3b2364b13bbe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , top : "50%", left : "50%", isactive : false},
      {url: "https://images.unsplash.com/photo-1694903062502-6df8204136af?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , top : "53%", left : "55%", isactive : false},
      {url: "https://images.unsplash.com/photo-1707665501060-09508c34a85c?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , top : "58%", left : "45%", isactive : false},
      {url: "https://images.unsplash.com/photo-1647744196550-bcac5116c68f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , top : "69%", left : "53%", isactive : false},
      
    ])

    const { scrollYProgress } = useScroll()

    scrollYProgress.on( "change", (data) => {
      function imagesShow(arr){
        setimages((prev) => 
        prev.map((item,index)=>
          arr.indexOf(index) === -1
          ? {...item, isactive: false}
          : {...item, isactive: true}
      )
      )
      }
        switch(Math.floor(data*100)){
          case 0:
            imagesShow([])
            break;
          case 1:
            imagesShow([0])
            break;
          case 2:
            imagesShow([0,1])
            break;
          case 3:
            imagesShow([0,1,2])
            break;
          case 4:
            imagesShow([0,1,2,3])
            break;
     
        }

    })







  return (
   <div className='w-full '>
     <div className='max-w-screen-lg mx-auto relative text-center p-0 '  >
      <h1 className='text-[36vw] leading-none  font-medium tracking-tight select-none ' >work</h1>
      <div className='w-full h-full absolute top-0 ' >
        { images.map((elem, index) => elem.isactive && (<img key={index} className='w-36 h-36 rounded-lg absolute translate-x-[-50%] translate-y-[-50%]' style={{top: elem.top ,left:elem.left}} src={elem.url} alt="" />) ) } 
      </div>
    </div>
    
   </div>
  )
}

export default Work
