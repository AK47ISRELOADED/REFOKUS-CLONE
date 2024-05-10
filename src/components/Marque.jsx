import React from "react";
import { motion } from "framer-motion";

const Marque = () => {
  var list = [
    {
      img: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275e12177716cb3f2ea_basf.svg",
    },
    {
      img: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d27505e3a120466b87aa_singularity.svg",
    },
    {
      img: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275c2fcf540272672ef_intenseeye.svg",
    },
    {
      img: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d27518bb52e4d642644e_bcgp.svg",
    },
    {
      img: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d2756e8df24e52915c71_flowcode.svg",
    },
    {
      img: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275e1d5aa08ccc379dd_ypo.svg",
    },
    {
      img: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275909535ff431975cf_lavender.svg",
    },
    {
      img: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d36963b956910ca67534_remind.svg",
    },
    {
      img: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2ce14e6c85b010c2e1e3c_Logo%20White%201.svg",
    },
  ];
  var list2 = [
    {
      img: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275a4f001b08a4e28bc_weglot.svg",
    },
    {
      img: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d2754882567001f1ee80_spotify.svg",
    },
    {
      img: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275999da7719dc1fe2c_haufe.svg",
    },
    {
      img: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d2759c8b021207af521b_yahoo.svg",
    },
    {
      img: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d27565c41bb608f7f7c0_rainfall.svg",
    },
    {
      img: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275ff2309d9d743ec75_doxel.svg",
    },
    {
      img: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d2755ba681134c9d9b5c_mural.svg",
    },
    {
      img: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275af18668cfbd759bc_webflow.svg",
    },
    {
      img: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d2753d48394d8adeff14_rocket.svg",
    },
    {
      img: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275f0442508aceaec02_accel.svg",
    },
  ];
  return (
    <div className="mb-40 w-full realtive ">
      <motion.div
        initial={{ x: "0" }}
        animate={{ x: "-100%" }}
        transition={{ duration: 8, ease: "linear", repeat: Infinity }}
        className="h-10  mb-10  flex  gap-32 "
      >
        {list.map((elem, index) => {
          return (
            <img key={index} className="h-12 w-28 " src={elem.img} alt="" />
          );
        })}
        {list.map((elem, index) => {
          return (
            <img key={index} className="h-12 w-28" src={elem.img} alt="" />
          );
        })}
      </motion.div>

      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "0%" }}
        transition={{ duration: 10, ease: "linear", repeat: Infinity }}
        className=" h-10 flex "
      >
        {list2.map((elem, index) => {
          return (
            <img
              key={index}
              className="h-12 w-28 mx-12"
              src={elem.img}
              alt=""
            />
          );
        })}
        {list2.map((elem, index) => {
          return (
            <img
              key={index}
              className="h-12 w-28 mx-12"
              src={elem.img}
              alt=""
            />
          );
        })}
      </motion.div>
    </div>
  );
};

export default Marque;
