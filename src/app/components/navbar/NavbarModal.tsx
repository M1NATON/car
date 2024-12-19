import React, {useEffect, useState} from 'react';
import FormApplication from "@/app/components/FormApplication";


type Props = {
    isOpen: boolean;
    onClose: () => void;
}

const NavbarModal = ({isOpen, onClose}: Props) => {

    const [modal, setModal] = useState(false)

    useEffect(() => {
        if(isOpen) {
            setModal(true)
            document.body.classList.add('no-scroll');
        } else {
            setModal(false)
            document.body.classList.remove('no-scroll');
        }


        return () => {
            setModal(false)
            document.body.classList.remove('no-scroll');
        }
    }, [isOpen]);

    const handleClose = () => {
        setModal(false)
        document.body.classList.remove("no-scroll");
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