"use client"

import { Button } from "@mui/material"
import Image from "next/image"
import { useState } from "react"
import { IoBedOutline } from "react-icons/io5";
import { GiBathtub } from "react-icons/gi";
import { LiaToiletSolid } from "react-icons/lia";


export default function Oyoneighb(){
  const[activeTab,setActiveTab]= useState("rent")
  const [visible,setVisible]= useState(false)
  const [visiblee,setVisiblee]= useState(false)
  const [visibleee,setVisibleee]= useState(false)
  const [view,setView]= useState(false)

    return(
        <main className="min-h-screen md:flex md:gap-5 bg-gray-200">
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
              <button className="p-2 text-white shadow  px-5 bg-gray-300 rounded-lg">Abuja listing for Rent</button>
              </div>
              <div>
              <button className="p-2 text-white shadow mt-2 px-5 bg-yellow-300 rounded-lg">Abuja listing for Sele</button>
              </div>
              
              </div>
              </div>
              <div className="w-95 mt-5 md:w-220 lg:w-220  border">
              <h1 className="text-2xl font-semibold mt-5 ml-5">ABUJA</h1>
              <p className="p-5">Abuja is the capital city of Nigeria, located in the central part of the country. It became the capital in 1991, replacing Lagos, to promote a more centralized location for governance. The city is known for its modern infrastructure, wide streets, and prominent landmarks, such as the Nigerian National Mosque, Nigerian National Christian Centre, and Aso Rock, a massive rock formation that overlooks the city.
                Abuja is a planned city, designed with orderliness in mind, and is home to many foreign embassies, government buildings, and important institutions. The city is also known for its diverse population and cultural richness, drawing people from various parts of Nigeria and the world. Its growing economy is driven by sectors such as real estate, commerce, tourism, and hospitality. Abuja also has several upscale neighborhoods, making it a desirable location for both locals and expatriates.
                In addition to its administrative importance, Abuja has also become a hub for events, conferences, and exhibitions, thanks to its state-of-the-art facilities. The city enjoys a relatively stable environment compared to other Nigerian cities, contributing to its appeal for business and tourism.</p>
              <hr className="mt-5 mx-5"/>
              <h1 className="text-2xl font-semibold mt-5 ml-5">Axis</h1>
              <div className="ml-12 mt-15 md:ml-5 lg:ml-5 lg:grid lg:grid-cols-3">
                <div className="shadow-2xl p-2 h-60 w-70">
                  <Image
                  width={70}
                  height={60}
                  src={"/Hand1.jpeg"}
                  alt="1"
                  className="w-65  h-45"/>
                  <p className="mt-3 text-yellow-300 font-bold">PHASE 1</p>

                </div>
                <div className="shadow-2xl p-2 h-60 w-70">
                  <Image
                  width={70}
                  height={60}
                  src={"/Hand1.jpeg"}
                  alt="1"
                  className="w-65  h-45"/>
                  <p className="mt-3 text-yellow-300 font-bold">PHASE 1</p>

                </div>
                <div className="shadow-2xl p-2 h-60 w-70">
                  <Image
                  width={70}
                  height={60}
                  src={"/Hand1.jpeg"}
                  alt="1"
                  className="w-65  h-45"/>
                  <p className="mt-3 text-yellow-300 font-bold">PHASE 1</p>

                </div>
                <div className="shadow-2xl p-2 h-60 w-70">
                  <Image
                  width={70}
                  height={60}
                  src={"/Hand1.jpeg"}
                  alt="1"
                  className="w-65  h-45"/>
                  <p className="mt-3 text-yellow-300 font-bold">PHASE 1</p>

                </div>
                <div className="shadow-2xl p-2 h-60 w-70">
                  <Image
                  width={70}
                  height={60}
                  src={"/Hand1.jpeg"}
                  alt="1"
                  className="w-65  h-45"/>
                  <p className="mt-3 text-yellow-300 font-bold">PHASE 1</p>

                </div>
              </div>
              <h1 className="text-2xl font-semibold mt-5 ml-5">Active Listing in Abuja</h1>
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
               {visible && <p className="p-5">Abuja, you'll fall in love with the stunning scenic views, including the iconic Aso Rock and Jabi Lake, which offer a serene and picturesque environment. The city's vibrant culture, enriched by its diverse mix of ethnic groups, languages, and traditions, provides a unique experience of Nigerian and international cuisines, festivals, and art. The modern infrastructure, with well-planned roads and sleek buildings, creates an organized and clean atmosphere. Compared to other parts of Nigeria, Abuja’s peace and security offer a comfortable and stable living environment. The growing real estate opportunities in residential and commercial properties make it an attractive investment destination. The friendly atmosphere and cosmopolitan vibe make it easy to connect with both locals and expatriates. Abuja’s rich history and landmarks, such as the Nigerian National Mosque and the National Christian Centre, offer deep cultural significance. Additionally, the constant array of events, from conferences to cultural festivals, ensures there's always something exciting to enjoy.</p>}
                <button onClick={()=>setVisiblee(!visiblee)} className="mt-3 ml-5 text-1xl font-bold text-yellow-300">{visiblee? "The Market -" : "The Market +"}</button><br/>
               {visiblee && <p className="p-5">Abuja's market is diverse and dynamic, driven by the city's rapid growth and central role in Nigeria's economy. Key aspects of the market include: 1. Real Estate: The real estate market in Abuja is thriving, with a mix of residential, commercial, and luxury properties. Demand for housing is high, driven by the growing population, expatriates, and government workers. Areas like Wuse, Maitama, and Asokoro are popular for upscale properties. 2. Retail and Wholesale Markets: Abuja has various markets, from traditional open-air markets like Wuse Market and Garki Market, to modern malls such as the Jabi Lake Mall and Ceddi Plaza. These markets offer a range of goods, including local produce, clothing, electronics, and imported items. 3. Agriculture: As a central city, Abuja is a key consumer of agricultural products from neighboring states like Benue and Nasarawa. Fresh produce, grains, and livestock are common in the local markets. 4. Services: Abuja has a growing service sector, including financial institutions, legal services, and IT companies. Many businesses cater to the needs of government agencies, embassies, and international organizations. 5. Tourism: As a cultural and historical hub, Abuja attracts tourists, contributing to the hospitality, leisure, and entertainment industries. Hotels, resorts, and tour services are key components of the tourism market. 6. Technology and Innovation: The tech market in Abuja is expanding, with startups, fintech companies, and digital service providers emerging. The city's infrastructure supports tech development, and there are opportunities for innovation in areas like fintech, e-commerce, and digital services. Overall, the market in Abuja is vibrant, with significant opportunities in real estate, agriculture, retail, services, tourism, and technology.</p>}
                <button onClick={()=>setVisibleee(!visibleee)} className="mt-3 ml-5 text-1xl font-bold text-yellow-300">{visibleee? "What To Expect -" : "What To Expect +"}</button><br/>
               {visibleee && <p className="p-5">Abuja offers a modern, well-planned city with a blend of cultural diversity and natural beauty. As Nigeria's political and administrative capital, it houses government institutions and embassies. The city features modern infrastructure, green spaces like Aso Rock, and a growing real estate sector. It is known for its security, stability, and a variety of dining, shopping, and entertainment options. The climate is tropical, with a hot dry season and a rainy season. Overall, Abuja provides a dynamic and vibrant environment for residents and visitors alike.</p>}
                <button onClick={()=>setView(!view)} className="mt-3 ml-5 text-1xl font-bold text-yellow-300">{view? "The Neighbour -" : "The Neighbour +"}</button><br/>
               {view && <p className="p-5">Abuja is bordered by several states in Nigeria, each with its unique characteristics: 1. Nasarawa State (to the east and north): Known as the "Home of Solid Minerals," Nasarawa shares a border with Abuja and is rich in natural resources. It also has a growing agricultural sector. 2. Kogi State (to the west): Kogi is where the Niger and Benue rivers meet and is known for its diverse ethnic groups and rich cultural heritage. 3. Benue State (to the north): Benue, often called the "Food Basket of the Nation," is known for its fertile land and agriculture, especially for producing crops like yam, maize, and rice. 4. Niger State (to the northwest): Niger is the largest state in Nigeria by land area, and its economy is based on agriculture and mineral resources. 5. Kaduna State (to the northwest): A significant economic and cultural hub, Kaduna is known for its historical significance, large industries, and educational institutions. These neighboring states all contribute to Abuja's economic activities, especially in terms of trade, agriculture, and resource sharing.</p>}
              </div>
              
              </div>
             
        </main>
    )
}