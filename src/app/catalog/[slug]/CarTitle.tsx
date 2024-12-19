"use client"

import {usePathname} from "next/navigation";
import {splitPathToArray} from "@/app/utils/splitPathToArray";
import {urlToNameRu} from "@/app/utils/urlToNameRu";


type Props = {
    carName: string
    carModel: string
}

const CarTitle = ({carName, carModel}:Props) => {

    const pathname = splitPathToArray(usePathname())

    return (
        <div className="carTitle">
            {
                window.screen.width > 820 && (
                    <header className={'catalogTitleHeader'}>
                        <p>Главная</p>
                        <p>—</p>
                        <p>{urlToNameRu(pathname)}</p>
                        <p>—</p>
                        <p>{carName} {carModel}</p>
                    </header>
                )
            }
        </div>
    );
};

export default CarTitle;