import React from "react";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Marque from "./components/Marque";
import Button from "./components/Button";
import Awards from "./components/Awards";
import { Boxs } from "./components/Boxs";
import Open from "./components/Open";

function App() {
  return (
    <div className="relative h-max w-full">
      <Open />

      <div className="h-3 w-3 bg-zinc-100 absolute rounded-full"> </div>

      <div className="h-screen w-full bg-[#151517] text-white ">
        <Navbar />
        <Work />
      </div>
      <div className="h-max   overflow-x-hidden  w-full pb-40 bg-[#151517] text-white">
        <Marque />
        <Projects />
        <div className=" w-36 relative h-12 absolute left-[43%] mt-10">
          <Button text="view more work" />
        </div>
        <Awards />
      </div>

      <div className="h-[70vh] w-full  bg-[#151517]   text-white">
        <Boxs />
      </div>
    </div>
  );
}

export default App;
