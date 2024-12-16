"use client"
import { useRouter } from 'next/router'
import Image from "next/image";
import Style from './testimonial.module.css'

const Testimonial = () => {
    return(
        <div className='flex gap-x-[10rem]'>
            <div className='relative w-[20rem] h-[20rem] rounded-full'>
                <Image
                    src="/images/banner2.jpg"
                    fill
                    alt="customer"
                    className='rounded-full'
                />
            </div>

            <div className={`${Style.testimonialBox} max-w-[87rem] p-[3rem] bg-[#fff] shadow-2xl rounded-[10px]`}>
                <h2 className='text-[2rem] font-primaryFamily text-[#000]'>Osuji Chiaka</h2>
                <p className='text-[#909090]'>
                I was 17 years old when I joined AltSchool Africa. They have the best instructors for live classes 
                and recorded lessons. Since I completed my program, I have been able to get jobs as a software engineer. 
                AltSchool Africa gave me the roadmap and the learning experience that I wouldn’t have gotten at any other place.
                </p>
            </div>

        </div>
    )
}

export default Testimonial;