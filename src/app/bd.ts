import img1 from '@/public/image/catalog/Rectangle4.png';
import img2 from '@/public/image/catalog/Rectangle6.png';
import img3 from '@/public/image/catalog/Rectangle7.png';
import img4 from '@/public/image/catalog/Rectangle8.png';
import img5 from '@/public/image/catalog/Rectangle9.png';

type descriptionProps = {
    comment: string []
}

type ConfigurationProps = {
    name: string,
    description: string[]
}

export interface CardProps {
    id: number
    images: string[];
    name: string;
    model: string;
    gearLever: string;
    engineShort: string;
    engineFull: string;
    color: string;
    configuration: ConfigurationProps;
    year: number;
    country: string;
    capacity: string;
    price: number;
    body: string;
    drive: string;
    description: descriptionProps
};


export const carListData: CardProps[] = [
    {
        id: 1,
        color: "Grey",
        configuration: {
            name: 'GLX',
            description: [
                `тканевая отделка салона`,
                `климат контроль`,
                `камеры - обзор 360 градусов`,
                `датчики парковки`
            ]
        },
        capacity: "5 мест",
        country: "ОАЭ",
        engineShort: "1.5L",
        gearLever: "Автомат",
        images: [`${img1.src}`, `${img2.src}`, `${img3.src}`, `${img4.src}`, `${img5.src}`],
        model: "Baleno",
        name: "Suzuki",
        year: 2024,
        price: 42000,
        body: 'Хетчюек',
        drive: 'Полный',
        engineFull: 'Атмосферный, 1.5 л. (103 л.с.), бензин',
        description: {
            comment: [
                `Suzuki Baleno III. Новый автомобиль по системе параллельного импорта.`,
                `Гарантия на автомобиль 2 года или 100.000км пробега + возможен подарок, гарантия до 5 лет и до 200 000 км пробега!`,
                `Автомобиль без НДС. В наличии:Алтуфьевское шоссе, 1-й километр, вл2Ас1, Москва!`
            ],
        }
    },

    {
        id: 2,
        color: "White",
        configuration: {
            name: 'GX',
            description: [
                `кожаная отделка салона`,
                `двухзонный климат контроль`,
                `панорамная крыша`,
                `ассистент движения по полосе`
            ]
        },
        capacity: "5 мест",
        country: "Япония",
        engineShort: "2.0L",
        gearLever: "Автомат",
        images: [`${img1.src}`, `${img2.src}`, `${img3.src}`, `${img4.src}`, `${img5.src}`],
        model: "RAV4",
        name: "Toyota",
        year: 2023,
        price: 35000,
        body: 'Кроссовер',
        drive: 'Передний',
        engineFull: 'Атмосферный, 2.0 л. (150 л.с.), бензин',
        description: {
            comment: [
                `Toyota RAV4. Надежный и экономичный кроссовер.`,
                `Гарантия на автомобиль 3 года или 100.000 км пробега.`,
                `Автомобиль без НДС. Доступен для просмотра в Санкт-Петербурге!`
            ],
        }
    },
    {
        id: 3,
        color: "Black",
        configuration: {
            name: 'SX',
            description: [
                `отделка салона кожей Nappa`,
                `трехзонный климат-контроль`,
                `аудиосистема премиум класса`,
                `система ночного видения`
            ]
        },
        capacity: "7 мест",
        country: "Германия",
        engineShort: "3.0L",
        gearLever: "Автомат",
        images: [`${img1.src}`, `${img2.src}`, `${img3.src}`, `${img4.src}`, `${img5.src}`],
        model: "X7",
        name: "BMW",
        year: 2024,
        price: 95000,
        body: 'Внедорожник',
        drive: 'Полный',
        engineFull: 'Турбированный, 3.0 л. (340 л.с.), дизель',
        description: {
            comment: [
                `BMW X7. Роскошь и комфорт на каждом километре.`,
                `Гарантия на автомобиль 3 года или 150.000 км пробега.`,
                `Автомобиль без НДС. Осмотр возможен в Москве!`
            ],
        }
    },
    {
        id: 4,
        color: "Blue",
        configuration: {
            name: 'LX',
            description: [
                `тканевая обивка сидений`,
                `кондиционер`,
                `мультимедийная система`,
                `электронный стояночный тормоз`
            ]
        },
        capacity: "5 мест",
        country: "Южная Корея",
        engineShort: "1.6L",
        gearLever: "Механика",
        images: [`${img1.src}`, `${img2.src}`, `${img3.src}`, `${img4.src}`, `${img5.src}`],
        model: "Creta",
        name: "Hyundai",
        year: 2023,
        price: 27000,
        body: 'Кроссовер',
        drive: 'Передний',
        engineFull: 'Атмосферный, 1.6 л. (123 л.с.), бензин',
        description: {
            comment: [
                `Hyundai Creta. Практичность и надежность для городской езды.`,
                `Гарантия на автомобиль 5 лет или 150.000 км пробега.`,
                `Автомобиль без НДС. В наличии в Казани!`
            ],
        }
    },
    {
        id: 5,
        color: "Red",
        configuration: {
            name: 'Sport',
            description: [
                `отделка салона алькантарой`,
                `спортивный руль`,
                `адаптивная подвеска`,
                `улучшенная тормозная система`
            ]
        },
        capacity: "4 места",
        country: "Италия",
        engineShort: "3.9L",
        gearLever: "Робот",
        images: [`${img1.src}`, `${img2.src}`, `${img3.src}`, `${img4.src}`, `${img5.src}`],
        model: "488 GTB",
        name: "Ferrari",
        year: 2022,
        price: 250000,
        body: 'Купе',
        drive: 'Задний',
        engineFull: 'Турбированный, 3.9 л. (670 л.с.), бензин',
        description: {
            comment: [
                `Ferrari 488 GTB. Исключительная динамика и стиль.`,
                `Гарантия на автомобиль 2 года без ограничения пробега.`,
                `Автомобиль без НДС. Осмотр возможен в Москве!`
            ],
        }
    },
    {
        id: 6,
        color: "Green",
        configuration: {
            name: 'Eco',
            description: [
                `эко-кожа в отделке салона`,
                `электропривод сидений`,
                `помощник при спуске`,
                `автономное торможение`
            ]
        },
        capacity: "5 мест",
        country: "Китай",
        engineShort: "1.5L",
        gearLever: "Вариатор",
        images: [`${img1.src}`, `${img2.src}`, `${img3.src}`, `${img4.src}`, `${img5.src}`],
        model: "H6",
        name: "Haval",
        year: 2024,
        price: 23000,
        body: 'Кроссовер',
        drive: 'Полный',
        engineFull: 'Турбированный, 1.5 л. (150 л.с.), бензин',
        description: {
            comment: [
                `Haval H6. Современный кроссовер с широкими возможностями.`,
                `Гарантия на автомобиль 3 года или 100.000 км пробега.`,
                `Автомобиль без НДС. Доступен для осмотра в Москве!`
            ],
        }
    }
];

