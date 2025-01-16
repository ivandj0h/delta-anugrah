"use client";

import Whatsapp from "../../public/svg/whatsapp";
import ImageSlider from "./ImageSlider";

const Features = () => {
    const slides = [
        {
            image: "/images/products/captip.jpeg",
            alt: "Logo",
            title: "Cap tip",
        },
        {
            image: "/favicon.ico",
            alt: "Logo",
            title: "Welding",
            description: "pt",
        },
        {
            image: "/favicon.ico",
            alt: "Logo",
            title: "Automotive",
            description: "astra",
        },
        {
            image: "/favicon.ico",
            alt: "Logo",
            title: "Welding",
            description: "pt",
        },
    ];

    const handleClick = () => {
        window.open(
            "https://api.whatsapp.com/send?phone=+62216670889&text=I%20would%20like%20to%20inquire%20about%20your%20products",
            "_blank"
        );
    };

    return (
        <div>
            {/* <div className="text-4xl font-bold ml-8 mb-4">Our products</div>
            <ImageSlider slides={slides} />
            <div className="text-4xl font-bold ml-8 mb-4">
                Industries we serve
            </div> */}
            <div
                onClick={handleClick}
                className="cursor-pointer fixed bottom-10 right-10 z-50">
                <Whatsapp />
            </div>
        </div>
    );
};

export default Features;
