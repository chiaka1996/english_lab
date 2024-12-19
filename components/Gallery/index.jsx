
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from 'next/image';

const Gallery = () => {
    return(
        <div className="mt-[3rem]">
        <Carousel className="">
                <div className="h-[50rem] w-full relative bg-[#000] relative">
                <Image
                    src="/images/gallery-1.jpeg"
                    fill
                    alt="english lab consultancy gallery"
                    className=''
                />
                </div>
                <div className="h-[50rem] w-full relative bg-[#000] relative">
                <Image
                    src="/images/gallery-2.jpeg"
                    fill
                    alt="english lab consultancy gallery"
                    className=''
                />
                </div>
                <div className="h-[50rem] w-full relative bg-[#000] relative">
                <Image
                    src="/images/gallery-3.jpeg"
                    fill
                    alt="english lab consultancy gallery"
                    className=''
                />
                </div>
                <div className="h-[50rem] w-full relative bg-[#000] relative">
                <Image
                    src="/images/gallery-4.jpeg"
                    fill
                    alt="english lab consultancy gallery"
                    className=''
                />
                </div>
                     
            </Carousel>
        </div>
    )
}

export default Gallery;