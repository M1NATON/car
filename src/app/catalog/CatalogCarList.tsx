"use client";

import Image from "next/image";



import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import {carListData} from "@/app/bd";
import {formatPrice} from "@/app/utils/formatPrice";




const CatalogCarList = () => {

    const settings = {
        variableWidth: false,
        speed: 500,
        slidesToShow: window.screen.width > 820 ? 3 : 2,
        slidesToScroll: 2
    };



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
                                    href={`/catalog/${car.id}`}>{car.name} {car.model}, {car.year}, {car.engineShort}, {car.gearLever} </Link>

                            </h3>
                            <div>
                                <h4>{formatPrice(car.price)} $</h4>
                            </div>
                        </div>
                        <p>
                            {car.color}, {car.configuration.name}, {car.year}, {car.country}, {car.capacity}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};


export default CatalogCarList;
