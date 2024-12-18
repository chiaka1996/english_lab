import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BarState } from '../../context/context';
import style from './nav.module.css';
import { useRouter } from "next/router";

const Navigation = () => {
  const { bar, openBar, closeBar} = BarState();
  const router = useRouter();

    return(
      <nav 
      className="font-primary z-[500] py-8 2xl:py-6 fixed top-0 left-0 w-full bg-[#f7e6e3]"
      >
        <div className='container flex flex-row justify-between items-center'>
         {/* <Image 
            src="/logo/slumtechLogo.png"
            width="120"
            height="60"
            alt="logo"
        /> */}
        <div>Eng</div>
           <div className="flex flex-row gap-x-[7rem] justify-center items-center font-nav max-lg:hidden text-[#fff] text-[1.6rem]">
           
            <div className={router.asPath == "/#about" ? style.activeLink : style.navLink}> 
           <Link href="#about" className='no-underline' scroll={true}>
            ABOUT
            </Link>
            </div>

            <div className={router.asPath == "/#service" ? style.activeLink : style.navLink}> 
           <Link href="#service" className='no-underline'>
            OUR SERVICES
            </Link>
            </div>

            <div className={router.asPath == "/#testimonial" ? style.activeLink : style.navLink}> 
           <Link href="#testimonial" className='no-underline'>
            TESTIMONIALS
            </Link>
            </div>

            <div className={router.asPath == "/#contact" ? style.activeLink : style.navLink}> 
           <Link href="#contact" className='no-underline'>
            CONTACT US
            </Link>
            </div>
           </div>
            <div className='flex flex-row justify-between items-center gap-x-[1rem] max-lg:hidden'>
           <div className='flex items-center gap-x-[0.4rem]'>
           {/* <span className="material-symbols-outlined text-primaryColor ml-[1rem]">call</span> */}
           <span className="material-icons text-primaryColor ml-[1rem] text-[1.4rem]">call</span>
           <span className='text-[1.2rem]'>+234814-645-0315</span>
           </div>

           <div>
           <a href='mailto:blessing@gmail.com' className='flex items-center gap-x-[0.4rem]'>
           <span className="material-icons text-primaryColor ml-[rem] text-[1.4rem]">mail</span>
           <span className='text-[1.2rem]'>englishlabconsultancy@gmail.com</span>
           </a>
           </div>
           </div>

           {
                    !bar ? <div className={style.hamburger}>
                  <Image 
                  width={24} 
                  height={24}
                  src="https://img.icons8.com/ios/24/menu--v1.png" 
                  alt="menu--v1"
                  onClick={openBar}
                  />
                    </div> : 
                    <div className={style.hamburger}>
                    <Image 
                    width={24}
                    height={24}
                    src="https://img.icons8.com/ios/24/delete-sign.png" 
                    alt="delete-sign"
                    onClick={closeBar}
                    />   
                </div>
                }
                </div>
      </nav>
    )
}

export default Navigation;