import {useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap'; 
import { useGSAP} from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import style from './banner.module.css';
import { useRouter } from "next/router";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
    const bannerSubParagraph = [
        "Master the foundations of English grammar and sharpen your writing for academic or professional needs.",
        "Perfect your skills for meetings, presentations, and professional communication.",
        "Improve fluency, pronunciation, and confidence in everyday conversations"
      ];
    
      const bannerImage = [
        "/images/banner3.jpg", 
         "/images/banner2.jpg",
           "/images/banner4.jpg"
      ]
    
      const [quotesCount, setQuotesCount] = useState(0)
    
      const incrementCount = () => {
        setQuotesCount(quote => quote + 1)
      }
    
      const resetQuotesCount = () => {
        setQuotesCount(0)
      }
      useEffect(() => {
        const interval = setInterval(() => {
        const zeroBasedQuotesLength = bannerSubParagraph.length - 1;
        console.log(zeroBasedQuotesLength)
        zeroBasedQuotesLength > quotesCount ? incrementCount() : resetQuotesCount()
    
        gsap.fromTo(".subTextParagraph",
          {y: 30},
          {
            y: 0,
            duration: 0.4,
          });
    
      }, 5000);
     
      //Cleanup to avoid memory leaks
       return () =>  clearTimeout(interval);
      }, [quotesCount]);

      useEffect(() => {
      gsap.fromTo(".allBannerText",
      {x: -100},
      {
        x: 0,
        duration: 1,
        onComplete: () => {
          gsap.to('.brandName', {
            duration: 2, 
            text: "English Lab Consultancy",
            })
        }
      }
      
    )
    gsap.fromTo(".bannerImage",
      {x: 100},
      {
        x: 0,
        duration: 1,
      }  
    )
      },[])

 return(
        <section className="relative min-h-[100vh] flex items-center banner pt-[7rem] max-medium:pt-[8rem] max-medium:pb-[3rem]">
        <div className="container flex max-medium:flex-col max-medium:gap-y-[3rem] gap-x-[3rem] items-center justify-between">
        <div className="max-w-[60rem] allBannerText">
            <h1 className="font-[700] text-primaryColor text-[2rem] leading-[2.4rem] brandName"></h1>
            <h2 className="font-[700] font-primaryFamily text-basicColor text-[3.2rem] leading-[4.5rem] tracking-wider">Unlock the power of fluent, confident English with personalized 
            lessons that meet you where you are!</h2>

            <div className="max-w-[45rem] max-medium:max-w-[100%] max-medium:h-[4.5rem] mt-[1rem] text-[1.4rem] mb-[2rem] subTextParagraph">
            {bannerSubParagraph[quotesCount]}
            </div>

            {/* button */}
            <Link href="#contact" className='no-underline'>
            <button 
            className="relative text-[1.4rem] text-[#fff] rounded-[0.8rem] h-[4.5rem] w-[17rem] bg-primaryColor flex items-center justify-center gap-x-10">
            <span>Get in touch</span>
            <span className="material-icons ">arrow_forward</span>
            </button>
            </Link>
        </div>
        <div className="relative w-[50rem] max-medium:w-full min-h-[40rem] max-medium:min-h-[30rem] rounded-[8px] bannerImage">
        <Image 
            src={bannerImage[quotesCount]}
            fill
            alt="banner"
            className="rounded-[0.8rem]"
        />
        </div>    
        </div>
        </section>
  )
}

export default Banner;