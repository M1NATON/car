"use client";

import React, {useState, useRef, useEffect} from "react";
import Image from "next/image";
import img1 from '../../public/image/catalog/Rectangle4.png';
import img2 from '../../public/image/catalog/Rectangle6.png';
import img3 from '../../public/image/catalog/Rectangle7.png';
import img4 from '../../public/image/catalog/Rectangle8.png';
import img5 from '../../public/image/catalog/Rectangle9.png';


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";


type CardProps = {
    images: string[];
    name: string;
    model: string;
    gearLever: string;
    engine: string;
    color: string;
    configuration: string;
    year: number;
    country: string;
    capacity: string;
    price: number;
};

const CatalogCarList = () => {
    const carListData: CardProps[] = [
        {
            color: "Grey",
            configuration: "GLX",
            capacity: "5 мест",
            country: "ОАЭ",
            engine: "1.5L",
            gearLever: "автомат",
            images: [`${img1.src}`, `${img2.src}`, `${img3.src}`, `${img4.src}`, `${img5.src}`],
            model: "Baleno",
            name: "Suzuki",
            year: 2024,
            price: 42000
        },
        {
            color: "Grey",
            configuration: "GLX",
            capacity: "5 мест",
            country: "ОАЭ",
            engine: "1.5L",
            gearLever: "автомат",
            images: [`${img3.src}`, `${img5.src}`, `${img2.src}`, `${img1.src}`, `${img4.src}`],
            model: "Baleno",
            name: "Suzuki",
            year: 2024,
            price: 42000
        },
        {
            color: "Grey",
            configuration: "GLX",
            capacity: "5 мест",
            country: "ОАЭ",
            engine: "1.5L",
            gearLever: "автомат",
            images: [`${img4.src}`, `${img5.src}`, `${img1.src}`, `${img3.src}`, `${img2.src}`],
            model: "Baleno",
            name: "Suzuki",
            year: 2024,
            price: 42000
        },
    ];

    const settings = {
        variableWidth: false,
        speed: 500,
        slidesToShow: window.screen.width > 820 ? 3 : 2,
        slidesToScroll: 2
    };

    const formatPrice = (price: number): string => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    return (
        <div className="catalogCarList">
            {carListData.map((car, index) => (
                <div key={index} className="carCard">
                    <div className="slider-container">
                        <Slider {...settings}>
                            {
                                car.images.map((image, index) => (
                                    <Image className={'carImage'} key={index} width={309} height={200} src={image}
                                           alt={'image'}/>
                                ))
                            }
                        </Slider>
                    </div>
                    <div className={'carDescription'}>
                        <div className="carInfo">
                            <h3>
                                <Link
                                    href={`/catalog/${car.name}-${car.model}`}>{car.name} {car.model}, {car.year}, {car.engine}, {car.gearLever} </Link>

                            </h3>
                            <div>
                                <h4>{formatPrice(car.price)} $</h4>
                            </div>
                        </div>
                        <p>
                            {car.color}, {car.configuration}, {car.year}, {car.country}, {car.capacity}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};


export default CatalogCarList;
