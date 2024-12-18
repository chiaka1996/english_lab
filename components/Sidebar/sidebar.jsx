"use client"
import { useRouter } from 'next/router'
import Link from 'next/link';
import style from './sidebar.module.css';
import { BarState } from '../../context/context';

const SideBar = ({page}) => {
  const router = useRouter();
    const { bar, closeBar} = BarState();

    const NavItems = [
      {
        label: "HOME",
        url: "/"
      },
      {
        label: "ABOUT",
        url: "#about"
      },
      {
        label: "OUR SERVICES",
        url: "#service"
      },
      {
        label: "TESTIMONIALS",
        url: "#testimonial"
      },   
      {
        label: "CONTACT US",
        url: "#contact"
      }
    ]
  
    
    return(
       <nav className={bar ? style.sidebarContainer : style.sidebarContainerClose}>
          {
              NavItems.map((data, i) =>  <div key={i} className='w-full text-center mb-[10%]' >
                <Link href={data.url} className='no-underline text-nav_links text-normal font-label'>
                <span onClick={()=>closeBar()} className={router.asPath == data.url ? style.activeLink : style.navLink}>{data.label}</span>
                </Link>
                </div>
              )
            }

         <div className='flex flex-row max-medium:flex-col justify-center items-center gap-x-[1rem] max-medium:gap-y-[3rem]'>
         <div className='flex items-center gap-x-[0.4rem]'>
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
       </nav>
    )
}

export default SideBar;