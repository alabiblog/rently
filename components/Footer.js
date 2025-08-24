
import Image from "next/image"
import { MdFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { Input } from "@mui/material";
import { SlLocationPin } from "react-icons/sl";
import { MdAttachEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";






export function Footer(){
    let year = new Date().getFullYear();
    
    return(
        <main className="relative" >
            <div className="bg-stone-700 h-160 mt-3 lg:h-80 lg:flex lg:gap-7">
        <div>
             <div className="flex gap-2">
                   <Image
                  width={70}
                  height={70}
                  src={"/logo2.jpg"}
                  alt="2"
                  className="ml-3 mt-5 lg:ml-10 lg:mt-10"/>
                  <h1 className="text-1xl font-bold text-yellow-300 mt-5 lg:text-3xl lg:mt-10"><span className="text-white font-bold">ALABI</span>HOUSING<br/><span className="text-sm text-white font-bold">Limited</span></h1> 
             </div> 
                <div className="ml-3 mt-10 lg:ml-8 lg:mt-7">
                <h1 className="text-lg font-bold text-white lg:text-1xl">Connect With Us</h1>
                </div>
                <div className="flex gap-1 ml-3 mt-3 lg:ml-8">
                <MdFacebook
                className="h-6 w-6 border bg-white rounded-full text-red-400" /> 
                <FaInstagram
                className="h-6 w-6 border bg-white rounded-full text-red-400" />
                <FaXTwitter
                className="h-6 w-6 border bg-white rounded-full text-red-400" />
                <FaLinkedinIn
                className="h-6 w-6 border bg-white rounded-full text-red-400" />
                <FaTiktok
                className="h-6 w-6 border bg-white rounded-full text-red-400" />
                </div>
       
            </div> 
        <div>
            <h1 className="text-white font-bold p-3 mt-5 text-1xl lg:p-7 lg:mt-0">Subscribe To Our Exclusive Offer</h1>
            <Input
            type="email"
            placeholder="Email Address"
            className="w-80 border p-1 rounded ml-3 lg:ml-6"/><br/>
            <button className="border p-2 text-sm text-white ml-3 bg-yellow-500 mt-2 lg:ml-6 rounded">Sign Up</button>
        </div>
        <div className="p-3 lg:p-7">
            <h1 className="text-white font-bold text-1xl">Get In Touch</h1>
             <h1 className=" text-white text-sm mt-2"><SlLocationPin /><span  className="font-bold text-white text-sm">Abuja Office:</span>SF01 the altimate mall Ademola Adetokumbo  Crescent Wuse 2 Abuja</h1>
             <h1 className=" text-white text-sm mt-2"><SlLocationPin /><span  className="font-bold text-white text-sm">Lagos Office:</span>suit 35/36 11th floot oriantal hotel lekki-epe exress way victoria island lagos</h1>
             <h1 className=" text-white text-sm mt-4"> <FaPhoneVolume /> +2349130501762</h1>
             <h1 className=" text-white text-sm mt-4"> <MdAttachEmail /> info@alabihousing.com</h1>
        </div>
        </div>
        <div className="bg-stone-700 h-15"  >
        <hr className="text-white"/>
        
        <p className="text-sm mr-5 font-bold text-center text-white mt-3 lg:text-1xl lg:mr-0">© {year} Alabi<span className="text-yellow-300">Housing</span> Limited | All right reserved.</p>
        </div>
               
        </main>
    )
}