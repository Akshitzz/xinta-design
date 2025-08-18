"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";



type HeroSectionProps = {
    title?: string;
    description?: string;
    image?: string;
}


const HeroSection = ({}:HeroSectionProps) => {
   const [visible,setVisible]=useState(true);
   useEffect(()=>{
    const interval = setInterval(()=>{
      setVisible((prev)=>!prev);
    },500);
    return ()=>clearInterval(interval);
   },[]);

return <>
 <div className="flex flex-col items-center relative gap-12 py-20">
              <div className="h-screen w-[1px] bg-gray-300 fixed left-0 top-0 z-10"/>
              <div className="h-screen w-[1px] bg-gray-300 fixed right-0 top-0 z-10"/>
            
            <div className=" border bg-gray-200/50 border-radius rounded-2xl hover:bg-gray-300 text-semibold tracking-tight border-gray-200 px-2 py-1 ">
                    <p className="font-semibold tracking-wide text-sm px-2"> The complete checklist for incorporating &rarr;</p>
            </div>
            <div className="flex flex-col items-center gap-6 justify-center">
              <div className="flex flex-col items-center">
                  <h2 className="text-6xl font-semibold items-center tracking-tight">Magically simplify </h2>
                <h2 className="text-6xl font-semibold items-center tracking-tight"> accounting and taxes</h2>
              </div>
                <div className="flex flex-col items-center">
                    <p className="font-light tracking-tighter text-xl text-gray-700">Automated bookkeeping, effortless tax filing, real‑time insights. </p>
                <p className="font-light tracking-tighter text-xl text-gray-700">Set up in 10 mins. Back to building by 11
                  <span 
                  style={{
                    opacity:visible?1:0,
                    transition :"opacity 0.3s ease-in-out"
                  }}
                  >
                      : 
                  </span>
                  14am.</p>
                </div>
            <div className="flex gap-2 relative z-20">
                 <button className="bg-blue-500 shadow-lg text-white text-shadow-2xs p-2 font-bold text-sm px-4 rounded-lg hover:bg-blue-600 hover:shadow-xl transition-all duration-200 ease-in-out cursor-pointer transform hover:scale-105 relative z-10">Get Started</button>
                 <button className="bg-transparent text-black text-shadow-2xs p-2 font-bold text-sm px-4 rounded-lg hover:bg-gray-300 hover:shadow-md transition-all duration-200 ease-in-out cursor-pointer transform hover:scale-105 border border-gray-200 hover:border-gray-300 relative z-10">Get Started &rarr;</button>
            </div>
            <p className="text-sm text-slate-400">Currently for US-based Delaware C-Corps</p>
           <div className="relative flex flex-col flex-end">
             <Image
            className="rounded-xl  border border-radius border-slate-300/10 shadow-[0px_0px_0px_1px_rgba(30,_31,_37,_0.04),_0px_1.658px_4.145px_0px_rgba(30,_31,_37,_0.08),_0px_26.526px_33.158px_-13.263px_rgba(30,_31,_37,_0.10),_0px_6.632px_54.711px_0px_rgba(30,_31,_37,_0.06),_0px_10.776px_8.289px_-9.947px_rgba(30,_31,_37,_0.15) ]"
            src="/hero-ui-v5.png" alt="hero image" width={1200} height={800} />
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-white rounded-xl pointer-events-none"/>
           </div>
            </div>
        </div>
</>


}


export default HeroSection;