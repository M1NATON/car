"use client"
import {CardProps} from "@/app/bd/bd";

type Props = {
    car: CardProps
}

const CarDescription = ({car}: Props) => {
    return (
        <div className={'carDescription'}>
            <h2>Описание</h2>

            <div className={'carDescriptionComment'}>
                <p>Коментарий продавца</p>
                <ul>
                    {
                        car.description.comment.map((comment, idx) => (
                            <li key={idx}>{comment}</li>
                        ))
                    }
                </ul>
            </div>

            <div className={'carDescriptionConfiguration'}>
                <p>Комплектация {car.configuration.name}: цвет: {car.color}</p>
                <ul>
                    {
                        car.configuration.description.map((description, idx) => (
                            <li key={idx}>{description}</li>
                        ))
                    }
                </ul>
            </div>
            <div>
                <p>Сигнализация и антикоррозийная обработка в подарок при покупке автомобиля</p>
            </div>
            <div>
                <p>РОЛЬФ Вешки Мультибренд - Ваш надёжный партнер в мире новых автомобилей!
                    Все представленные автомобили на сайте в наличии!</p>
            </div>

            <div className={'carDescriptionWarranty'}>
                <ul>
                    <li>Гарантия юридической чистоты сделки</li>
                    <li>Все представленные автомобили на сайте в наличии!</li>
                    <li>Возможность купить автомобиль в кредит, более 10 банков партнеров!</li>
                    <li>Выгодный Trade In - обмен Вашего автомобиля на новый!</li>
                    <li>Гарантия на автомобили до 5 лет или 200.000 км пробега!</li>
                </ul>
            </div>


            <div>
                <p>Подробную информацию уточняйте в нашем дилерском центре.</p>
            </div>
            <div>
                <p>Предложение ограничено.</p>
            </div>
            <div>
                <p>Только 3 дня дополнительная выгода при звонке!</p>
            </div>

            <div>
                <p>РОЛЬФ Вешки - Официальный дилер Skoda, Renault, Nissan, Volkswagen.
                    Мы предлагаем уникальные условия покупки на новые автомобили Skoda. Не упустите свой шанс!
                </p>
                <p>Даже если у Вас есть предложение, которое кажется оптимальным, позвоните нам, и мы постараемся его
                    улучшить.
                </p>
                <p>Нет ничего невозможного вместе с РОЛЬФ!</p>
            </div>

            <div className={'carDescriptionAdvantages '}>
                <p>Ваши преимущества при покупке автомобиля в РОЛЬФ:</p>
                <ul>
                    <li>Скидки до 600 000 рублей!</li>
                    <li>Самый большой склад автомобилей в Москве</li>
                    <li>Автомобили в наличии с ПТС</li>
                    <li>Выдача авто в кредит за 1 день</li>
                    <li>Тест-драйв по уникальному маршруту</li>
                    <li>Выгода по Trade-In</li>
                    <li>Выгодный кредит более 15 банков-партнёров</li>
                    <li>Индивидуальный подход к каждому клиенту</li>
                </ul>
            </div>
        </div>
    );
};

export default CarDescription;