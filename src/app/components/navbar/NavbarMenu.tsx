import React from 'react';
import Link from "next/link";

const NavbarMenu = () => {


    return (
        <ul className={'navbarMenu'}>
            <li><Link href={'/catalog'}>Выбрать авто</Link></li>
            <li><Link href={'/catalog'}>Как мы работаем</Link></li>
            <li><Link href={'/catalog'}>Отзывы</Link></li>
            <li><Link href={'/catalog'}>Контакты</Link></li>
        </ul>
    );
};

export default NavbarMenu;