"use client";


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import useDeviceSize from "@/app/hooks/useDeviceSize";


type Props = {
    images: string[]
}

const CarSlider = ({images}: Props) => {

    const [width] = useDeviceSize()

    const settings = {
        variableWidth: false,
        speed: 500,
        slidesToShow: width > 820 ? 2 : 1,
        slidesToScroll: width > 820 ? 2 : 1,
    };


    return (
        <div className="slider-container">
            <Slider {...settings}>
                {
                    images.map((image, index) => (
                        <Image className={'carSlider'} key={index} width={557} height={360} src={image}
                               alt={'image'}/>
                    ))
                }
            </Slider>
        </div>
    );
};

export default CarSlider;