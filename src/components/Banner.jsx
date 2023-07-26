import React, { useState } from "react";
import qwa from "../assets/QWA_Logo_Full_Color.svg"

export default function Banner(){
return (

    <div className="relative">
      <div className="sticky top-0 flex h-screen items-center justify-center">
        <img src="https://www.stockvault.net/data/2012/10/29/137060/preview16.jpg" className="h-full w-full object-cover" />
        <div className="absolute left-0 right-0 m-auto flex w-2/4 flex-col items-start justify-center gap-4 p-10 ">
          <div> <img className="z-20 w-[500px] " src={qwa} alt='qwa logo' /></div>
          <p className="font-sans text-lg text-white"></p>
        </div>
      </div>
      <div className="sticky top-0 flex h-screen items-center justify-center">
        <img src="https://www.stockvault.net/data/2014/10/06/163147/preview16.jpg" className="h-full w-full object-cover" />
        <div className="absolute left-0 right-0 m-auto flex w-2/4 flex-col items-start justify-center gap-4 p-10 backdrop-blur-xl">
          <h2 className="text-2xl font-bold text-white">Second Section</h2>
          <p className="font-sans text-lg text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        </div>
      </div>
      <div className="sticky top-0 flex h-screen items-center justify-center">
        <img src="https://www.stockvault.net/data/2016/03/14/187739/preview16.jpg" className="h-full w-full object-cover pt-0" />
        <div className="absolute left-0 right-0 m-auto flex w-2/4 flex-col items-start justify-center gap-4 p-10 backdrop-blur-xl">
          <h2 className="text-2xl font-bold text-white">Third Section</h2>
          <p className="font-sans text-lg text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        </div>
      </div>
      <div className="sticky top-0 flex h-screen items-center justify-center">
        <img src="https://www.stockvault.net/data/2016/03/14/187732/preview16.jpg" className="h-full w-full object-cover" />
        <div className="absolute left-0 right-0 m-auto flex w-2/4 flex-col items-start justify-center gap-4 p-10 backdrop-blur-xl">
          <h2 className="text-2xl font-bold text-white">Fourth Section</h2>
          <p className="font-sans text-lg text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        </div>
      </div>
    </div>
  );
}