import React from "react";
import { motion } from "framer-motion";

const Awards = () => {
  var awards = [
    {
      img: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",
    },
    {
      img: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg",
    },
    {
      img: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg",
    },
    {
      img: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",
    },
    {
      img: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg",
    },
    {
      img: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg",
    },
    {
      img: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",
    },
    {
      img: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg",
    },
    {
      img: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg",
    },
  ];

  var create = [
    { name: "2D/3D ANIMATION" },
    { name: "WEB DESIGN" },
    { name: "CREATIVE DEVELOPMENT" },
    { name: "WEB FLOW DEVELOPMENT" },
    { name: "BRANDING & ART DIRECTION" },
    { name: "AI STRATGIES" },
  ];

  return (
    <div className="h-36 w-full  bg-zinc-80 mt-20">
      <motion.div
        initial={{ x: "0" }}
        animate={{ x: "-100%" }}
        transition={{ duration: 12, ease: "linear", repeat: Infinity }}
        className="w-full h-16  flex  items-center"
      >
        {awards.map((elem, index) => {
          return (
            <motion.div
              key={index}
              className="h-16 shrink-0   flex  items-center "
            >
              <img className="h-18 p-6 px-12  border  " src={elem.img} alt="" />
            </motion.div>
          );
        })}
        {awards.map((elem, index) => {
          return (
            <motion.div
              key={index}
              className="h-16 shrink-0   flex  items-center "
            >
              <img className="h-18 p-6 px-12  border  " src={elem.img} alt="" />
            </motion.div>
          );
        })}
      </motion.div>
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "0%" }}
        transition={{ duration: 12, ease: "linear", repeat: Infinity }}
        className="w-full mt-2 h-16 flex items-center"
      >
        {create.map((elem, index) => {
          return (
            <motion.div
              key={index}
              className="h-16 shrink-0  flex  items-center "
            >
              <h1 className="h-18 p-6 px-12  border ">{elem.name}</h1>
            </motion.div>
          );
        })}
        {create.map((elem, index) => {
          return (
            <motion.div
              key={index}
              className="h-16 shrink-0  flex  items-center "
            >
              <h1 className="h-18 p-6 px-12  border ">{elem.name}</h1>
            </motion.div>
          );
        })}
        {create.map((elem, index) => {
          return (
            <motion.div
              key={index}
              className="h-16 shrink-0  flex  items-center "
            >
              <h1 className="h-18 p-6 px-12  border ">{elem.name}</h1>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Awards;
