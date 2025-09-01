"use client"
import { Swiper,SwiperSlide } from "swiper/react";
import "swiper/css"
import "swiper/css/pagination"
import { Pagination,Autoplay } from "swiper/modules";
import Image from "next/image"


export default function Home () {
      return (
             <main>
              

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
        <div className="absolute bottom-15 right-10 lg:right-15 rounded-2xl">
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
      

        <h1 className="text-3xl text-center text-yellow-300 p-8 font-bold lg:text-5xl lg:text-black">Our Projects</h1>
        <div className=" lg:flex">
        <div className="h-100 w-85 mt-3 shadow rounded-2xl ml-3 relative lg:w-110 lg:mt-0">
        <Image
        width={80}
        height={80}
        src={"/Shouse1.jpg"}
        alt="1"
        className="w-110 h-60 rounded-t-2xl"/>
        <h1 className="font-bold text-2xl p-5">Bold Living 1</h1>
        <h1 className="text-sm ml-5">Alpha Beach Road Lekki</h1>
        <strong className="ml-5">Available Unit: 2bedroom</strong>
        <p className="text-sm text-white border p-2 bg-red-800 rounded -lg w-20 font-bold absolute top-5 right-6">Sold Out</p>
      </div>
     <div className="h-100 w-85 mt-3 shadow rounded-2xl ml-3 relative lg:w-110 lg:mt-0">
        <Image
        width={80}
        height={80}
        src={"/shouse2.png"}
        alt="1"
        className="w-110 h-60 rounded-t-2xl"/>
        <h1 className="font-bold text-2xl p-5">Bold Living 2</h1>
        <h1 className="text-sm ml-5">Alpha Beach Road Lekki</h1>
        <strong className="ml-5">Available Unit: 4bedroom</strong>
        <p className="text-sm text-white border p-2 bg-red-800 rounded -lg w-20 font-bold absolute top-5 right-6">Sold Out</p>
      </div>
      <div className="h-100 w-85 mt-3 shadow rounded-2xl ml-3 relative lg:w-110 lg:mt-0">
        <Image
        width={80}
        height={80}
        src={"/Shouse3.png"}
        alt="1"
        className="w-110 h-60 rounded-t-2xl"/>
        <h1 className="font-bold text-2xl p-5">Bold Living 5</h1>
        <h1 className="text-sm ml-5">Alpha Beach Road Lekki</h1>
        <strong className="ml-5">Available Unit: 6bedroom</strong>
        <p className="text-sm text-white border p-2 bg-green-800 rounded -lg w-25 font-bold absolute top-5 right-6">Still Selling</p>
      </div>
      </div>
       <h1 className="text-sm text-center font-bold border-3 mx-27 mt-2 p-3 rounded-lg lg:mx-140">See More</h1>
      <div className="mt-3 ml-10 lg:flex lg:gap-8 lg:ml-5">
       <div className="relative shadow h-90 w-70 rounded-2xl">
        <Image
        width={320}
        height={30}
        src={"/Sale1.jpeg"}
        alt="1"
        className="rounded-t-2xl"/>
        <h1 className="font-bold">Available Unit: 8</h1>
        <h1  className="font-bold">5 Bedroom Duplex 🏡, Plus: wide range parking lot 🚗 & gymnastic center🏋️‍♀️   </h1>
        <h1 className="text-sm mt-9 text-center shadow rounded-lg mx-15 p-1 bg-yellow-300 font-bold">Click Here To Chat With Agent</h1>
      <h1 className="absolute top-3 right-4 rounded-lg p-1 bg-yellow-300 font-bold shadow">60 Million Naira</h1>
      </div> 
      <div className="relative mt-4 shadow h-90 w-70 rounded-2xl lg:mt-0">
        <Image
        width={320}
        height={30}
        src={"/Sale2.jpg"}
        alt="1"
        className="rounded-t-2xl"/>
        <h1 className="font-bold">Available Unit: 1</h1>
        <h1  className="font-bold">4 Bedroom Bungalow 🏡, Plus: mini range parking lot 🚗&swimming pool   </h1>
        <h1 className="text-sm mt-6 text-center shadow rounded-lg mx-15 p-1 bg-yellow-300 font-bold">Click Here To Chat With Agent</h1>
      <h1 className="absolute top-3 right-4 rounded-lg p-1 bg-yellow-300 font-bold shadow">30 Million Naira</h1>
      </div> 
      <div className="relative shadow mt-4 h-90 w-70 rounded-2xl lg:mt-0">
        <Image
        width={320}
        height={30}
        src={"/Sale3.jpg"}
        alt="1"
        className="rounded-t-2xl"/>
        <h1 className="font-bold">Available Unit: 1</h1>
        <h1  className="font-bold">5 Bedroom Duplex 🏡, Plus: Normal range parking lot 🚗</h1>
        <h1 className="text-sm mt-10 text-center shadow rounded-lg mx-15 p-1 bg-yellow-300 font-bold">Click Here To Chat With Agent</h1>
      <h1 className="absolute top-3 right-4 rounded-lg p-1 bg-yellow-300 font-bold shadow">40 Million Naira</h1>
      </div> 
      <div className="relative shadow mt-4 h-90 w-70 rounded-2xl lg:mt-0">
        <Image
        width={320}
        height={30}
        src={"/Sale4.jpg"}
        alt="1"
        className="rounded-t-2xl"/>
        <h1 className="font-bold">Available Unit: 4</h1>
        <h1  className="font-bold">4 Bedroom Bungalow 🏡, Plus: wide range parking lot 🚗</h1>
        <h1 className="text-sm mt-7 text-center shadow rounded-lg mx-15 p-1 bg-yellow-300 font-bold">Click Here To Chat With Agent</h1>
      <h1 className="absolute top-3 right-4 rounded-lg p-1 bg-yellow-300 font-bold shadow">25 Million Naira</h1>
      </div> 
      </div>
      <div className="flex overflow-x-auto  p-4   mt-2 rounded w-full bg-gray-200 h-30 w-full">
       <div className="flex gap-5">
          <Image height={300} width={300} src={"/slide1.webp"} alt="1" className="rounded  shadow  hover:shadow-black hover:border-3" />
          <Image height={300} width={300} src={"/slide1.webp"} alt="1" className="rounded shadow hover:shadow-black hover:border-3"/>
          <Image height={300} width={300} src={"/slide1.webp"} alt="1" className="rounded shadow hover:shadow-black hover:border-3"/>
          <Image height={300} width={300} src={"/slide1.webp"} alt="1" className="rounded shadow hover:shadow-black hover:border-3"/>
          <Image height={300} width={300} src={"/slide1.webp"} alt="1" className="rounded shadow hover:shadow-black hover:border-3"/>
          <Image height={300} width={300} src={"/slide1.webp"} alt="1" className="rounded shadow hover:shadow-black hover:border-3"/>
          <Image height={300} width={300} src={"/slide1.webp"} alt="1" className="rounded shadow hover:shadow-black hover:border-3"/>
          <Image height={300} width={300} src={"/slide1.webp"} alt="1" className="rounded shadow hover:shadow-black hover:border-3"/>
          <Image height={300} width={300} src={"/slide1.webp"} alt="1" className="rounded shadow hover:shadow-black hover:border-3"/>
          <Image height={300} width={300} src={"/slide1.webp"} alt="1" className="rounded shadow hover:shadow-black hover:border-3"/>
          <Image height={300} width={300} src={"/slide1.webp"} alt="1" className="rounded shadow hover:shadow-black hover:border-3"/>
          <Image height={300} width={300} src={"/slide1.webp"} alt="1" className="rounded shadow hover:shadow-black hover:border-3"/>
          <Image height={300} width={300} src={"/slide1.webp"} alt="1" className="rounded shadow hover:shadow-black hover:border-3"/>
          <Image height={300} width={300} src={"/slide1.webp"} alt="1" className="rounded shadow hover:shadow-black hover:border-3"/>
          <Image height={300} width={300} src={"/slide1.webp"} alt="1" className="rounded shadow hover:shadow-black hover:border-3"/>
          <Image height={300} width={300} src={"/slide1.webp"} alt="1" className="rounded shadow hover:shadow-black hover:border-3 "/>
          <Image height={300} width={300} src={"/slide1.webp"} alt="1" className="rounded shadow hover:shadow-black hover:border-3"/>
          <Image height={300} width={300} src={"/slide1.webp"} alt="1" className="rounded shadow hover:shadow-black hover:border-3"/>
          <Image height={300} width={300} src={"/slide1.webp"} alt="1" className="rounded shadow hover:shadow-black hover:border-3"/>
          <Image height={300} width={300} src={"/slide1.webp"} alt="1" className="rounded shadow hover:shadow-black hover:border-3"/>
          <Image height={300} width={300} src={"/slide1.webp"} alt="1" className="rounded shadow hover:shadow-black hover:border-3"/>
          <Image height={300} width={300} src={"/slide1.webp"} alt="1" className="rounded shadow hover:shadow-black hover:border-3"/>
          <Image height={300} width={300} src={"/slide1.webp"} alt="1" className="rounded shadow hover:shadow-black hover:border-3"/>
          <Image height={300} width={300} src={"/slide1.webp"} alt="1" className="rounded shadow hover:shadow-black hover:border-3"/>
          <Image height={300} width={300} src={"/slide1.webp"} alt="1" className="rounded  shadow hover:shadow-black hover:border-3"/>
          <Image height={300} width={300} src={"/slide1.webp"} alt="1" className="rounded shadow hover:shadow-black hover:border-3"/>
          
          

       </div>
      </div>
</main>
  
);
}
   
