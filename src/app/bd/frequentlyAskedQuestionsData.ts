"use client"

import img1 from "@/public/image/catalog/Rectangle4.png";
import img2 from "@/public/image/catalog/Rectangle6.png";
import img3 from "@/public/image/catalog/Rectangle7.png";
import img4 from "@/public/image/catalog/Rectangle8.png";
import img5 from "@/public/image/catalog/Rectangle9.png"



export type QuestionsDataProps = {

    title: string;
    accordionItem: {
        title: string;
        images: string[];
        description: string;
    }[];
}


export const sections: QuestionsDataProps[] = [
    {
        title: 'Подборка и покупка авто',
        accordionItem: [
            {
                title: 'Как происходит подбор авто',
                images: [`${img1.src}`, `${img2.src}`, `${img3.src}`, `${img4.src}`, `${img5.src}`],
                description: `Lorem ipsum...`,
            },
            {
                title: 'Как происходит подбор авто',
                images: [`${img1.src}`, `${img2.src}`, `${img3.src}`, `${img4.src}`, `${img5.src}`],
                description: `Lorem ipsum...`,
            },
            {
                title: 'Как происходит подбор авто',
                images: [`${img1.src}`, `${img2.src}`, `${img3.src}`, `${img4.src}`, `${img5.src}`],
                description: `Lorem ipsum...`,
            },
        ],
    },
    {
        title: 'Подборка и покупка авто2',
        accordionItem: [
            {
                title: 'Как происходит подбор авто',
                images: [`${img1.src}`, `${img2.src}`, `${img3.src}`, `${img4.src}`, `${img5.src}`],
                description: `Lorem ipsum...`,
            },
            {
                title: 'Как происходит подбор авто',
                images: [`${img1.src}`, `${img2.src}`, `${img3.src}`, `${img4.src}`, `${img5.src}`],
                description: `Lorem ipsum...`,
            },
            {
                title: 'Как происходит подбор авто',
                images: [`${img1.src}`, `${img2.src}`, `${img3.src}`, `${img4.src}`, `${img5.src}`],
                description: `Lorem ipsum...`,
            },
        ],
    },
];