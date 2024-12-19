import {useState} from 'react';

import options from '@/public/image/catalog/options.svg'
import Image from "next/image";
import CatalogFilters from "@/app/catalog/CatalogFilters";
import Menu from "@/app/components/Menu";

const CatalogFiltersMobil = () => {

    const [modal, setModal] = useState(false)

    const onOpen = () => {
        setModal(true)
    }

    const onClose = () => {
        setModal(false)
    }

    return (
        <div className={'catalogFiltersMobil'}>

            <button className={'catalogFilterBtn'} onClick={onOpen}>
                <Image src={options} alt={'options'}/>
                <span>Фильтры</span>
            </button>

            <Menu onClose={onClose} inOpen={modal}>
                <CatalogFilters/>
            </Menu>
        </div>
    );
};

export default CatalogFiltersMobil;