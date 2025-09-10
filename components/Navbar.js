"use client"

import { FormControl, Input, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";






export function Navbar(){
    const[visible,setVisible]= useState(false)
    return(
        <main className="bg-gray-200 shadow-2xl md:w-250 lg:w-250 xl:w-full ">
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
       <Link href="/"><h1 className="text-white font-bold">Home</h1></Link> 
        <Link href={"/dashboard/tenant"}><h1 className="text-white font-bold">Tenant-Form</h1></Link>
       <Link href="/dashboard/rentlist"><h1 className="text-white font-bold">Rent-List</h1></Link> 
        <h1 className="text-white font-bold">Contact Us</h1>
        <Link href={"/auth/login"}><h1 className="text-white font-bold">Login</h1></Link>
        
    </div>
    
   <button onClick={()=>setVisible(!visible)} className="text-5xl mr-4 mb-7 text-yellow-300 md:hidden lg:hidden">{visible? "✕" : <RxHamburgerMenu />} </button>
  
    <div className="hidden lg:flex lg:mr-5 lg:gap-2  lg:mt-5  lg:block">
        
        <Input
        type="search"
        placeholder="Investment Option"
        className="border p-1 bg-yellow-300  rounded-xl mb-15 font-bold"/>
        
       <Link href={"/dashboard/profile"}><CgProfile className="text-4xl text-yellow-300"/></Link>
       
      </div>
      </div>
    {visible &&<div className="bg-teal-50 flex h-10  gap-6 p-2 lg:hidden">
         <Link href="/"><small className="font-bold p-1">Home</small></Link>
         <Link href={"/dashboard/tenant"}><small className="font-bold">Tenant-Form</small></Link>
         <Link href={"/auth/login"}><small className="font-bold">Login</small></Link>
       <Link href="/dashboard/rentlist"><h1 className="text-white font-bold">Rent-List</h1></Link> 
         <small className="font-bold p-1">Contact Us</small>
         <Link href={"/dashboard/profile"}><small className="font-bold text-2xl text-yellow-300"><CgProfile /></small></Link>
         
        </div>}
       
    </main>
    )
}