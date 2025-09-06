"use client"

import { Swiper,SwiperSlide } from "swiper/react";
import "swiper/css"
import "swiper/css/pagination"
import {Pagination, Autoplay} from "swiper/modules";
import Image from "next/image";
import Flip from "./components/flip/page";
import Link from "next/link";



export default function Home(){
  return(
    <main className="min-h-screen max-w-screen">
            <Swiper
       modules={[Autoplay,Pagination]}
       autoplay={{
         display: 2000,
         disableOnInteraction: false
       }}
       pagination={{clickable: true}}
       loop={true}
       speed={1}
      
       className="mySwiper w-full h-[400px] lg:h-[600px] cursor-grab">
        <SwiperSlide className="w-full h-full relative">
         <Image
         src={"/whitehouse1.avif"}
         alt="2"
         fill/>
         <div className="absolute  bottom-10 left-5 lg:left-15">
           <h1 className="text-2xl text-white font-bold lg:text-4xl">A House To Suit<br/>Your LifeStyle</h1>
         </div>
         <div className="absolute left-5 bottom-30 lg:bottom-8 lg:left-120">
           <h1 className="text-white text-sm font-bold">Lifestyle is a place that compliment<br/>your daily routine and hobbies it<br/>provides, the spaces functionality....</h1>
         </div>
        <div className="absolute bottom-15 right-10 lg:right-15 rounded-2xl">
         <button className="border p-1 bg-red-700  font-bold text-white lg:p-2">Learn More</button>
        </div>
        </SwiperSlide>
        <SwiperSlide className="w-full h-full">
         <Image
         src={"/whitehouse5.avif"}
         alt="2"
         fill/>
         <div className="absolute bottom-10 left-5 lg:left-15">
           <h1 className="text-2xl text-white font-bold lg:text-4xl">Own Your Own Home<br/>With Ease</h1>
         </div>
         <div className="absolute bottom-30 left-5 lg:bottom-8 lg:left-120">
           <h1 className="text-white font-bold">Make your dream home a reality-<br/>Simple, Stress-Free and Yours!</h1>
         </div>
        <div className="absolute bottom-15 right-10 lg:right-15">
         <button className="border p-2 bg-red-700 font-bold text-white">Learn More</button>
        </div>
        </SwiperSlide>
        <SwiperSlide className="w-full h-full">
         <Image
         src={"/whitehouse2.avif"}
         alt="2"
         fill/>
         <div className="absolute bottom-10 left-5 lg:left-15">
           <h1 className="text-2xl text-white font-bold lg:text-4xl">Bold Living<br/>Series</h1>
         </div>
         <div className="absolute bottom-30 left-5 lg:bottom-8 lg:left-120">
           <h1 className="text-white font-bold">Transform your life with the Bold<br/>Living Series</h1>
         </div>
        <div className="absolute bottom-15 right-10 lg:right-15">
        <button className="border p-2 bg-red-700 font-bold text-white">Learn More</button>
        </div>
        </SwiperSlide>
        <SwiperSlide className="w-full h-full">
         <Image
         src={"/whitehouse4.avif"}
         alt="2"
         fill/>
         <div className="absolute bottom-10 left-5 lg:left-15">
           <h1 className="text-2xl text-white font-bold lg:text-4xl">Simplify Real<br/>Estate Investment</h1>
         </div>
         <div className="absolute bottom-30 left-5 lg:bottom-8 lg:left-120">
           <h1 className="text-white font-bold">Build your dream,secure your<br/>future!"</h1>
         </div>
        <div className="absolute bottom-15 right-10 lg:right-15">
         <button className="border p-2 bg-red-700 font-bold text-white">Learn More</button>
        </div>
            
        </SwiperSlide>
       </Swiper>

       <div className="flex-col-1 md:flex lg:flex">
        <div className="w-full bg-gray-400 shadow-xl md:w-120 lg:w-120 h-90 my-4">
        <div>
          <Image
          width={50}
          height={50}
          src={"/logo2.jpg"}
          alt="2"
          className="w-15 h-15"/>
          <h1 className="text-white font-bold">ALABI<span className="text-yellow-300 font-bold">HOUSING</span><span className="text-xs text-white">LMT</span></h1>
          <h1 className="text-white p-20 italic">Alabi housing is the perfect company that brings your dream to reality if you can imagine it we can build it !!!</h1>
        
        </div>
        </div>
        <div className="flex overflow-x-auto lg:block md:block bord md:w-280 md:h-90 md:my-4 md:flex md:overflow-x-auto lg:w-280 lg:h-90 lg:my-4 lg:flex lg:overflow-x-auto">
          <div className="flex gap-3">
          <div className="shadow-lg shadow-black w-100 h-80 my-5">
            <Image
            width={170}
            height={150}
            src={"/hand1.jpeg"}
            alt="2"
            className="h-80 w-100"/>
          </div>
          <div className="shadow-lg shadow-black w-100 h-80 my-5">
            <Image
            width={170}
            height={150}
            src={"/hand2.jpeg"}
            alt="2"
            className="h-80 w-100"/>
          </div>
          <div className="shadow-lg shadow-black w-100 h-80 my-5">
            <Image
            width={170}
            height={150}
            src={"/hand3.jpeg"}
            alt="2"
            className="h-80 w-100"/>
          </div>
          <div className="shadow-lg shadow-black w-100 h-80 my-5">
            <Image
            width={170}
            height={150}
            src={"/hand4.jpeg"}
            alt="2"
            className="h-80 w-100"/>
          </div>
          <div className="shadow-lg shadow-black w-100 h-80 my-5">
            <Image
            width={170}
            height={150}
            src={"/hand6.jpeg"}
            alt="2"
            className="h-80 w-100"/>
          </div>
          <div className="shadow-lg shadow-black w-100 h-80 my-5">
            <Image
            width={170}
            height={150}
            src={"/shouse1.jpg"}
            alt="2"
            className="h-80 w-100"/>
          </div>
          </div>
        </div>


       </div>
       
       <div className="hidden lg:block md:block bg-[url(/Whitehouse2.avif)]  bg-cntain bg-no-repeat shadow-lg rounded-xl mx-3 my-5">
       
        <h1 className="text-5xl text-white font-semibold text-center py-5 border mx-100 bg-gray-400">ALABI<span className="text-5xl text-yellow-300 font-semibold">HOUSING</span></h1>
    
        <div className="flex justify-center gap-5 py-5">
        <Flip/>
        <Flip/>
        </div>
       </div>
                <div className="bg-[url(/Whitehouse2.avif)]  bg-cntain bg-no-repeat   md:block lg:block  md:flex md:justify-center md:gap-5 lg:flex lg:justify-center lg:gap-5">
                    <button className="text-sm mt-5 w-80 mx-7 text-white bg-gray-400 lg:text-xl shadow-lg rounded-xl p-2 lg:w-full  hover:opacity-40">Need a house to Rent<br/>Click Here To👇<br/><Link href={"/components/rent"}><span className="text-sm lg:text-2xl text-yellow-300">Speak To  Agent</span></Link></button>
                    <button className="text-sm mt-5 w-80 mx-7 text-white bg-gray-400 lg:text-xl shadow-lg rounded-xl p-2 lg:w-full hover:opacity-40">Need a house to Buy<br/>Click Here To👇<br/><Link href={"/components/buy"}><span className="text-sm lg:text-2xl text-yellow-300">Speak To  Agent</span></Link></button>
                </div>

    </main>
  )
}
      