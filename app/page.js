"use client"



import { Carousel2 } from "@/components/carousel2";
import { Navbar } from "@/components/Navbar";
import Image from "next/image"


export default function Home () {
      return (
             <main>
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
      <Carousel2/>

      <div className="flex space-x-4 overflow-x-auto scrollbar-hide p-4">
  <div className="min-w-[150px] h-24 bg-blue-500 text-white flex items-center justify-center rounded-lg">Salesforce</div>
  <div className="min-w-[150px] h-24 bg-blue-500 text-white flex items-center justify-center rounded-lg">Salesforce</div>
  <div className="min-w-[150px] h-24 bg-blue-500 text-white flex items-center justify-center rounded-lg">Salesforce</div>
  <div className="min-w-[150px] h-24 bg-blue-500 text-white flex items-center justify-center rounded-lg">Salesforce</div>
  <div className="min-w-[150px] h-24 bg-blue-500 text-white flex items-center justify-center rounded-lg">Salesforce</div>
  <div className="min-w-[150px] h-24 bg-green-500 text-white flex items-center justify-center rounded-lg">Google Calendar</div>
  <div className="min-w-[150px] h-24 bg-purple-500 text-white flex items-center justify-center rounded-lg">Zoom</div>
  <div className="min-w-[150px] h-24 bg-orange-500 text-white flex items-center justify-center rounded-lg">Slack</div>
  <div className="min-w-[150px] h-24 bg-red-500 text-white flex items-center justify-center rounded-lg">PayPal</div>
  <div className="min-w-[150px] h-24 bg-red-500 text-white flex items-center justify-center rounded-lg">PayPal</div>
  <div className="min-w-[150px] h-24 bg-red-500 text-white flex items-center justify-center rounded-lg">PayPal</div>
  <div className="min-w-[150px] h-24 bg-red-500 text-white flex items-center justify-center rounded-lg">PayPal</div>
  <div className="min-w-[150px] h-24 bg-red-500 text-white flex items-center justify-center rounded-lg">PayPal</div>
  <div className="min-w-[150px] h-24 bg-red-500 text-white flex items-center justify-center rounded-lg">PayPal</div>
  <div className="min-w-[150px] h-24 bg-red-500 text-white flex items-center justify-center rounded-lg">PayPal</div>
  <div className="min-w-[150px] h-24 bg-red-500 text-white flex items-center justify-center rounded-lg">PayPal</div>
  <div className="min-w-[150px] h-24 bg-red-500 text-white flex items-center justify-center rounded-lg">PayPal</div>
  <div className="min-w-[150px] h-24 bg-red-500 text-white flex items-center justify-center rounded-lg">PayPal</div>
  <div className="min-w-[150px] h-24 bg-red-500 text-white flex items-center justify-center rounded-lg">PayPal</div>
  <div className="min-w-[150px] h-24 bg-red-500 text-white flex items-center justify-center rounded-lg">PayPal</div>
  <div className="min-w-[150px] h-24 bg-red-500 text-white flex items-center justify-center rounded-lg">PayPal</div>
  <div className="min-w-[150px] h-24 bg-red-500 text-white flex items-center justify-center rounded-lg">PayPal</div>
  <div className="min-w-[150px] h-24 bg-red-500 text-white flex items-center justify-center rounded-lg">PayPal</div>
  <div className="min-w-[150px] h-24 bg-red-500 text-white flex items-center justify-center rounded-lg">PayPal</div>
  <div className="min-w-[150px] h-24 bg-red-500 text-white flex items-center justify-center rounded-lg">PayPal</div>
  <div className="min-w-[150px] h-24 bg-red-500 text-white flex items-center justify-center rounded-lg">PayPal</div>
</div>

</main>
  
);
}
   
