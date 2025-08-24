"use client"

import Image from "next/image"
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import {Autoplay, Pagination} from "swiper/modules"
import { Navbar } from "./Navbar"
import { useState } from "react"







export function Carousel(){
  const[visible,setVisible]= useState(false)
  return(
    <main className="relative">
      <Swiper
      modules={[Autoplay,Pagination]}
      autoplay={{
        display: 3000,
        disableOnInteraction: false
      }}
      pagination={{clickable: true}}
      loop={true}
      speed={1}
      
      className="mySwiper w-full h-[400px] lg:h-[600px] cursor-grab">
        <div className="absolute top-2 left-2 w-full z-50">
        <Navbar/>
        </div>
        
      
       <SwiperSlide className="w-full h-full relative">
        <Image
        src={"/imagehouse11.jpg"}
        alt="2"
        fill/>
        <div className="absolute  bottom-10 left-5 lg:left-15">
          <h1 className="text-2xl text-white font-bold lg:text-4xl">A House To Suit<br/>Your LifeStyle</h1>
        </div>
        <div className="absolute left-5 bottom-30 lg:bottom-8 lg:left-120">
          <h1 className="text-white text-sm font-bold">Lifestyle is a place that compliment<br/>your daily routine and hobbies it<br/>provides, the spaces functionality....</h1>
        </div>
       <div className="absolute bottom-15 right-10 lg:right-15">
        <button className="border p-1 bg-red-700  font-bold text-white lg:p-2">Learn More</button>
       </div>
       </SwiperSlide>
       <SwiperSlide className="w-full h-full">
        <Image
        src={"/imageman22.jpeg"}
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
        src={"/imageman11.jpg"}
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
        src={"/image33.jpg"}
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
      
    </main>
  )
}