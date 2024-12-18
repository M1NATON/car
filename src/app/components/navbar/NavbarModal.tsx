import React, {useEffect, useState} from 'react';
import Input from "@/app/ui/Input";
import Checkbox from "@/app/ui/Checkbox";


type Props = {
    isOpen: boolean;

}

const NavbarModal = ({isOpen}: Props) => {

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

    const onClose = () => {
        setModal(false)
        document.body.classList.remove("no-scroll");
    }

    return (
        modal && (
            <div className={'navbarModalBg'} onClick={onClose}>
                <form action="" className={'navbarModal'} onClick={(e) => e.stopPropagation()}>
                    <h4>Получиться предложение</h4>
                    <Input type={'text'} label={'Имя'}/>
                    <Input type={'tel'} label={'Телефон'}/>
                    <label className={'inputLabel'}>Комментарий</label>
                    <textarea ></textarea>
                    <Checkbox
                        item={'Нажимая кнопку «Получить предложение»,  Вы соглашаетесь с Политикой защиты данных ООО «МайБроАвторус»'}
                    />
                    <button>
                        Отправить
                    </button>
                </form>
            </div>
        )
    );
};

export default NavbarModal;