"use client";


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";


type Props = {
    images: string[]
}

const CarSlider = ({images}: Props) => {

    const settings = {
        variableWidth: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2
    };


    return (
        <div className="slider-container">
            <Slider {...settings}>
                {
                    images.map((image, index) => (
                        <Image className={''} key={index} width={557} height={360} src={image}
                               alt={'image'}/>
                    ))
                }
            </Slider>
        </div>
    );
};

export default CarSlider;