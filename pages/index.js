"use client"
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import CountUp from 'react-countup';
import gsap from 'gsap'; 
import { useGSAP} from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { TextPlugin } from 'gsap/dist/TextPlugin'
import Image from "next/image";
import Link from "next/link";
import {Navigation, Sidebar, OurServices, Footer, Banner} from "../components"

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger, TextPlugin);

export default function Home() {  
  const ourServiceSubHeader = "Supporting Your Journey to English Proficiency" 
  const aboutSubHeader = "We explore the world of English." 
  const learnersSubHeader = "No jokes - See proof here!"
  const contactSubHeader = "Your English Goals, Our Priority"

  const [studentCount, setStudentCount] = useState(false);
  const [experienceCount, setExperienceCount] = useState(false);
  const [verifiedCount, setVerifiedCount] = useState(false);


  const ourServices = [
    {
      icon: "laptop_mac",
      title: "In-person And Virtual Tutoring",
      classname: "service-1"
    },
    {
      icon: "abc",
      title: "Insights Into The Art Of English grammar And Eloquence ",
      classname: "service-2"
    },
    {
      icon: "library_books",
      title: "Specialized Examination Preparation Classes(SSCE, GCE, NECO, UTME, POST-UTME)",
      classname: "service-3"
    },
    {
      icon: "handshake",
      title: "Consultation",
      classname: "service-4"
    }
  ]

  const subHeaderEffect = (text, classname) => {
    gsap.to(classname, {
      duration: 2, 
      text: text,
      scrollTrigger: {
              trigger: classname,
              start: "top 100%",
            }  
      })
  }

  const testimonialEffect = (classname) => {
    gsap.fromTo(classname,
      {y: 150},
      {
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: classname,
          start: "top 95%",
        },
      })
  }
   
    useEffect(() => {
      subHeaderEffect(ourServiceSubHeader, '.ourServiceSubHeader')
      subHeaderEffect(aboutSubHeader, '.aboutSubHeader')
      subHeaderEffect(learnersSubHeader, '.learnersSubHeader')
      subHeaderEffect(contactSubHeader, '.contactSubHeader')
      testimonialEffect('.testimonial-1')
      testimonialEffect('.testimonial-2')
      testimonialEffect('.testimonial-3')

      gsap.fromTo(".aboutImage",
              {y: 150},
              {
                y: 0,
                duration: 1,
                scrollTrigger: {
                  trigger: '.aboutImage',
                  start: "top 95%",
                },
                onComplete: () => {
                  gsap.fromTo(".aboutText",
                    {y: 150,
                      opacity: 0
                    },
                    {
                      y: 0,
                      opacity: 1,
                      duration: 1,
                    })
                }  
              }
          )

          gsap.fromTo(".studentCard",
            {y: 150},
            {
              y: 0,
              duration: 1,
              scrollTrigger: {
                trigger: '.studentCard',
                start: "top 95%",
              },
              onComplete: () => {
                setStudentCount(true)
                gsap.fromTo(".scheduleCard",
                  {y: 150,
                    opacity: 0
                  },
                  {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    onComplete: () => {
                      setExperienceCount(true)
                      gsap.fromTo(".verifiedCard",
                        {y: 150,
                          opacity: 0
                        },
                        {
                          y: 0,
                          opacity: 1,
                          duration: 1,
                          onComplete: () => {
                            setVerifiedCount(true)
                          }
                        })
                      }
                  })
              }  
            }
        )

    //   ourServices.map((service, index) => {
    //     console.log(index * 0.2)
    //     gsap.fromTo(`.${service.classname}`,
    //       {y: 100},
    //       {
    //         y: 0,
    //         duration: 1,
    //         scrollTrigger: {
    //           trigger: `.${service.classname}`,
    //           delay: index * 1.2,
    //           start: "top 100%",
    //         }  
    //       }
    //   )
    // })
    },[])

  return (
   <main className="text-basicColor font-[400] text-[1.6rem] max-medium:text-[1.4rem] gap-y-[5rem]">
    <Navigation />
    <Sidebar /> 
    <Banner />

    {/* our service container */}
    <section className="bg-[#f7e6e3] py-[8rem] max-medium:py-[3rem]" id="service">
    <div className="container ">
      <div className="text-center">
        {/* check global style for headers css */}
      <span className="headers text-center text-[2.4rem] font-primaryFamily">What we Offer</span>
      <h3 className="ourServiceSubHeader"></h3>
      </div>

      <div className="mt-[3rem] max-w-[90rem] max-medium:w-full mx-auto whatWeOfferSectionGrid">
       {
        ourServices.map((service, index) => 
          <OurServices 
          key={index} 
          icon={service.icon} 
          title={service.title} 
          classname={service.classname}
          index={index}
          />
          )
       }
      </div>
    </div>
    </section>

       {/* about us section */}
    <section className="py-[8rem] max-medium:py-[3rem]" id="about"> 
    <div className="container ">
    <div className="text-center">
        {/* check global style for headers css */}
      <span className="headers text-center text-[2.4rem] font-primaryFamily">About Us</span>
      <h3 className="aboutSubHeader"></h3>
      </div>

      <div className="flex max-medium:flex-col items-start gap-x-[3rem] max-medium:gap-y-[1.5rem] pt-[3rem]">
        <div className="relative w-[55rem] max-medium:w-full min-h-[42rem] max-medium:min-h-[30rem] aboutImage">
          <Image 
          fill
          src="/images/banner3.jpg"
          alt="about us"
          className="rounded-[10px]"
          />
        </div>
        {/* aboutText opacity is set to 1 on the gsap animation for efficiency */}
        <div className="w-[55rem] max-medium:w-full grid gap-y-[2rem] max-medium:gap-y-[1.5rem] opacity-0 aboutText">
          <p>We’re dedicated to making English learning accessible, enjoyable, and effective for everyone. 
            Founded by a team of passionate English educators, 
            we specialize in creating personalized tutoring experiences that 
            focus on each student’s unique goals and learning style.
          </p>
          <p>
          We offer a range of services, from foundational language skills and academic support to 
          advanced writing and exam preparation. Our tutors work with students of all levels, from
           beginners building confidence to advanced learners 
          perfecting their skills. We prioritize interactive and practical learning, 
          ensuring that every lesson feels relevant and engaging.
          </p>
          <p>
          you’re not just learning English—you’re 
          building skills that open doors to new opportunities. Join us to take the next step in your English journey!
          </p>
          <p className="flex gap-x-[3rem] cursor-pointer">
          <Image
          width={16}
          height={16}
          src="/icons/instagram.png"
          alt="instagram"
          />
          <Image
          width={16}
          height={16}
          src="/icons/facebook.png"
          alt="instagram"
          />
          <Image
          width={16}
          height={16}
          src="/icons/tiktok.png"
          alt="instagram"
          />
          </p>
        </div>
      </div>
      </div>
    </section>
    
    {/* achievements */}
    <section className="py-[4rem] max-medium:py-[3rem]  bg-[#f7e6e3]">
    <div className="container ">
    <div className="w-[90rem] max-medium:w-full mx-auto whatWeOfferSectionGrid">
      <div className="bg-[#0773e6] h-[10rem] p-[3rem] rounded-[10px] flex items-center gap-[1rem] relative cursor-pointer studentCard">
        <div className="bg-[#61cff5] w-[4rem] h-[4rem] flex items-center justify-center rounded-[10px]">
          <span className="material-icons text-[#fff]">stars</span>
        </div>
        <div>
        <div className="relative text-[#fff] font-[800] text-[3.2rem]">
        {studentCount ?  <CountUp 
        end={50}
        duration={1}
        /> : 0 }
          <span className="text-[2rem] absolute -top-0">+</span></div>
        <div className="text-[#edf1ee] text-[1.4rem] mt-[-0.7rem]">Number Of Students</div>
        </div>
      </div>

      <div className="bg-[#e62907] h-[10rem] p-[3rem] rounded-[10px] flex items-center gap-[1rem] opacity-0 cursor-pointer scheduleCard">
        <div className="bg-[#f48d7a] w-[4rem] h-[4rem] flex items-center justify-center rounded-[10px]">
          <span className="material-icons text-[#fff]">schedule</span>
        </div>
        <div>
        <div className="relative text-[#fff] font-[800] text-[3.2rem]">
        {experienceCount ?  <CountUp 
        end={10}
        duration={1}
        /> : 0 }
        <span className="text-[2rem] absolute -top-0">+</span></div>
        <div className="text-[#edf1ee] text-[1.4rem] mt-[-0.7rem]">Years Of Experience</div>
        </div>
      </div>

      <div className="bg-[#05bd18] h-[10rem] p-[3rem] rounded-[10px] flex items-center gap-[1rem] opacity-0 cursor-pointer verifiedCard">
        <div className="bg-[#6ef87c] w-[4rem] h-[4rem] flex items-center justify-center rounded-[10px]">
          <span className="material-icons text-[#fff]">verified</span>
        </div>
        <div>
        <div className="relative text-[#fff] font-[800] text-[3.2rem]">
        {verifiedCount ?  <CountUp 
        end={100}
        duration={1}
        /> : 0 }
          <span className="text-[2rem] absolute -top-0">+</span></div>
        <div className="text-[#edf1ee] text-[1.4rem] mt-[-0.7rem]">Verified Contents</div>
        </div>
      </div>
      </div>
      </div>
    </section>

       {/* testimonial starts here */}
    <section className="pt-[8rem] max-medium:pt-[3rem] bg-[#fff]" id="testimonial"> 
    <div className="container ">
    <div className="text-center mb-">
        {/* check global style for headers css */}
      <span className="headers text-center text-[2.4rem] font-primaryFamily">Learners say we know our onions</span>
      <h3 className="learnersSubHeader"></h3>
      </div>
      
      {/* testimonial 1 */}
      <div className='flex max-medium:flex-col gap-x-[5rem] max-medium:gap-y-[4rem] mt-[3rem] testimonial-1'>
            <div className='relative w-[20rem] h-[20rem] rounded-full'>
                <Image
                    src="/images/banner2.jpg"
                    fill
                    alt="customer"
                    className='rounded-full'
                />
            </div>

            <div className='testimonialBox max-w-[85rem] p-[3rem] bg-[#fff] max-medium:bg-[#f8f8f8] shadow-2xl rounded-[10px]'>
                <h2 className='text-[2rem] font-primaryFamily text-[#000]'>Osuji Chiaka</h2>
                <p className='text-[#909090]'>
                I was 17 years old when I joined AltSchool Africa. They have the best instructors for live classes 
                and recorded lessons. Since I completed my program, I have been able to get jobs as a software engineer. 
                AltSchool Africa gave me the roadmap and the learning experience that I wouldn’t have gotten at any other place.
                </p>
            </div>
            </div>
            
              {/* testimonial 2 */}
            <div className='flex max-medium:flex-col-reverse max-medium:gap-y-[4rem] gap-x-[5rem] mt-[5rem] testimonial-2'>
            <div className='testimonialBox2 max-w-[85rem] p-[3rem] max-medium:bg-[#f8f8f8] bg-[#fff] shadow-2xl rounded-[10px]'>
                <h2 className='text-[2rem] font-primaryFamily text-[#000]'>Conidence Nkiruka</h2>
                <p className='text-[#909090]'>
                I was 17 years old when I joined AltSchool Africa. They have the best instructors for live classes 
                and recorded lessons. Since I completed my program, I have been able to get jobs as a software engineer. 
                AltSchool Africa gave me the roadmap and the learning experience that I wouldn’t have gotten at any other place.
                </p>
            </div>

            <div className='relative w-[20rem] h-[20rem] rounded-full'>
                <Image
                    src="/images/banner2.jpg"
                    fill
                    alt="customer"
                    className='rounded-full'
                />
            </div>
            </div>

              {/* testimonial 3 */}
            <div className='flex  max-medium:flex-col max-medium:gap-y-[4rem] gap-x-[5rem] my-[5rem] testimonial-3'>
            <div className='relative w-[20rem] h-[20rem] rounded-full'>
                <Image
                    src="/images/banner2.jpg"
                    fill
                    alt="customer"
                    className='rounded-full'
                />
            </div>
            <div className='testimonialBox3 max-w-[85rem] p-[3rem] bg-[#fff] max-medium:bg-[#f8f8f8] shadow-2xl rounded-[10px]'>
                <h2 className='text-[2rem] font-primaryFamily text-[#000]'>Osuji Gloria</h2>
                <p className='text-[#909090]'>
                I was 17 years old when I joined AltSchool Africa. They have the best instructors for live classes 
                and recorded lessons. Since I completed my program, I have been able to get jobs as a software engineer. 
                AltSchool Africa gave me the roadmap and the learning experience that I wouldn’t have gotten at any other place.
                </p>
            </div>
            </div>
      </div>
    </section>

    <section className="pt-[8rem] max-medium:pt-[3rem] pb-[5rem] max-medium:pb-[3rem]" id="contact">
    <div className="container ">
    <div className="text-center">
        {/* check global style for headers css */}
      <span className="headers text-center text-[2.4rem] font-primaryFamily">Leave a Message</span>
      <h3 className="contactSubHeader"></h3>
      </div>

      <form className="mt-[3rem] max-w-[70rem] mx-auto flex flex-col gap-y-[1.5rem]">
       <div>
        <label>fullname</label>
        <input type="text" placeholder="john doe"  
        className="text-[1.4rem] w-full h-[4.5rem] rounded-[8px] outline-none border border-[#808080] px-[1rem]"/>
       </div>
       <div>
        <label>email</label>
        <input type="email" placeholder="john doe"  
        className="text-[1.4rem] w-full h-[4.5rem] rounded-[8px] outline-none border border-[#808080] px-[1rem]"/>
       </div>
      
       <div>
        <label>message</label>
        <textarea 
        placeholder="drop your message"
        className="text-[1.4rem] rounded-[8px] outline-none border border-[#808080] px-[1rem] w-full h-[10.6rem]"
        > 
        </textarea>
       </div>
       <button
        className="relative text-[1.6rem] text-[#fff] rounded-[0.8rem] h-[4.5rem] w-[17rem] bg-primaryColor flex items-center justify-center gap-x-3"
       >
        <span>send</span>
       <span className="material-icons">send</span>
       </button>

      </form>
      </div>
    </section>

    <Footer />
    </main>
  );
}
