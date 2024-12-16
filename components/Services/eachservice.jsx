import {useEffect} from "react";
import gsap from 'gsap'; 
import { useGSAP} from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import style from './eachService.module.css';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const EachService = ({icon, title, index, classname}) => {
    useEffect(() => {
            console.log(index * 1.2)
            gsap.fromTo(`.${classname}`,
              {y: 100},
              {
                y: 0,
                duration: 1,
                scrollTrigger: {
                  trigger: `.${classname}`,
                  delay: index * 1.2,
                  start: "top 100%",
                }  
              }
          )
        },[])
    return(
       <div 
       className={`${classname} cursor-pointer shadow-lg bg-white text-center flex items-center justify-center py-[1rem] px-[0.5rem] h-[20.5rem] bg-[#fff] rounded-[10px] hover:scale-125`}
       >
        <div>
        <span className="material-icons text-[4.5rem] text-[#c42908]">{icon}</span>
        <p className="font-[500] max-medium:text-[1.6rem]">{title}</p>
        </div>
        </div>
    )
}

export default EachService;