"use client"


import {urlToNameRu} from "@/app/utils/urlToNameRu";
import {usePathname} from "next/navigation";
import useDeviceSize from "@/app/hooks/useDeviceSize";
import {splitPathToArray} from "@/app/utils/splitPathToArray";


type Props = {
    carName?: string
    carModel?: string
}


const TitlePage = ({carName, carModel}: Props) => {

    const pathname = usePathname();
    const [width] = useDeviceSize()

    return (
        <div className="titlePge">
            {
                width > 820 && (
                    <header>
                        <p>Главная</p>
                        {
                            pathname && (
                                <>
                                    <p>—</p>
                                    <p>{urlToNameRu(splitPathToArray(pathname))}</p>
                                </>)
                        }

                        {
                            carName && carModel && (
                                <>
                                    <p>—</p>
                                    <p>{carName} {carModel}</p>
                                </>)
                        }
                    </header>
                )
            }
        </div>
    );
};

export default TitlePage;