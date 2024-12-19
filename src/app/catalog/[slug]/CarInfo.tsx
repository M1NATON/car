"use client"

import {CardProps} from "@/app/bd";
import Link from "next/link";
import {formatPrice} from "@/app/utils/formatPrice";
import arrow from '@/public/image/car/arrow.svg'
import Image from "next/image";
import clock from '@/public/image/car/clock.svg'
import pin from '@/public/image/car/pin.svg'
import FormApplication from "@/app/components/FormApplication";
import {useState} from "react";
import {screenWidth} from "@/app/utils/screenWidth";
import NavbarModal from "@/app/components/navbar/NavbarModal";

type Props = {
    car: CardProps
}

const CarInfo = ({car}: Props) => {


    // useEffect(() => {
    //     const year = new Date().getYear()
    //     const month = new Date().getMonth()
    //     const day = new Date().getDate()
    //     const api = `https://www.cbr-xml-daily.ru/archive/${year}/${month}/${day}/daily_json.js`
    //     fetch(api)
    //         .then(response => response.json())
    //         .then(json => console.log('json ', json))
    //         .catch(err => console.log(err))
    // }, []);

    const dollarToRub = (dollar: number) => {
        return formatPrice(dollar * 103)
    }

    const [modal, setModal] = useState(false)

    const onOpen = () => {
        setModal(true)
        document.body.classList.add('no-scroll')
    }

    const onClose = () => {
        setModal(false)
        document.body.classList.remove('no-scroll');
    }
    return (
        <div className={'CarInfoContainer'}>
            <header>
                <div className={'carDescriptionShort'}>
                    <div className="carInfo">
                        <h3>
                            <Link
                                href={`/catalog/${car.id}`}>{car.name} {car.model}, {car.year}, {car.engineShort}, {car.gearLever} </Link>
                        </h3>
                        <p>
                            {car.color}, {car.configuration.name}, {car.year}, {car.country}, {car.capacity}
                        </p>
                    </div>
                </div>
            </header>
            {
                modal && (
                    <NavbarModal isOpen={modal} onClose={onClose}/>
                )
            }
            <section className="carInfoAndApplication">
                <div className={'carPriceAndTable'}>
                    <div className={'carPriceAndDelivery'}>
                        <div className={'carPriceAndDeliveryContainer'}>
                            <div className={'carPrice'}>
                                <p className={'carPriceTitle'}>Стоимость авто</p>
                                <div>
                                    <h5>{formatPrice(car.price)} $</h5>
                                    <Image src={arrow} alt={'arrow'}/>
                                    <h5>{dollarToRub(car.price)} ₽</h5>
                                </div>
                                <button onClick={onOpen}>
                                    заказать авто
                                </button>
                            </div>
                            <div className={'carDelivery'}>
                                <ul>
                                    <li>
                                        <Image src={pin} alt={'pin'}/>
                                        <p>Доставка под ключ
                                            из ОАЭ</p>
                                    </li>
                                    <li>
                                        <Image src={clock} alt={'clock'}/>
                                        <p>Срок от 30-45 дней
                                            c момента оплаты</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <p className={'carPriceAndDeliveryDescription'}>Финальная стоимость будет расчитана нашим
                            менеджером
                            для
                            Вашего города и учитывая текущий курс валют и комиссий</p>
                    </div>

                    <table className={'carDescriptionTable'}>
                        <tbody>
                        <tr>
                            <td>Год выпуска</td>
                            <td>{car.year}</td>
                        </tr>
                        <tr>
                            <td>Комплектация</td>
                            <td>{car.configuration.name}</td>
                        </tr>
                        <tr>
                            <td>Кузов</td>
                            <td>{car.body}</td>
                        </tr>
                        <tr>
                            <td>Двигатель</td>
                            <td>{car.engineFull}</td>
                        </tr>
                        <tr>
                            <td>Трансмисия</td>
                            <td>{car.gearLever}</td>
                        </tr>
                        <tr>
                            <td>Привод</td>
                            <td>{car.drive}</td>
                        </tr>
                        <tr>
                            <td>Цвет кузова</td>
                            <td>{car.color}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                {
                    screenWidth > 820 && (
                        <div>
                            <FormApplication/>
                        </div>
                    )
                }

            </section>


        </div>
    );
};

export default CarInfo;