"use client"

import { Button } from "@mui/material"
import Image from "next/image"
import { useState } from "react"
import { IoBedOutline } from "react-icons/io5";
import { GiBathtub } from "react-icons/gi";
import { LiaToiletSolid } from "react-icons/lia";


export default function Adamawaneighb(){
  const[activeTab,setActiveTab]= useState("rent")
  const [visible,setVisible]= useState(false)
  const [visiblee,setVisiblee]= useState(false)
  const [visibleee,setVisibleee]= useState(false)
  const [view,setView]= useState(false)

    return(
        <main className="min-h-screen md:flex md:gap-5  bg-gray-200">
            <div>
            <div className="ml-10 mt-10 w-70 h-100 border  md:ml-15  lg:ml-15">
              <h1 className="text-lg p-5 font-semibold">Quick Link</h1>
              <p className="text-sm ml-5 font-semibold text-gray-400">Overview</p>
              <hr className="mx-5 mt-3"/>
              <p className="text-sm ml-5 font-semibold text-gray-400 mt-2">Axis</p>
              <hr className="mx-5 mt-3"/>
              <p className="text-sm ml-5 font-semibold text-gray-400 mt-2">Active Listings</p>
              <hr className="mx-5 mt-3"/>
              <p className="text-sm ml-5 font-semibold text-gray-400 mt-2">Real Estate Agents</p>
              <hr className="mx-5 mt-3"/>
              <p className="text-sm ml-5 font-semibold text-gray-400 mt-2">Summary</p>
              <hr className="mx-5 mt-3"/>
              <p className="text-sm ml-5 font-semibold text-gray-400 mt-2">Sponsored Properties</p>
              <hr className="mx-5 mt-3"/>
              <p className="text-sm ml-5 font-semibold text-gray-400 mt-2">Photos</p>
              <hr className="mx-5 mt-3"/>
              <p className="text-sm ml-5 font-semibold text-gray-400 mt-2">Side Attraction</p>
              </div>
              <div className="mt-5 ml-10 ">
                <div>
              <button className="p-2 text-white shadow  px-5 bg-gray-300 rounded-lg">Adamawa listing for Rent</button>
              </div>
              <div>
              <button className="p-2 text-white shadow mt-2 px-5 bg-yellow-300 rounded-lg">Adamawa listing for Sele</button>
              </div>
              
              </div>
              </div>
              <div className="w-95 mt-5 md:w-220 lg:w-220 ">
              <h1 className="text-2xl font-semibold mt-5 ml-5">ADAMAWA</h1>
              <p className="p-5">Adamawa is a state in northeastern Nigeria, with Yola as its capital. Known for its agricultural richness, the state produces crops like maize and sorghum and is home to livestock farming. It features diverse landscapes, including the Mandara Mountains and Gashaka-Gumti National Park, making it a potential tourism destination.

Adamawa is culturally diverse, with ethnic groups like the Fulani and Bachama. Despite its natural resources and cultural wealth, the state faces challenges such as security concerns and infrastructure gaps.</p>
              <hr className="mt-5 mx-5"/>
              <h1 className="text-2xl font-semibold mt-5 ml-5">Summery</h1>
              <p className="mt-5 ml-5">Adamawa is a northeastern Nigerian state known for its rich cultural heritage, diverse ethnic groups, and agricultural economy, with Yola as its capital. Life in Adamawa is a blend of rural and urban influences, where farming, fishing, and trading dominate daily activities. The people are hospitable, and the state hosts various cultural festivals that reflect its deep-rooted traditions. Expect a warm climate, vibrant local markets, and a mix of modern and traditional lifestyles.

The markets, such as Jimeta Modern Market, are hubs for trade and commerce, offering fresh produce and handcrafted goods. What you’ll fall in love with is the breathtaking landscape, including the Mandara Mountains and the serene Benue River. Adamawa shares borders with states like Borno, Gombe, and Taraba, as well as Cameroon, enriching its cultural diversity.</p>
              
               
              <div className="flex gap-10 mt-10 ml-5">
                 <button onClick={() => setActiveTab("rent")} className={`px-4 py-2 rounded-lg font-medium transition ${ activeTab === "rent"? "bg-blue-600 text-white": "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}>For Rent</button>
        <button
          onClick={() => setActiveTab("sale")}
          className={`px-4 py-2 rounded-lg font-medium transition ${
            activeTab === "sale"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          For Sale
        </button>
              </div>

              <div className=" ml-13 mt-5 md:ml-0 lg:ml-0 md:flex lg:flex">
                {/* first box */}
               {activeTab === "rent" && <div className="  md:grid md:grid-cols-3 lg:grid lg:grid-cols-3">
            
                <div className="shadow p-2 h-110 w-70">
                  <Image
                  width={70}
                  height={60}
                  src={"/Hand1.jpeg"}
                  alt="1"
                  className="w-65  h-35"/>
                  <p className="text-2xl p-2">7 Bedroom Detached Duplex</p>
                  <p className="text-xs p-2">Diplomatic Zone Katampe Ext Abuja</p>
                   <div className="grid grid-cols-2 mt-5">
                    <p className="flex items-center gap-3"><IoBedOutline className="text-3xl"/> 7 Beds</p>
                    <p className="flex items-center gap-3"><GiBathtub className="text-3xl"/> 7 Baths</p>
                    <p className="flex items-center gap-3 mt-3"><LiaToiletSolid className="text-3xl"/> 8 Toilets</p>
                   </div>
                   <p className="text-1xl p-2 mt-5 font-bold ">₦ 40,000,000/Yearly</p>
                    
                </div>
                <div className="shadow p-2 h-110 w-70">
                  
                  <Image
                  width={70}
                  height={60}
                  src={"/Hand1.jpeg"}
                  alt="1"
                  className="w-65  h-35"/>
                  <p className="text-2xl p-2">Newly Built 6 Bedroom With Boys Quarters</p>
                  <p className="text-xs p-2">Wuye Abuja</p>
                   <div className="grid grid-cols-2 mt-5">
                    <p className="flex items-center gap-3"><IoBedOutline className="text-3xl"/> 6 Beds</p>
                    <p className="flex items-center gap-3"><GiBathtub className="text-3xl"/> 6 Baths</p>
                    <p className="flex items-center gap-3 mt-3"><LiaToiletSolid className="text-3xl"/> 7 Toilets</p>
                   </div>
                   <p className="text-1xl p-2 mt-5 font-bold ">₦ 30,000,000/Yearly</p>
                  
                </div>
                <div className="shadow p-2 h-110 w-70">
                  <Image
                  width={70}
                  height={60}
                  src={"/Hand1.jpeg"}
                  alt="1"
                  className="w-65  h-35"/>
                  <p className="text-2xl p-2">Newly Built 4 Bedroom Duplex</p>
                  <p className="text-xs p-2">Life Camp Abuja</p>
                   <div className="grid grid-cols-2 mt-5">
                    <p className="flex items-center gap-3"><IoBedOutline className="text-3xl"/> 4 Beds</p>
                    <p className="flex items-center gap-3"><GiBathtub className="text-3xl"/> 4 Baths</p>
                    <p className="flex items-center gap-3 mt-3"><LiaToiletSolid className="text-3xl"/> 5 Toilets</p>
                   </div>
                   <p className="text-1xl p-2 mt-5 font-bold ">₦ 20,000,000/Yearly</p>
                     

                </div>
                </div>}
                {/* second */}
               {activeTab === "sale" &&  <div className=" md:grid md:grid-cols-3 lg:grid lg:grid-cols-3">
                  <div className="shadow p-2 h-110 w-70">
                  
                  <Image
                  width={70}
                  height={60}
                  src={"/Hand2.jpeg"}
                  alt="1"
                  className="w-65  h-35"/>
                  <p className="text-2xl p-2">7 bedroom Duplex With Bq ( Tarred Road )</p>
                  <p className="text-xs p-2">Jahi Gilmore, Jahi, Abuja Jahi Abuja</p>
                   <div className="grid grid-cols-2 mt-5">
                    <p className="flex items-center gap-3"><IoBedOutline className="text-3xl"/> 9 Beds</p>
                    <p className="flex items-center gap-3"><GiBathtub className="text-3xl"/> 9 Baths</p>
                    <p className="flex items-center gap-3 mt-3"><LiaToiletSolid className="text-3xl"/> 3 Toilets</p>
                   </div>
                   <p className="text-1xl p-2 mt-5 font-bold ">₦ 3,000,000,000</p>
                      
                </div>
                <div className="shadow p-2 h-110 w-70">
                  
                  <Image
                  width={70}
                  height={60}
                  src={"/Hand2.jpeg"}
                  alt="1"
                  className="w-65  h-35"/>
                  <p className="text-2xl p-2">5 Bedroom Detached Duplex</p>
                  <p className="text-xs p-2">Newly Built 5 Bedroom Terrace Duplex</p>
                   <div className="grid grid-cols-2 mt-5">
                    <p className="flex items-center gap-3"><IoBedOutline className="text-3xl"/> 6 Beds</p>
                    <p className="flex items-center gap-3"><GiBathtub className="text-3xl"/> 6 Baths</p>
                    <p className="flex items-center gap-3 mt-3"><LiaToiletSolid className="text-3xl"/> 5 Toilets</p>
                   </div>
                   <p className="text-1xl p-2 mt-5 font-bold ">₦ 900,000,000</p>
                     
                </div>
                <div className="shadow p-2 h-110 w-70">
                  
                  <Image
                  width={70}
                  height={60}
                  src={"/Hand2.jpeg"}
                  alt="1"
                  className="w-65  h-35"/>
                  <p className="text-2xl p-2">Lovely 7 Bedroom Apartment</p>
                  <p className="text-xs p-2">Diplomatic Zone Katampe Ext Abuja</p>
                   <div className="grid grid-cols-2 mt-5">
                    <p className="flex items-center gap-3"><IoBedOutline className="text-3xl"/> 7 Beds</p>
                    <p className="flex items-center gap-3"><GiBathtub className="text-3xl"/> 7 Baths</p>
                    <p className="flex items-center gap-3 mt-3"><LiaToiletSolid className="text-3xl"/> 9 Toilets</p>
                   </div>
                   <p className="text-1xl p-2 mt-5 font-bold ">₦ 1,000,000,000</p>
                     
                </div>

                </div>}
              
              </div>
              <div>
              <h1 className="text-2xl font-semibold mt-5 ml-5">Side Attraction</h1>
                <button onClick={()=>setVisible(!visible)} className="mt-3 ml-5 text-1xl font-bold text-yellow-300">{visible? "What You'll Fall Inlove With -" : "What You'll Fall Inlove With +"}</button><br/>
               {visible && <p className="p-5">In Adamawa, you'll fall in love with the breathtaking landscapes, including the Mandara Mountains and Gashaka-Gumti National Park, which offer scenic views and opportunities for outdoor exploration. The rich agricultural environment, with vast farmlands producing crops like maize and sorghum, adds to the state's charm. You'll also be captivated by the cultural diversity, with the vibrant traditions and festivals of ethnic groups like the Fulani and Bachama. The peaceful atmosphere, coupled with the warmth and hospitality of the people, makes Adamawa a place worth discovering.</p>}
                <button onClick={()=>setVisiblee(!visiblee)} className="mt-3 ml-5 text-1xl font-bold text-yellow-300">{visiblee? "The Market -" : "The Market +"}</button><br/>
               {visiblee && <p className="p-5">The market in Adamawa is primarily driven by agriculture, with a strong emphasis on the cultivation of crops like maize, sorghum, millet, and groundnuts, alongside livestock farming. The state's agricultural products are key to both local consumption and trade within and outside the region. Adamawa also has a growing retail market, especially in cities like Yola, where goods such as textiles, foodstuffs, and household items are sold in vibrant markets. The state is also rich in natural resources, including minerals like limestone and granite, though the mining sector remains underdeveloped. Despite challenges like infrastructure gaps, Adamawa's market is largely centered around its agricultural output and small-scale commerce.</p>}
                <button onClick={()=>setVisibleee(!visibleee)} className="mt-3 ml-5 text-1xl font-bold text-yellow-300">{visibleee? "What To Expect -" : "What To Expect +"}</button><br/>
               {visibleee && <p className="p-5">In Adamawa, you can expect a blend of natural beauty, with stunning landscapes like the Mandara Mountains and Gashaka-Gumti National Park, offering opportunities for outdoor activities and wildlife exploration. The state is rich in agriculture, producing crops like maize and sorghum, and cattle farming is common. You'll also experience a culturally diverse environment, with ethnic groups such as the Fulani and Bachama, and the chance to engage in local festivals and traditions. While Adamawa offers natural and cultural attractions, challenges like security concerns and underdeveloped infrastructure may also be present.</p>}
                <button onClick={()=>setView(!view)} className="mt-3 ml-5 text-1xl font-bold text-yellow-300">{view? "The Neighbour -" : "The Neighbour +"}</button><br/>
               {view && <p className="p-5">Adamawa shares borders with several states, including Borno to the northwest, Gombe to the west, Taraba to the south, and the northeastern border with Cameroon.</p>}
              </div>
              
              </div>
             
        </main>
    )
}