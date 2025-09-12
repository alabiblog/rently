"use client"

import { FormControl, Input, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";


export  function Navbar(){
    const [visible,setVisible]= useState(false)
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
    <button onClick={()=>setVisible(!visible)}>{visible? "" : <RxHamburgerMenu className="text-3xl mr-2 mt-2 lg:hidden md:hidden"/>}</button>
          

  
    <div className="hidden lg:flex lg:mr-5 lg:gap-2  lg:mt-5  lg:block">
        
        <Input
        type="search"
        placeholder="Investment Option"
        className="border p-1 bg-yellow-300  rounded-xl mb-15 font-bold"/>
        <Link href={"/dashboard/profile"}><CgProfile className="text-4xl text-yellow-300"/></Link>
      </div>
      </div>
       <div 
      className={`fixed top-0 right-0 z-50 bg-black w-full h-full duration-1000 ease-in-out ${visible? "translate-x-0" : "translate-x-full"}`}>
       <button onClick={()=>setVisible(false)} className="text-yellow-300 text-4xl absolute right-3 top-5">X</button>
       <div className="text-center py-20">
         <Link href="/" onClick={()=>setVisible(false)}><p className="text-2xl text-gray-100 ">Home</p></Link>
        <Link href={"/dashboard/tenant"}onClick={()=>setVisible(false)}><p className="text-2xl text-gray-100">Tenant-Form</p></Link>
        <Link href="/dashboard/rentlist"onClick={()=>setVisible(false)}><p className="text-2xl text-gray-100">Rent-List</p></Link>
        <p className="text-2xl text-gray-100">Contact-Us</p>
       <Link href={"/auth/login"}onClick={()=>setVisible(false)}><p className="text-2xl text-gray-100">Login</p></Link>
       <div className="flex justify-center mt-2">
       <Link href={"/dashboard/profile"}onClick={()=>setVisible(false)}> <p className="text-2xl text-gray-100"><CgProfile className="text-2xl text-yellow-3"/></p></Link>
        </div>
       </div>
      
      
      </div>
    
       
    </main>
    )



    }
    
    