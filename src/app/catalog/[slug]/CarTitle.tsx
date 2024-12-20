"use client"

import {usePathname} from "next/navigation";
import {splitPathToArray} from "@/app/utils/splitPathToArray";
import {urlToNameRu} from "@/app/utils/urlToNameRu";
import useDeviceSize from "@/app/hooks/useDeviceSize";


type Props = {
    carName: string
    carModel: string
}

const CarTitle = ({carName, carModel}:Props) => {

    const pathname = splitPathToArray(usePathname())
    const [width] = useDeviceSize()

    return (
        <div className="carTitle">
            {
                width > 820 && (
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