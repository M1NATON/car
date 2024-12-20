"use client";

import Link from "next/link";
import Image from "next/image";
import logoNavbar from '../../../public/image/navbar/logoNavbar.svg'
import {useState} from "react";
import menuImg from '@/public/image/navbar/menu.svg'
import phoneImg from '@/public/image/navbar/phone.svg'
import NavbarModal from "@/app/components/navbar/NavbarModal";
import Menu from "@/app/components/Menu";
import NavbarMenu from "@/app/components/navbar/NavbarMenu";
import useDeviceSize from "@/app/hooks/useDeviceSize";

const Navbar = () => {

    const [modal, setModal] = useState(false)
    const [menu, setMenu] = useState(false)
    const [width] = useDeviceSize()

    const onOpen = (type: string) => {
        switch (type) {
            case "menu":
                setMenu(true)
                document.body.classList.add('no-scroll')
                break
            case 'modal':
                setModal(true)
                document.body.classList.add('no-scroll')
                break
            default:
                break
        }
    }

    const onClose = (type: string) => {
        switch (type) {
            case "menu":
                setMenu(false)
                document.body.classList.remove('no-scroll')
                break
            case 'modal':
                setModal(false)
                document.body.classList.remove('no-scroll')
                break
            default:
                break
        }
    }

    return (
        <header className={'navbarHeader'}>
            <nav>
                <ul>
                    {
                        width < 820 ? (
                            <button className={'iconButton'}>
                                <Image src={phoneImg} alt={'phone'}/>
                            </button>
                        ) : (
                            <>
                                <li><Link href={'/catalog'} className={'navbarHeaderLink'}>Выбрать авто</Link></li>
                                <li><Link href={'/frequentlyAskedQuestions'} className={'navbarHeaderLink'}>Как мы
                                    работаем</Link></li>
                            </>
                        )
                    }

                </ul>
                <ul>
                    <li><Image src={logoNavbar} alt={'logo'}/></li>
                </ul>
                <ul>
                    {
                        width < 820 ? (
                            <button onClick={() => onOpen('menu')} className={'iconButton'}>
                                <Image src={menuImg} alt={'menu'}/>
                            </button>
                        ) : (
                            <>
                                <li><Link href={'/feedback'} className={'navbarHeaderLink'}>Отзывы</Link></li>
                                <li><Link href={'/catalog'} className={'navbarHeaderLink'}>Контакты</Link></li>
                                <li>
                                    <button onClick={() => onOpen('modal')}>Заявка</button>
                                </li>
                            </>
                        )
                    }
                </ul>
            </nav>
            {
                modal && (
                    <NavbarModal isOpen={modal} onClose={() => onClose('modal')}/>
                )
            }
            {
                menu && (
                    <Menu onClose={() => onClose('menu')} inOpen={menu}>
                        <NavbarMenu onCLose={() => onClose('menu')}/>
                    </Menu>
                )
            }
        </header>
    );
};

export default Navbar;