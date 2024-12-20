import Link from "next/link";
import Image from "next/image";
import logoNavbar from "@/public/image/navbar/logoNavbar.svg";

type Props = {
    onCLose?: () => void;
}

const NavbarMenu = ({onCLose}:Props) => {


    return (
        <>
            <div className={'navbarMenuLogo'}>
                <Image  src={logoNavbar} alt={'logo'}/>
            </div>
            <ul className={'navbarMenu'}>
                <li><Link href={'/catalog'} onClick={onCLose}>Выбрать авто</Link></li>
                <li><Link href={'/frequentlyAskedQuestions'} onClick={onCLose}>Как мы работаем</Link></li>
                <li><Link href={'/feedback'} onClick={onCLose}>Отзывы</Link></li>
                <li><Link href={'/catalog'} onClick={onCLose}>Контакты</Link></li>
            </ul>
        </>

    );
};

export default NavbarMenu;