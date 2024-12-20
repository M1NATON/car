"use client";

import {useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import arrow from "@/public/image/catalog/arrow.svg";
import {sections} from "@/app/bd/frequentlyAskedQuestionsData";


const FrequentQuestionsAccordion = () => {
    const [openAccordions, setOpenAccordions] = useState<{ [key: string]: boolean }>({});

    const toggleAccordion = (key: string) => {
        setOpenAccordions((prevState) => ({
            ...prevState,
            [key]: !prevState[key],
        }));
    };


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

    return (
        sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="accordion">
                <h3>{section.title}</h3>
                {section.accordionItem.map((item, itemIndex) => {
                    const accordionKey = `${sectionIndex}-${itemIndex}`;
                    const isOpen = openAccordions[accordionKey] || false;

                    return (
                        <div
                            key={itemIndex}
                            className={`accordionContent ${isOpen ? "open" : "closed"}`}
                        >
                            <h4 onClick={() => toggleAccordion(accordionKey)}>
                                <Image
                                    src={arrow}
                                    alt="arrow"
                                    style={{
                                        transform: `rotate(${isOpen ? 180 : 0}deg)`,
                                        transition: "transform 0.3s ease",
                                    }}
                                />
                                <span>{item.title}</span>
                            </h4>
                            {isOpen && (
                                <div className="accordionContentBody">
                                    <div className="slider-container">
                                        <Slider {...settings}>
                                            {item.images.map((image, imageIndex) => (
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
                                    <p>{item.description}</p>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        ))
    );
};

export default FrequentQuestionsAccordion;
