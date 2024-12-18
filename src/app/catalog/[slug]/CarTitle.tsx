"use client"

import {useParams} from "next/navigation";

const CarTitle = () => {

    const params = useParams();
    return (
        <>
            {
                window.screen.width > 820 && (
                    <header className={'catalogTitleHeader'}>
                        <p>Главная</p>
                        <p>—</p>
                        <p>Заказать авто</p>
                    </header>
                )
            }
        </>
    );
};

export default CarTitle;