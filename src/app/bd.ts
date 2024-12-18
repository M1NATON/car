import img1 from '@/public/image/catalog/Rectangle4.png';
import img2 from '@/public/image/catalog/Rectangle6.png';
import img3 from '@/public/image/catalog/Rectangle7.png';
import img4 from '@/public/image/catalog/Rectangle8.png';
import img5 from '@/public/image/catalog/Rectangle9.png';



export type CardProps = {
    id: number
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


export const carListData: CardProps[] = [
    {
        id: 1,
        color: "Grey",
        configuration: "GLX",
        capacity: "5 мест",
        country: "ОАЭ",
        engine: "1.5L",
        gearLever: "автомат",
        images: [`${img1.src}`, `${img2.src}`, `${img3.src}`, `${img4.src}`, `${img5.src}`],
        model: "Baleno1",
        name: "Suzuki",
        year: 2024,
        price: 42000
    },
    {
        id: 2,
        color: "Grey",
        configuration: "GLX",
        capacity: "5 мест",
        country: "ОАЭ",
        engine: "1.5L",
        gearLever: "автомат",
        images: [`${img3.src}`, `${img5.src}`, `${img2.src}`, `${img1.src}`, `${img4.src}`],
        model: "Baleno2",
        name: "Suzuki",
        year: 2024,
        price: 42000
    },
    {
        id: 3,
        color: "Grey",
        configuration: "GLX",
        capacity: "5 мест",
        country: "ОАЭ",
        engine: "1.5L",
        gearLever: "автомат",
        images: [`${img4.src}`, `${img5.src}`, `${img1.src}`, `${img3.src}`, `${img2.src}`],
        model: "Baleno3",
        name: "Suzuki",
        year: 2024,
        price: 42000
    },
];