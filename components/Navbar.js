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
         <small className="font-bold p-1">Contact Us</small>
         <Link href={"/dashboard/profile"}><small className="font-bold text-2xl text-yellow-300"><CgProfile /></small></Link>
         
        </div>}
        <div className="h-55   bg-white shadow-xl shadow-black bg-[url(/whitehouse1.avif)]  bg-cntain bg-no-repeat">
            <div className="relative p-2 flex items-center ml-">
           <IoSearch 
            className="text-2xl absolute left-3"/>
            <TextField
            fullWidth
            type="search"
            placeholder= "Search by state or Area"
            InputProps={{
                className: "px-5"
            }}
            />
            </div>
            {/* <input type="search" placeholder="Search by state or Area" className="shadow bg-gray-100 px-4 ml-3 mt-3 ">
        
            </input> */}
            <div className="flex justify-center gap-2 mx-2 mt-3">
                <FormControl fullWidth className="text-blue-700">
                    <InputLabel >Sort</InputLabel>
                    <Select>
                        <MenuItem  value="Most Recent">Most Recent</MenuItem>
                        <MenuItem value="Lowest Price">Lowest Price</MenuItem>
                        <MenuItem value="Highest Price">Highest Price</MenuItem>
                        <MenuItem value="Bed">Bed</MenuItem>
                    </Select>

                </FormControl>
                <FormControl fullWidth>
                    <InputLabel>Type</InputLabel>
                    <Select>
                        <MenuItem value="Office Space">Office Space</MenuItem>
                        <MenuItem value="Land">Land</MenuItem>
                        <MenuItem value="Shop">Shop</MenuItem>
                        <MenuItem value="Semi Detached Duplex">Semi Detached Duplex</MenuItem>
                    </Select>

                </FormControl>
            </div>
             <div className="flex justify-center gap-2 mx-2 mt-3">
                <FormControl fullWidth>
                    <InputLabel>Min. Price</InputLabel>
                    <Select>
                        <MenuItem value="50,000 ">50,000</MenuItem>
                        <MenuItem value="100,000">100,000</MenuItem>
                        <MenuItem value="200,000">200,000</MenuItem>
                        <MenuItem value="3000,000">300,000</MenuItem>
                    </Select>

                </FormControl>
                <FormControl fullWidth>
                    <InputLabel>Max. Price</InputLabel>
                    <Select>
                        <MenuItem value="9000,000">900,000</MenuItem>
                        <MenuItem value="1,000,000">1,000,000</MenuItem>
                        <MenuItem value="2,000,000">2,000,000</MenuItem>
                        <MenuItem value="3,000,000">3,000,000</MenuItem>
                    </Select>

                </FormControl>
            </div>

        </div>
    </main>
    )
}