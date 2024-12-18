import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from "next/router";
import style from './footer.module.css';

const Footer = () => {
    const router = useRouter();

    return(
        <footer className='bg-[#000] w-[100%] text-center max-medium:text-left py-[2em] text-[#fff]'>
         <div className='container flex flex-row max-medium:flex-col justify-between items-center max-medium:items-start max-medium:gap-y-[1.5rem] mb-[5rem]'>
         <Image 
            src="/logo/logo.jpeg"
            width="60"
            height="40"
            alt="logo"
        />
           <div className="max-medium:w-full flex flex-row max-medium:flex-col gap-x-[7rem] max-medium:gap-y-[1.5rem] justify-center items-center max-medium:items-start font-nav text-[#fff] text-[1.6rem]">
           
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
            <div className='flex flex-row max-medium:flex-col justify-between items-center max-medium:items-start gap-x-[1rem] max-medium:gap-y-[1.5rem]'>
           <div className='flex items-center gap-x-[0.4rem]'>
           {/* <span className="material-symbols-outlined text-primaryColor ml-[1rem]">call</span> */}
           <span className="material-icons text-primaryColor ml-[1rem] max-medium:ml-0 text-[1.4rem]">call</span>
           <span className='text-[1.2rem]'>+234814-645-0315</span>
           </div>

           <div className=''>
           <a href='mailto:blessing@gmail.com' className='flex items-center gap-x-[0.4rem]'>
           <span className="material-icons text-primaryColor ml-[1rem] max-medium:ml-0 text-[1.4rem]">mail</span>
           <span className='text-[1.2rem]'>englishlabconsultancy@gmail.com</span>
           </a>
           </div>
           </div>
           </div>

        <div className='container w-full justify-center max-medium:justify-start flex flex-row mt-[10rem] max-medium:mt-[2rem]'>
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