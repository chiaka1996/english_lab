import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from "next/router";
import style from './footer.module.css';

const Footer = () => {
    const router = useRouter();

    return(
        <footer className='bg-[#000] w-[100%] text-center py-[2em] text-[#fff]'>
         <div className='container flex flex-row justify-between items-center mb-[5rem]'>
         {/* <Image 
            src="/logo/slumtechLogo.png"
            width="120"
            height="60"
            alt="logo"
        /> */}
        <div>Eng</div>
           <div className="flex flex-row gap-x-[7rem] justify-center items-center font-nav max-lg:hidden text-[#fff] text-[1.6rem]">
           
            <div className={router.asPath == "/#about" ? style.activeLink : style.navLink}> 
           <Link href="#about" className='no-underline'>
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
            <div className='flex flex-row justify-between items-center gap-x-[1rem]'>
           <div className='flex items-center gap-x-[0.4rem]'>
           {/* <span className="material-symbols-outlined text-primaryColor ml-[1rem]">call</span> */}
           <span className="material-icons text-primaryColor ml-[1rem] text-[1.4rem]">call</span>
           <span className='text-[1.2rem]'>08084052359</span>
           </div>

           <div className=''>
           <a href='mailto:blessing@gmail.com' className='flex items-center gap-x-[0.4rem]'>
           <span className="material-icons text-primaryColor ml-[rem] text-[1.4rem]">mail</span>
           <span className='text-[1.2rem]'>blessing@gmail.com</span>
           </a>
           </div>
           </div>
           </div>

        <div className=' w-full justify-center flex flex-row mt-[3rem]'>
            <div className='relative w-[24px] h-[24px]'>
                <Image
                 src="https://img.icons8.com/ios-filled/24/F5F5F5/facebook-new.png"
                 fill
                 alt="facebook"
                 />
            </div>
            <div className='relative w-[24px] h-[24px] ml-7'>
                <Image
                src="https://img.icons8.com/ios/24/F5F5F5/twitterx--v2.png"
                 fill
                 alt="twitter"
                 />
            </div>
            <div className='relative w-[24px] h-[24px] ml-7'>
                <Image
               src="https://img.icons8.com/ios/24/F5F5F5/instagram-new--v1.png"
                 fill
                 alt="instagram"
                 />
            </div>
        </div>
        </footer>
    )
}

export default Footer;