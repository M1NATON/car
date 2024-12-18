import React from 'react';
import close from '../../public/image/catalog/close.svg'
import Image from "next/image";
import CatalogFiltersMobil from "@/app/catalog/CatalogFiltersMobil";

const CatalogFilterList = () => {

    const arrTest = ['Suzuki', 'ОАЭ','Suzuki', 'ОАЭ']

    return (
        <div className={'catalogFilterList'}>
            <ul className={'catalogFilterListItemsList'}>
                {
                    window.screen.width < 820 && <CatalogFiltersMobil/>
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