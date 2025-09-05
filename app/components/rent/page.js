import Image from "next/image";
import { HiFire } from "react-icons/hi";
import { FaPhone } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import Link from "next/link";


export default function Rent(){
    return(
        <main className="min-h-screen max-w-screen">
             <p className="p-5 lg:block text-sm text-gray-500 md:p-10 lg:p-10"><Link href={"/"}>Home</Link> → <span className="text-sm text-gray-200 text-gray-500"><Link href={"/components/rent"}>Flat Apartment for Rent</Link></span></p>
             <p className="text-2xl text-gray-500 p-4 font-bold">Flat & Apartment For <span className="text-yellow-300">RENT</span> in Nigeria.</p>
             <p className="hidden lg:block mx-5 py-5">The average price of houses for rent is <span className="font-bold">₦3,482,829</span> The most expensive house costs <span className="font-bold">₦50,000,000.</span> while the cheapest costs <span className="font-bold">₦50,000.</span> We have a total of <span className="font-bold">11,178</span> Flat Apartment for rent in Nigeria updated on 03 Sep 2025. Among these properties are houses, lands, shops, apartments, flats and commercial spaces . Every Real Estate in Nigeria posted on this site is verified by real estate agents . We also have cheap houses for rent and cheap houses for sale . Refine your property search by price, number of beds and type of property.</p>
            <div className=" md:flex lg:flex gap-5">
                <div className="w-90  h-full  md:w-220 lg:w-220">
                    <div className="p-5 border my-3 ml-5">
                        <h1 className="lg:text-sm text-gray-500"><Link href={"/components/onebedroom"}>1 Bedroom |  </Link><Link href={"/components/twobedroom"}><span> 2 Bedroom |</span></Link><Link href={"/components/threebedroom"}><span> 3 Bedroom |</span></Link><Link href={"/components/fourbedroom"}><span> 4 Bedroom |</span></Link><Link href={"/components/fivebedroom"}><span> 5 Bedroom |</span></Link><Link href={"/components/sixbedroom"}><span> 6 Bedroom |</span></Link></h1>
                        <h1 className="text-sm text-gray-500 mt-3"><Link href={"/components/studioapart"}> Studio Apartment | </Link><Link href={"/components/miniapart"}><span> Mini Flat |</span></Link><Link href={"/components/penthouse"}><span> Penthouse |</span></Link><Link href={"/components/selfcon"}><span> Selfcontain |</span></Link><Link href={"/components/duplex"}><span> Duplex |</span></Link></h1>
                        <h1 className="text-sm text-gray-500 mt-3"><Link href={"/components/abuja"}> Abuja |</Link><Link href={"/components/nasarawa"}><span> Nasarawa |</span></Link><Link href={"/components/lagos"}><span> Lagos |</span></Link><Link href={"/components/benin"}><span> Benin |</span></Link><Link href={"/components/portharcourt"}><span> Portharcourt |</span></Link></h1>
                    </div>
                    <div className="p-  mt-10 ml-5">
                      <Image
                    width={300}
                    height={20}
                    src={"/vivo.jpeg"}
                    alt="vivo"
                    className="w-220 h-50 shadow-lg rounded-xl"/>
                    </div>
                    <div className="flex gap-10 w-95 mt-10 shadow-lg h-full md:w-220 lg:w-220">
                       <div className="shadow-xl w-100 bg-gray-200">
                        <Image
                        width={100}
                        height={100}
                        src={"/image2.jpg"}
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
                        src={"/image2.jpg"}
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
                        src={"/image2.jpg"}
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
                        src={"/image2.jpg"}
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
                        src={"/image2.jpg"}
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
                        src={"/image2.jpg"}
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
                <div className="relative mt-10 ml-3  w-95  h-250  md:ml-0 lg:ml-0 md:w-90 lg:w-90">
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
                   <div className="rounded-xl border mx-5 lg:mx-0 md:mx-0 h-60 mt-20">

                   </div>
                    
                </div>
                

    

            </div>
        </main>
    )
}