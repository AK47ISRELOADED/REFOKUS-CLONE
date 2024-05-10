import React from "react";
import { IoIosReturnRight } from "react-icons/io";

const Button = ({ text }) => {
  return (
    <div className=" absolute right-0">
      <div className="  hover:bg-slate-400 transition ease-in-out  even:bg-sky-600    text-sm flex flex-col overflow-hidde  w-max   font-semibold gap-2 bg-zinc-100 text-black rounded-2xl  ">
        <button className="  flex  items-center gap-2 py-1  px-3">
          {text ? text : "start a project"}
          <IoIosReturnRight className="text-xl mt-1" />
        </button>
      </div>
    </div>
  );
};

export default Button;
