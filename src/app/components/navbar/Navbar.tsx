"use client";

import Link from "next/link";
import Image from "next/image";
import logoNavbar from '../../../public/image/navbar/logoNavbar.svg'
import React, {useState} from "react";
import Input from "@/app/ui/Input";
import Checkbox from "@/app/ui/Checkbox";

import menu from '@/public/image/navbar/menu.svg'
import phone from '@/public/image/navbar/phone.svg'

const Navbar = () => {

    const [modal, setModal] = useState(false)

    const onOpen = () => {
        setModal(true)
        document.body.classList.add('no-scroll')
    }

    const onClose = () => {
        setModal(false)
        document.body.classList.remove('no-scroll');
    }

    return (
        <header className={'navbarHeader'}>
            <nav>
                <ul>
                    {
                        window.screen.width < 820 ? (
                            <button className={'iconButton'}>
                                <Image src={phone} alt={'phone'}/>
                            </button>
                        ) : (
                            <>
                                <li><Link href={'/catalog'} className={'navbarHeaderLink'}>Выбрать авто</Link></li>
                                <li><Link href={'/catalog'} className={'navbarHeaderLink'}>Как мы работаем</Link></li>
                            </>
                        )
                    }


                </ul>
                <ul>
                    <li><Image src={logoNavbar} alt={'logo'}/></li>
                </ul>
                <ul>
                    {
                        window.screen.width < 820 ? (
                            <button className={'iconButton'}>
                                <Image src={menu} alt={'menu'}/>
                            </button>
                        ) : (
                            <>
                                <li><Link href={'/catalog'} className={'navbarHeaderLink'}>Отзывы</Link></li>
                                <li><Link href={'/catalog'} className={'navbarHeaderLink'}>Контакты</Link></li>
                                <li>
                                    <button onClick={onOpen}>Заявка</button>
                                </li>
                            </>
                        )
                    }
                </ul>
            </nav>
            {
                modal && (
                    <div className={'navbarModalBg'} onClick={onClose}>
                        <form action="" className={'navbarModal'} onClick={(e) => e.stopPropagation()}>
                            <h4>Получиться предложение</h4>
                            <Input type={'text'} label={'Имя'}/>
                            <Input type={'tel'} label={'Телефон'}/>
                            <label className={'inputLabel'}>Комментарий</label>
                            <textarea></textarea>
                            <Checkbox
                                item={'Нажимая кнопку «Получить предложение»,  Вы соглашаетесь с Политикой защиты данных ООО «МайБроАвторус»'}
                            />
                            <button>
                                Отправить
                            </button>
                        </form>
                    </div>
                )
            }
        </header>
    );
};

export default Navbar;