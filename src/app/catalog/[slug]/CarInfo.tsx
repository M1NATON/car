import React from 'react';
import {CardProps} from "@/app/bd";
import Link from "next/link";
import {formatPrice} from "@/app/utils/formatPrice";
import arrow from '@/public/image/car/arrow.svg'
import Image from "next/image";

type Props = {
    car: CardProps
}

const CarInfo = ({car}: Props) => {

    const dollarToRub = (dollar: number) => {
        return formatPrice(dollar * 103)
    }

    return (
        <div className={'CarInfoContainer'}>
            <header>
                <div className={'carDescription'}>
                    <div className="carInfo">
                        <h3>
                            <Link
                                href={`/catalog/${car.id}`}>{car.name} {car.model}, {car.year}, {car.engine}, {car.gearLever} </Link>
                        </h3>
                        <p>
                            {car.color}, {car.configuration}, {car.year}, {car.country}, {car.capacity}
                        </p>
                    </div>
                </div>
            </header>

            <main>

                <div className={'carPrice'}>
                    <p className={'carPriceTitle'}>Стоимость авто</p>
                    <div >
                        <h5>{formatPrice(car.price)} $</h5>
                        <Image src={arrow} alt={'arrow'}/>
                        <h5>{dollarToRub(car.price)} ₽</h5>
                    </div>
                    <button>
                        заказать авто
                    </button>
                </div>

            </main>
        </div>
    );
};

export default CarInfo;