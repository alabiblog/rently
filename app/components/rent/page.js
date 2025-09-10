"use client"

import Image from "next/image";
import { HiFire } from "react-icons/hi";
import { FaPhone } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import Link from "next/link";
import { Swiper,SwiperSlide } from "swiper/react";
import "swiper/css"
import "swiper/css/pagination"
import {Pagination, Autoplay} from "swiper/modules";


export default function Rent(){
    return(
        <main className="min-h-screen max-w-screen bg-gray-200">
             <p className="p-5 lg:block text-sm text-gray-500 md:p-10 lg:p-10"><Link href={"/"}>Home</Link> → <span className="text-sm text-gray-200 text-gray-500"><Link href={"/components/rent"}>Flat Apartment for Rent</Link></span></p>
             <p className="text-2xl text-gray-500 p-4 font-bold">Flat & Apartment For <span className="text-yellow-300">RENT</span> in Nigeria.</p>
             <p className="hidden lg:block mx-5 py-5">The average price of houses for rent is <span className="font-bold">₦3,482,829</span> The most expensive house costs <span className="font-bold">₦50,000,000.</span> while the cheapest costs <span className="font-bold">₦50,000.</span> We have a total of <span className="font-bold">11,178</span> Flat Apartment for rent in Nigeria updated on 03 Sep 2025. Among these properties are houses, lands, shops, apartments, flats and commercial spaces . Every Real Estate in Nigeria posted on this site is verified by real estate agents . We also have cheap houses for rent and cheap houses for sale . Refine your property search by price, number of beds and type of property.</p>
            <div className=" md:flex lg:flex gap-5">
                <div className="w-90  h-full  md:w-220 lg:w-220">
                    <div className="p-2 border my-3 ml-15 md:ml-5">
                        <h1 className="lg:text-sm text-gray-500"><Link href={"/components/onebedroom"}>1 Bedroom |  </Link><Link href={"/components/twobedroom"}><span> 2 Bedroom |</span></Link><Link href={"/components/threebedroom"}><span> 3 Bedroom |</span></Link><Link href={"/components/fourbedroom"}><span> 4 Bedroom |</span></Link><Link href={"/components/fivebedroom"}><span> 5 Bedroom |</span></Link><Link href={"/components/sixbedroom"}><span> 6 Bedroom |</span></Link></h1>
                        <h1 className="text-sm text-gray-500 mt-3"><Link href={"/components/studioapart"}> Studio Apartment | </Link><Link href={"/components/miniapart"}><span> Mini Flat |</span></Link><Link href={"/components/penthouse"}><span> Penthouse |</span></Link><Link href={"/components/selfcon"}><span> Selfcontain |</span></Link><Link href={"/components/duplex"}><span> Duplex |</span></Link></h1>
                        <h1 className="text-sm text-gray-500 mt-3"><Link href={"/components/abuja"}> Abuja |</Link><Link href={"/components/nasarawa"}><span> Nasarawa |</span></Link><Link href={"/components/lagos"}><span> Lagos |</span></Link><Link href={"/components/benin"}><span> Benin |</span></Link><Link href={"/components/portharcourt"}><span> Portharcourt |</span></Link></h1>
                    </div>
                    <div className="p-  mt-10 ml-15 md:ml-5">
                      <Image
                    width={300}
                    height={20}
                    src={"/vivo.jpeg"}
                    alt="vivo"
                    className="w-220 h-50 shadow-lg rounded-xl"/>
                    </div>
                    <div className="flex ml-2 gap-10 w-100 mt-10 shadow-lg h-full md:w-220 lg:w-220">
                       <div className="shadow-xl w-100 bg-gray-200">
                        <Image
                        width={200}
                        height={200}
                        src={"/rent1.jpg"}
                        alt="2"
                        className="w-200 ml- my-3 h-60"/>
                       </div>
                       <div className="w-20 md:w-50 lg:w-50">
                        <h1 className="text-lg text-black font-bold">4 Bedroom Flat</h1>
                        <p className="text-xs text-gray-700">Banana island ikoyi Lagos</p>
                        <p className="text-sm text-gray-700 font-semibold">Swimming pool & mini car pack</p>
                        <p className="text-sm text-yellow-300 bg-red-700 border mt-10 text-center">Promo Deal</p>
                       </div>
                       <div className="mt-5 mr-5 xl:ml-7 xl:mt-1 md:ml-5 md:mt-0">
                        <h1 className="mr-5">₦ 40,000,000/Year</h1>
                        <p className="text-xs">PID : 3NHRP</p>
                        <p className="border text-center mt-10 w-23 p-1 rounded text-red-700 flex items-center gap-2 ">sponsor <HiFire className="text-red-700"/></p>
                       <div className="mt-10 flex gap-4 md:gap-5  lg:gap-5">
                        <p className="flex items-center border gap-2 w-15 p-1 rounded-lg text-sm text-white bg-blue-700"><FaPhone />Call</p>
                        <p><IoLogoWhatsapp className="h-9 w-9 border rounded-lg bg-green-800 text-white p-1"/></p>
                       </div>
                       </div>
                       </div>
                        <div className="flex gap-10 w-100 ml-2 mt-10 shadow-lg h-full md:w-220 lg:w-220">
                       <div className="shadow-xl w-100 bg-gray-200">
                        <Image
                        width={200}
                        height={200}
                        src={"/rent2.jpg"}
                        alt="2"
                        className="w-200 ml- my-3 h-60"/>
                       </div>
                       <div className=" w-20 md:w-50 lg:w-50">
                        <h1 className="text-lg text-black font-bold">4 Bedroom Flat</h1>
                        <p className="text-xs text-gray-700">Banana island ikoyi Lagos</p>
                        <p className="text-sm text-gray-700 font-semibold">Swimming pool & mini car pack</p>
                        <p className="text-sm text-yellow-300 bg-red-700 border mt-10 text-center">Promo Deal</p>
                       </div>
                       <div className="mt-5 mr-5">
                        <h1 className="">₦ 40,000,000/Year</h1>
                        <p className="text-xs">PID : 3NHRP</p>
                        <p className="border text-center mt-10 w-23 p-1 rounded text-red-700 flex items-center gap-2 ">sponsor <HiFire className="text-red-700"/></p>
                       <div className="mt-10 flex gap-1 md:gap-5  lg:gap-5">
                        <p className="flex items-center border gap-2 w-15 p-1 rounded-lg text-sm text-white bg-blue-700"><FaPhone />Call</p>
                        <p><IoLogoWhatsapp className="h-9 w-9 border rounded-lg bg-green-800 text-white p-1"/></p>
                       </div>
                       </div>

                    </div>
                     <div className="flex gap-10 w-100 ml2 mt-10 shadow-lg h-full md:w-220 lg:w-220">
                       <div className="shadow-xl w-100 bg-gray-200">
                        <Image
                        width={200}
                        height={200}
                        src={"/rent3.jpg"}
                        alt="2"
                        className="w-80 ml-10 my-3 h-60"/>
                       </div>
                       <div className=" w-20 md:w-50 lg:w-50">
                        <h1 className="text-lg text-black font-bold">4 Bedroom Flat</h1>
                        <p className="text-xs text-gray-700">Banana island ikoyi Lagos</p>
                        <p className="text-sm text-gray-700 font-semibold">Swimming pool & mini car pack</p>
                        <p className="text-sm text-yellow-300 bg-red-700 border mt-10 text-center">Promo Deal</p>
                       </div>
                       <div className="mt-5 mr-5">
                        <h1 className="">₦ 40,000,000/Year</h1>
                        <p className="text-xs">PID : 3NHRP</p>
                        <p className="border text-center mt-10 w-23 p-1 rounded text-red-700 flex items-center gap-2 ">sponsor <HiFire className="text-red-700"/></p>
                       <div className="mt-10 flex gap-1 md:gap-5  lg:gap-5">
                        <p className="flex items-center border gap-2 w-15 p-1 rounded-lg text-sm text-white bg-blue-700"><FaPhone />Call</p>
                        <p><IoLogoWhatsapp className="h-9 w-9 border rounded-lg bg-green-800 text-white p-1"/></p>
                       </div>
                       </div>

                    </div>
                     <div className="flex gap-10 w-95 mt-10 shadow-lg h-full md:w-220 lg:w-220">
                       <div className="shadow-xl w-100 bg-gray-200">
                        <Image
                        width={100}
                        height={100}
                        src={"/rent4.jpg"}
                        alt="2"
                        className="w-80 ml-10 my-3 h-60"/>
                       </div>
                       <div className=" w-50 p-4">
                        <h1 className="text-lg text-black font-bold">4 Bedroom Flat</h1>
                        <p className="text-xs text-gray-700">Banana island ikoyi Lagos</p>
                        <p className="text-sm text-gray-700 font-semibold">Swimming pool & mini car pack</p>
                        <p className="text-sm text-yellow-300 bg-red-700 border mt-10 text-center">Promo Deal</p>
                       </div>
                       <div className="mt-5 ml-10">
                        <h1 className="">₦ 40,000,000/Year</h1>
                        <p className="text-xs">PID : 3NHRP</p>
                        <p className="border text-center mt-10 w-23 p-1 rounded text-red-700 flex items-center gap-2 ">sponsor <HiFire className="text-red-700"/></p>
                       <div className="mt-10 flex gap-1 md:gap-5  lg:gap-5">
                        <p className="flex items-center border gap-2 w-15 p-1 rounded-lg text-sm text-white bg-blue-700"><FaPhone />Call</p>
                        <p><IoLogoWhatsapp className="h-9 w-9 border rounded-lg bg-green-800 text-white p-1"/></p>
                       </div>
                       </div>

                    </div>
                     <div className="flex gap-10 w-95 mt-10 shadow-lg h-full md:w-220 lg:w-220">
                       <div className="shadow-xl w-100 bg-gray-200">
                        <Image
                        width={100}
                        height={100}
                        src={"/rent5.jpg"}
                        alt="2"
                        className="w-80 ml-10 my-3 h-60"/>
                       </div>
                       <div className=" w-50 p-4">
                        <h1 className="text-lg text-black font-bold">4 Bedroom Flat</h1>
                        <p className="text-xs text-gray-700">Banana island ikoyi Lagos</p>
                        <p className="text-sm text-gray-700 font-semibold">Swimming pool & mini car pack</p>
                        <p className="text-sm text-yellow-300 bg-red-700 border mt-10 text-center">Promo Deal</p>
                       </div>
                       <div className="mt-5 ml-10">
                        <h1 className="">₦ 40,000,000/Year</h1>
                        <p className="text-xs">PID : 3NHRP</p>
                        <p className="border text-center mt-10 w-23 p-1 rounded text-red-700 flex items-center gap-2 ">sponsor <HiFire className="text-red-700"/></p>
                       <div className="mt-10 flex gap-1 md:gap-5  lg:gap-5">
                        <p className="flex items-center border gap-2 w-15 p-1 rounded-lg text-sm text-white bg-blue-700"><FaPhone />Call</p>
                        <p><IoLogoWhatsapp className="h-9 w-9 border rounded-lg bg-green-800 text-white p-1"/></p>
                       </div>
                       </div>

                    </div>
                     <div className="flex gap-10 w-95 mt-10 shadow-lg h-full md:w-220 lg:w-220">
                       <div className="shadow-xl w-100 bg-gray-200">
                        <Image
                        width={100}
                        height={100}
                        src={"/rent6.jpg"}
                        alt="2"
                        className="w-80 ml-10 my-3 h-60"/>
                       </div>
                       <div className=" w-50 p-4">
                        <h1 className="text-lg text-black font-bold">4 Bedroom Flat</h1>
                        <p className="text-xs text-gray-700">Banana island ikoyi Lagos</p>
                        <p className="text-sm text-gray-700 font-semibold">Swimming pool & mini car pack</p>
                        <p className="text-sm text-yellow-300 bg-red-700 border mt-10 text-center">Promo Deal</p>
                       </div>
                       <div className="mt-5 ml-10">
                        <h1 className="">₦ 40,000,000/Year</h1>
                        <p className="text-xs">PID : 3NHRP</p>
                        <p className="border text-center mt-10 w-23 p-1 rounded text-red-700 flex items-center gap-2 ">sponsor <HiFire className="text-red-700"/></p>
                       <div className="mt-10 flex gap-1 md:gap-5  lg:gap-5">
                        <p className="flex items-center border gap-2 w-15 p-1 rounded-lg text-sm text-white bg-blue-700"><FaPhone />Call</p>
                        <p><IoLogoWhatsapp className="h-9 w-9 border rounded-lg bg-green-800 text-white p-1"/></p>
                       </div>
                       </div>

                    </div>
                    
                </div>
                <div className="relative mt-10 ml-3  w-95  h-350  md:ml-0 lg:ml-0 md:w-90 lg:w-90">
                    <div className="mt-1 border rounded-xl my-5  w-90">
                        <h1 className="text-lg  p-3 ml-2 font-bold">Available Properties</h1>
                        <hr className="mx-5"/>
                        <h1 className="text-sm  p-3 ml-2">Current Available Properties Flat Apartment For Rent</h1>
                        <hr className="mx-5"/>
                    <div className="flex justify-between p-2">
                        <h1 className="ml-2 font-bold">Property Type</h1>
                        <h1 className="font-bold">PropertyCount</h1>
                    </div>
                        <hr className="mx-5"/>
                    <div className="flex justify-between p-2">
                        <Link href={"/components/studioapart"}><h1 className="ml-2  text-sm">Studio Apartment</h1></Link>
                        <h1 className="text-sm">10</h1>
                    </div>
                        <hr className="mx-5"/>
                    <div className="flex justify-between p-2">
                        <Link href={"/components/miniapart"}><h1 className="ml-2 text-sm">Mini Flat</h1></Link>
                        <h1 className="text-sm">6</h1>
                    </div>
                        <hr className="mx-5"/>
                    <div className="flex justify-between p-2">
                        <Link href={"/components/penthouse"}><h1 className="ml-2 text-sm">Panthouse</h1></Link>
                        <h1 className="text-sm">5</h1>
                    </div>
                        <hr className="mx-5"/>
                    <div className="flex justify-between p-2">
                        <Link href={"/components/selfcon"}><h1 className="ml-2 text-sm">Selfcontain</h1></Link>
                        <h1 className="text-sm">3</h1>
                    </div>
                        <hr className="mx-5"/>
                    <div className="flex justify-between p-2">
                        <Link href={"/components/duplex"}><h1 className="ml-2 text-sm">Duplex</h1></Link>
                        <h1 className="text-sm">4</h1>
                    </div>

                    
                
                

                    </div>

                   <div className="rounded-xl border mx-5 lg:mx-0 md:mx-0 h-50 mt-20">
                    <Image
                    width={70}
                    height={80}
                    src={"/mini111.png"}
                    alt="mini"
                    className="h-25 w-25 absolute top-90 left-5"/>
                    <h1 className="mt-15 p-4 font-bold">NeighbourHoods</h1>
                    <hr className="mt-2 mx-5"/>
                    <Link href={"/components/neighbourh"}><p className="p-4 text-sm">Discover which neighbourhood in Nigeria is the best place to live</p></Link>
                   </div>
                   <div className="rounded-xl  mx-5 lg:mx-0 md:mx-0 h-60 mt-20">
                     <Image
                    width={200}
                    height={200}
                    src={"/banner1.jpg"}
                    alt="mini"
                    className="h-60 w-100"/>
                   </div>
                
                    <Swiper
                 modules={[Autoplay,Pagination]}
                   autoplay={{
                   display: 3000,
                   disableOnInteraction: false
                   }}
                   pagination={{clickable: true}}
                   loop={true}
                    speed={1}
                   className="rounded-xl border mx-5 lg:mx-0 md:mx-0 h-95 mt-20">
                   <SwiperSlide className="border">
                    <h1 className="font-bold p-5">Recent Sold</h1>
                   <hr className="mx-5"/>
                    <Image
                     width={150}
                     height={150}
                    src={"/sll1.jpg"}
                    alt="mini"
                    className="w-90 p-10 h-60 ml-2 md:ml-0 lg:ml-0"
                    />
                    <h1 className="font-bold ml-5">4 Bedroom Semi Duplex Dq Lagos Chevron</h1>
                    </SwiperSlide>
                   <SwiperSlide className="border">
                   <h1 className="font-bold p-5">Recent Sold</h1>
                   <hr className="mx-5"/>
                    <Image
                     width={150}
                     height={150}
                    src={"/sll2.jpeg"}
                    alt="mini"
                    className="w-90 p-10 h-60 ml-2 md:ml-0 lg:ml-0"
                    />
                    <h1 className="font-bold ml-5">5 Bedroom Detached Duplex Lagos Banana Island</h1>
                   </SwiperSlide>
                   <SwiperSlide className="border">
                   <h1 className="font-bold p-5">Recent Sold</h1>
                   <hr className="mx-5"/>
                    <Image
                     width={150}
                     height={150}
                    src={"/sll3.jpg"}
                    alt="mini"
                    className="w-90 p-10 h-60 ml-2 md:ml-0 lg:ml-0"
                    />
                    <h1 className="font-bold ml-5">Land For Sale 400 x 700 Abuja Maitama</h1>
                   </SwiperSlide>
                   </Swiper>
                   </div>
                </div>
                
                
                <div className="w-90 lg:w-310 lg:ml-5 rounded-xl border mx-5 lg:mx-0 md:mx-0 h-100 mt-20">
                    <div className="border w-80 lg:w-310 my-2 mx-5">
                        <h1 className="font-bold p-3 text-gray-500">Average House Price for last month</h1>
                        <p className="font-semibold ml-3 text-2xl">NGN <span className="font-semibold "> 0.0</span></p>
                        <h1 className="font-bold p-3 text-gray-500 mt-5">Price Change in last 6 months</h1>
                        <p className="font-semibold ml-3 text-2xl text-green-600">NGN <span className="font-semibold "> 0.0</span></p>
                    </div>
                        <h1 className="text-lg p-3 font-semibold">Historical Price</h1>
                        <div>
                            <div className="flex justify-between p-2">
                            <p className="text-sm">6 Month Ago</p>
                            <p className="font-bold">NGN 0.0</p>
                            <p className="border text-white bg-green-700 opacity-40 w-10 text-center rounded">0.00</p>
                             </div>
                            <div className="flex justify-between p-2">

                             <p className="text-sm">1 Year Ago</p>
                            <p className="font-bold">NGN 0.0</p>
                            <p className="border text-white bg-green-700 opacity-40 w-10 text-center rounded">0.00</p>
                             </div>
                            <div className="flex justify-between p-2">
                             
                             <p className="text-sm">2 Years Ago</p>
                            <p className="font-bold">NGN 0.0</p>
                            <p className="border text-white bg-green-700 opacity-40 w-10 text-center rounded">0.00</p>
                             </div>
                            
                        </div>

                </div>
        </main>
    )
}