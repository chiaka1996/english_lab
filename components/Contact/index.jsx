import {useState, useEffect} from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from "next/router";
import gsap from 'gsap'; 
import { useGSAP} from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { TextPlugin } from 'gsap/dist/TextPlugin'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from '../Spinner'

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger, TextPlugin);

const Contact = () => {
    const router = useRouter();
     const contactSubHeader = "Your English Goals, Our Priority"
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({
      name: "",
      email: "",
      message: ""
  })
  
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/gi;

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
  
  const onChangeInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;
  
    setData({
        ...data, 
        [name] : value
    })
  }

  const submitBtn = async (e) => {
    try{
        e.preventDefault();
        setLoading(true)
    const {name, email, message} = data;
  
    if(!name || !email || !message) {
        setLoading(false)
        return toast.error("please fill all required fields.", {
            position: "top-right",
            theme: "colored",
            });
    }
  
    if(name.length < 2){
        setLoading(false)
        return toast.error("name should be a minimum of 2 characters", {
            position: "top-right",
            theme: "colored",
            });
    }
  
    if(!emailRegex.test(email)){
        setLoading(false)
        return toast.error("invalid email", {
            position: "top-right",
            theme: "colored",
            });
    }
  
    const httpRequest = await fetch('../api/contact',{
        method: "POST",
        body: JSON.stringify(data),
        headers:{
            "Content-type": "application/json; charset=UTF-8"
        }
    })
  
    const response = await httpRequest.json();
  
    if(response.status){
        setLoading(false)
        setData({
            name: "",
            email: "",
            message: ""
        })
        return toast.success("message sent successfully", {
            position: "top-right",
            theme: "colored",
            });
    }
    else{
        setLoading(false)
        toast.error(`${response.message}`, {
            position: "top-right",
            theme: "colored",
            });
    }
  }
  catch(error){
    setLoading(false)
    return toast.error(`${error.message}`, {
        position: "top-right",
        theme: "colored",
        });
  }
  }
    useEffect(() => {
        subHeaderEffect(contactSubHeader, '.contactSubHeader')
    },[])

    return(
        <form className="mt-[3rem] max-w-[70rem] mx-auto flex flex-col gap-y-[1.5rem]">
            <ToastContainer />
        <div>
         <label>fullname</label>
         <input type="text" placeholder="john doe" 
         name="name" value={data.name} onChange={onChangeInput} 
         className="text-[1.4rem] w-full h-[4.5rem] rounded-[8px] outline-none border border-[#808080] px-[1rem]"/>
        </div>
        <div>
         <label>email</label>
         <input type="email" placeholder="john doe"
         name="email" value={data.email} onChange={onChangeInput}  
         className="text-[1.4rem] w-full h-[4.5rem] rounded-[8px] outline-none border border-[#808080] px-[1rem]"/>
        </div>
       
        <div>
         <label>message</label>
         <textarea 
         placeholder="drop your message"
         name="message" value={data.message} onChange={onChangeInput}
         className="text-[1.4rem] rounded-[8px] outline-none border border-[#808080] px-[1rem] w-full h-[10.6rem]"
         > 
         </textarea>
        </div>
        <button
         className="relative text-[1.6rem] text-[#fff] rounded-[0.8rem] h-[4.5rem] w-[17rem] bg-primaryColor "
         onClick={submitBtn}
        >
            {loading ? <Spinner /> : <span className='flex items-center justify-center gap-x-3'>
         <span>send</span>
        <span className="material-icons">send</span>
        </span>}
        </button>
       </form>
    )
}

export default Contact