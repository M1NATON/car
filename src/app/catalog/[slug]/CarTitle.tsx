"use client"

import {useParams, usePathname} from "next/navigation";
import {splitPathToArray} from "@/app/utils/splitPathToArray";
import {urlToNameRu} from "@/app/utils/urlToNameRu";

const CarTitle = () => {

    const patchname = usePathname()

    const patch = splitPathToArray(patchname);

    return (
        <div className="carTitle">
            {
                window.screen.width > 820 && (
                    <header className={'catalogTitleHeader'}>
                        <p>Главная</p>
                        {
                            patch.map((item, idx) => (
                                <>
                                    <p>—</p>
                                    <p key={idx}>{urlToNameRu(item)}</p>
                                </>
                            ))
                        }
                    </header>
                )
            }
        </div>
    );
};

export default CarTitle;