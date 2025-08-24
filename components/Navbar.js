"use client"

import { Input } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";






export function Navbar(){
    const[visible,setVisible]= useState(false)
    return(
        <main>
    <div className="relative flex justify-between">
    <div className="flex gap-1 p-2  mt-1 lg:mt-0 lg:p-5">
       <Image
      width={70}
      height={70}
      src={"/logo2.jpg"}
      alt="2"/>
      <h1 className="text-1xl font-bold text-yellow-300 lg:text-3xl"><span className="text-white font-bold">ALABI</span>HOUSING<br/><span className="text-sm text-white font-bold">Limited</span></h1> 
    </div>
    <div className="hidden lg:flex lg:gap-4 lg:mt-6 lg:block">
        <h1 className="text-white font-bold">About</h1>
        <h1 className="text-white font-bold">Projects</h1>
        <h1 className="text-white font-bold">Mortgage</h1>
        <h1 className="text-white font-bold">Contact Us</h1>
        <h1 className="text-white font-bold">Blog</h1>
        
    </div>
    
   <button onClick={()=>setVisible(!visible)} className="text-5xl mr-4 mb-7 text-yellow-300 md:hidden lg:hidden">{visible? "✕" : <RxHamburgerMenu />} </button>
  
    <div className="hidden lg:flex lg:mr-5 lg:gap-2  lg:mt-5  lg:block">
        
        <Input
        type="search"
        placeholder="Investment Option"
        className="border p-1 bg-yellow-300  rounded-xl mb-15 font-bold"/>
       <CgProfile className="text-4xl text-yellow-300"/>
      </div>
      </div>
    {visible &&<div className="bg-teal-50 flex h-10 mr-4 gap-6 p-2 lg:hidden">
         <small className="font-bold">About</small>
         <small className="font-bold">Projects</small>
         <small className="font-bold">Mortgage</small>
         <small className="font-bold">Contact Us</small>
         <small className="font-bold text-2xl text-yellow-300"><CgProfile /></small>
        </div>}
    </main>
    )
}