import React from 'react'
import Project from './Project'

const Projects = () => {
  var dets = [
    {img1: "https://assets-global.website-files.com/6334198f239547f2fccd84c1/650c5f12d26da475b2fd6b88_15.webp" , img2: 'https://assets-global.website-files.com/6334198f239547f2fccd84c1/650c5f15978b05dc7f2ae554_14.webp' , video: 'https://cdn.refokus.com/website/Arqitel/Arqitel%20project%20video%204_3.webm', para : 'Concept, Design, 3D, Webflow+WebGL Development',  head :"With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.", color: '#5355EE' },
    {img1: "https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b413200259aa2289224594_Frame%204.png" , img2: 'https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b41324914b470b20ec7d03_Frame%203.png' , video: 'https://cdn.refokus.com/website/Cula_promo_new_4_3.mp4', para : 'Concept, Design, 3D, Webflow+WebGL Development',  head :"We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",color: '#4A576B' },
    {img1: "https://assets-global.website-files.com/6334198f239547f2fccd84c1/65f112dec7a59534cca51a3d_portfolioCard_cc-01-p-1080.webp" , img2: 'https://assets-global.website-files.com/6334198f239547f2fccd84c1/65f1160e50447ddfb490fb59_portfolioCard_cc-02%20(1).webp' , video: 'https://cdn.refokus.com/refokus-promo/webflow-education-promo.mp4', para : 'Concept, Design, Webflow Development',  head :"An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",color: '#1626F3' },
    {img1: "https://assets-global.website-files.com/6334198f239547f2fccd84c1/64cd6ec7666ac6009cfcb7db_11-p-500.jpg" , img2: 'https://assets-global.website-files.com/6334198f239547f2fccd84c1/64cd6ecc885579ba1b4ffc97_10.jpg' , video: 'https://cdn.refokus.com/website/TTR/TTR%20project%20video%204_3_H.264.webm', para : 'Concept, Design, 3D, Webflow+WebGL Development, AI Integrations',  head :"We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",color: '#3E4365' },
    {img1: "https://assets-global.website-files.com/6334198f239547f2fccd84c1/64cc29f414c45ee4f46aa3ba_01-p-500.jpg" , img2: 'https://assets-global.website-files.com/6334198f239547f2fccd84c1/64cc29f66c6594c072ba1a38_02.jpg' , video: 'https://cdn.refokus.com/website/2022/videos/Silvr.webm', para : 'Design, Webflow Development',  head :"We teamed up with financing solutions provider Silvr to audit, refine and evolve their brand." ,color: '#FF7548' },
    {img1: "https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b415e16156819899272250_Frame%202-p-500.png" , img2: 'https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b2cab86e8df24e528c4441_Frame%201.png' , video: 'https://cdn.refokus.com/website/Maniv-Compressed.mp4', para : 'Branding, Design, Webflow+GSAP Development',  head :"A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.", color: '#2DCB76' },
    
   
  ]
  return (
    <div className='w-full h-max flex flex-col items-center gap-8 '>
      {dets.map((elem,index) =>{
        return < Project  elem={elem} key={index} />
      }
      ) }
    </div>
  )
}

export default Projects
