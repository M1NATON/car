import React, {useState} from 'react';

import options from '@/public/image/catalog/options.svg'
import close from '@/public/image/catalog/close.svg'
import Image from "next/image";
import CatalogFilters from "@/app/catalog/CatalogFilters";

const CatalogFiltersMobil = () => {

    const [modal, setModal] = useState(false)


    return (
        <div className={'catalogFiltersMobil'}>

            <button className={'catalogFilterBtn'} onClick={() => setModal(true)}>
                <Image src={options} alt={'options'}/>
                <span>Фильтры</span>
            </button>

            {
                modal && (
                    <div className={'catalogFiltersMobilModal'}>
                        <button onClick={() => setModal(false)} className={'catalogFiltersMobilModalClose iconButton'}>
                            <Image src={close} width={12} height={12} alt={'close'}/>
                        </button>
                        <div className={'catalogFiltersMobilModalBody'}>
                            <CatalogFilters/>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default CatalogFiltersMobil;