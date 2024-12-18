"use client"

import {useState} from 'react';
import arrow from '../../public/image/catalog/arrow.svg'
import Image from "next/image";
import Checkbox from "@/app/ui/Checkbox";

type Props = {
    title: string;
    value: string[]
}


const CatalogFilter = ({title, value}: Props) => {

    const [showFilter, setShowFilter] = useState(false)

    return (
        <div className={'catalogFilter'}>
            <header onClick={() => setShowFilter(!showFilter)}>
                <h3>{title}</h3>
                <Image src={arrow} alt={'arrow'} style={{transform: `rotate(${showFilter ? 0 : 180}deg)`}}/>
            </header>
            {
                showFilter && (
                    <ul>
                        {
                            value.map((item, i) => (
                                <li key={i}>
                                    <Checkbox  item={item} />
                                </li>
                            ))
                        }
                    </ul>
                )
            }


        </div>
    );
};

export default CatalogFilter;