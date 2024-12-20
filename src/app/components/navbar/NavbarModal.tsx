"use client"

import {useEffect, useState} from 'react';
import FormApplication from "@/app/components/FormApplication";


type Props = {
    isOpen: boolean;
    onClose: () => void;
}

const NavbarModal = ({isOpen, onClose}: Props) => {

    const [modal, setModal] = useState(false)

    useEffect(() => {
        if (isOpen) {
            setModal(true)
            console.log('no scroll')
            document.body.style.overflowY = 'hidden';
        } else {
            setModal(false)
            console.log('scroll')
            document.body.style.overflowY = 'auto';
        }
    }, [isOpen]);


    const handleClose = () => {
        setModal(false)
        document.body.style.overflowY = 'hidden';
        onClose()
    }

    return (
        modal && (
            <div className={'navbarModalBg'} onClick={handleClose}>
                <div className="navbarModal">
                    <FormApplication/>
                </div>
            </div>
        )
    );
};

export default NavbarModal;