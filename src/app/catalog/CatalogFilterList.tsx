import React from 'react';
import close from '../../public/image/catalog/close.svg'
import Image from "next/image";
import CatalogFiltersMobil from "@/app/catalog/CatalogFiltersMobil";
import useDeviceSize from "@/app/hooks/useDeviceSize";

const CatalogFilterList = () => {

    const arrTest = ['Suzuki', 'ОАЭ','Suzuki', 'ОАЭ']

    const [width] = useDeviceSize()

    return (
        <div className={'catalogFilterList'}>
            <ul className={'catalogFilterListItemsList'}>
                {
                    width < 820 && <CatalogFiltersMobil/>
                }
                {
                    arrTest.map((item, index) => (
                        <li className={'catalogFilterListItem'} key={index}>
                            {item}
                            <span>
                            <Image src={close} alt={'close'}/>
                        </span>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default CatalogFilterList;