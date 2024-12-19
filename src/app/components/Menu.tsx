import {ReactNode} from 'react';
import Image from "next/image";
import close from "@/public/image/catalog/close.svg";


type Props = {
    inOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

const Menu = ({inOpen, onClose, children}:Props) => {

    return (
        <div className={'catalogFiltersMobil'}>
            {
                inOpen && (
                    <div className={'catalogFiltersMobilModal'}>
                        <button onClick={onClose} className={'catalogFiltersMobilModalClose iconButton'}>
                            <Image src={close} width={12} height={12} alt={'close'}/>
                        </button>
                        <div className={'catalogFiltersMobilModalBody'}>
                            {children}
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Menu;