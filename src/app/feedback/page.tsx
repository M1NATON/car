"use client"

import TitlePage from "@/app/components/TitlePage";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from '@/public/image/catalog/Rectangle4.png';
import img2 from '@/public/image/catalog/Rectangle6.png';
import img3 from '@/public/image/catalog/Rectangle7.png';
import img4 from '@/public/image/catalog/Rectangle8.png';
import img5 from '@/public/image/catalog/Rectangle9.png';


const Page = () => {


    function Arrow() {
        return <div/>
    }

    const settings = {
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <Arrow/>,
        prevArrow: <Arrow/>
    };

    const images = [`${img1.src}`, `${img2.src}`, `${img3.src}`, `${img4.src}`, `${img5.src}`]

    return (
        <div className={'feedback'}>

            <header className={'headerTitlePage'}>
                <TitlePage/>
                <h1>Отзывы</h1>
            </header>

            <section className={'feedbackContent'}>
                <h4>Как происходит подбор авто</h4>
                <div className="slider-container">
                    <Slider {...settings}>
                        {images.map((image, imageIndex) => (
                            <Image
                                className="image"
                                key={imageIndex}
                                width={309}
                                height={200}
                                src={image}
                                alt="image"
                            />
                        ))}
                    </Slider>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.</p>

                <p>10.05.2024</p>
            </section>
        </div>
    );
};

export default Page;