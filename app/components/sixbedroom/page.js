import { HiFire } from "react-icons/hi";
import { FaPhone } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import Link from "next/link";
import Image from "next/image"


export default function Sixbedroom(){
    return(
        <main>
            <p className="p-5 lg:block text-sm text-gray-500 lg:p-10 md:p-10"><Link href={"/"}>Home →</Link> <span className="text-sm text-gray-200 text-gray-500"><Link href={"/components/rent"}>Flat Apartment for Rent</Link> → </span><span className="text-sm text-gray-200 text-gray-500"><Link href={"/components/sixbedroom"}>sixbedroom</Link></span></p>
            
                        <h1 className="mt-10 text-center text-4xl italic text-black text-semibold">SELF-CONTAIN PROPERTIES</h1>
            
                        <div className="flex gap-10 w-95 mt-10 shadow-lg h-full md:w-220 lg:w-220">
                                                         <div className="shadow-xl w-100 bg-gray-200">
                                                          <Image
                                                          width={100}
                                                          height={100}
                                                          src={"/bbb1.jpg"}
                                                          alt="2"
                                                          className="w-80 ml-10 my-3 h-60"/>
                                                         </div>
                                                         <div className="w-30 p-4 md:w-50 lg:w-50">
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
                                                          src={"/bbb2.jpg"}
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
                                                          src={"/bbb3.jpg"}
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
        </main>
    )
}