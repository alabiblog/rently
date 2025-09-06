import { HiFire } from "react-icons/hi";
import { FaPhone } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import Link from "next/link";
import Image from "next/image"


export default function Onebedroom(){
    return(
        <main className="bg-gray-200">
            <p className="p-5 lg:block text-sm text-gray-500 lg:p-10 md:p-10"><Link href={"/"}>Home</Link> → <span className="text-sm text-gray-200 text-gray-500"><Link href={"/components/rent"}>Flat Apartment for Rent</Link> → </span><span className="text-sm text-gray-200 text-gray-500"><Link href={"/components/onebedroom"}>onebedroom</Link></span></p>
            <p className="text-2xl text-gray-500 p-4 font-bold">Flat & Apartment For <span className="text-yellow-300">RENT</span> in Nigeria.</p>
             <p className=" lg:block mx-5 py-5">The average price of houses for rent is <span className="font-bold">₦482,829</span> The most expensive house costs <span className="font-bold">₦3,000,000.</span> while the cheapest costs <span className="font-bold">₦30,000.</span> We have a total of <span className="font-bold">11,178</span> Flat Apartment for rent in Nigeria updated on 03 Sep 2025. Among these properties are houses, lands, shops, apartments, flats and commercial spaces . Every Real Estate in Nigeria posted on this site is verified by real estate agents . We also have cheap houses for rent and cheap houses for sale . Refine your property search by price, number of beds and type of property.</p>
                   <div className="p-5 border my-3 ml-5">
                        <h1 className="lg:text-sm text-gray-500"><Link href={"/components/onebedroom"}>1 Bedroom |  </Link><Link href={"/components/twobedroom"}><span> 2 Bedroom |</span></Link><Link href={"/components/threebedroom"}><span> 3 Bedroom |</span></Link><Link href={"/components/fourbedroom"}><span> 4 Bedroom |</span></Link><Link href={"/components/fivebedroom"}><span> 5 Bedroom |</span></Link><Link href={"/components/sixbedroom"}><span> 6 Bedroom |</span></Link></h1>
                        <h1 className="text-sm text-gray-500 mt-3"><Link href={"/components/studioapart"}> Studio Apartment | </Link><Link href={"/components/miniapart"}><span> Mini Flat |</span></Link><Link href={"/components/penthouse"}><span> Penthouse |</span></Link><Link href={"/components/selfcon"}><span> Selfcontain |</span></Link><Link href={"/components/duplex"}><span> Duplex |</span></Link></h1>
                        <h1 className="text-sm text-gray-500 mt-3"><Link href={"/components/abuja"}> Abuja |</Link><Link href={"/components/nasarawa"}><span> Nasarawa |</span></Link><Link href={"/components/lagos"}><span> Lagos |</span></Link><Link href={"/components/benin"}><span> Benin |</span></Link><Link href={"/components/portharcourt"}><span> Portharcourt |</span></Link></h1>
                    </div>
                        <h1 className="mt-10 text-center text-4xl italic text-black text-semibold">ONE-BEDROOM PROPERTIES</h1>
            
                        <div className="flex gap-10 w-95 mt-10 shadow-lg h-full md:w-220 lg:w-220">
                                                         <div className="shadow-xl w-100 bg-gray-200">
                                                          <Image
                                                          width={100}
                                                          height={100}
                                                          src={"/onebed.png"}
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
                                                          src={"/twobed.jpg"}
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
                                                          src={"/threebed.jpg"}
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