import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
        />
    );
}

const ImageSlider = ({ slides }) => {
    const settings = {
        infinite: false,
        slidesToShow: [1, 2],
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 768, // Screen width at which the settings change
                settings: {
                    slidesToShow: 2, // Number of slides shown for this screen size
                },
            },
            {
                breakpoint: 1024, // Screen width at which the settings change
                settings: {
                    slidesToShow: 4, // Number of slides shown for this screen size
                },
            },
            // Add more responsive settings as needed
        ],
    };

    return (
        <div className="overflow-x-hidden">
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div className="w-1/2" key={index}>
                        <div className="mb-4 mx-8">
                            <img
                                src={slide.image}
                                alt={slide.alt}
                                height={400}
                            />
                            <h2 className="mb-2 text-xl md:text-2xl font-bold">
                                {slide.title}
                            </h2>
                            <p>{slide.description}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ImageSlider;
