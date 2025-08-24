"use client"

import Image from "next/image"
import { Swiper,SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { Autoplay,Pagination } from "swiper/modules"

export function Carousel2(){
    return(
        <main>
            <Swiper
            modules={[Autoplay,Pagination]}
            autoplay={{
                display:1000,
                disableOnInteraction:false
            }}
            pagination={{clickable:true}}
            loop={true}
            speed={1}
            className="w-full h-[190px] shadow">
        
                <SwiperSlide className="w-30 h-30 ">
                <div className=" flex gap-2">
                <Image
                width={300}
                height={20}
                src={"/Image22.jpg"}
                alt="22"
                className="p-3"
                />
                <Image
                width={300}
                height={30}
                src={"/Image2.jpg"}
                alt="22"
                className="p-3"
                />
                <Image
                width={300}
                height={30}
                src={"/Image4.jpg"}
                alt="22"
                className="p-3"
                />
                <Image
                width={300}
                height={30}
                src={"/Image5.jpg"}
                alt="22"
                className="p-3"
                />
                </div>
                </SwiperSlide>
              <SwiperSlide className="w-30 h-30 ">
                <div className="flex gap-2">
                <Image
                width={300}
                height={20}
                src={"/Image6.jpg"}
                alt="22"
                className="p-3"
                />
                <Image
                width={300}
                height={30}
                src={"/Image11.jpg"}
                alt="22"
                className="p-3"
                />
                <Image
                width={300}
                height={30}
                src={"/Image33.jpg"}
                alt="22"
                className="p-3"
                />
                <Image
                width={300}
                height={30}
                src={"/Image44.webp"}
                alt="22"
                className="p-3"
                />
                </div>
                </SwiperSlide>
              
               

            </Swiper>
        </main>
    )
}