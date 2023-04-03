import { FC, ReactNode } from "react";
import Button from '@/components/buttons/Button';
import { MdGrading } from 'react-icons/md';
import { MdPerson } from 'react-icons/md';
import { MdShoppingCart } from 'react-icons/md';
import { MdFavorite } from 'react-icons/md';
import { MdRemove } from 'react-icons/md';


interface NavbarProps {
    children?: ReactNode,
    logo?: ReactNode,
    type_navbar?: string,
    type_counter?: string,
}

const Navbar: FC<NavbarProps> = ({ logo, children, type_navbar }) => {
    return <div className={`${type_navbar ? 'navbar-' + type_navbar : 'nav'}`}>

        <div className="d-flex justify-content-between">
            {logo}
            <ul className="navbar">
                <li className="nav-item-my mx-3 active"><a className="nav-link" href="">Главная</a></li>
                <li className="nav-item-my mx-3"><a className="nav-link" href="">О Компании</a></li>
                <li className="nav-item-my mx-3"><a className="nav-link" href="">Контакты</a></li>
                <li className="nav-item-my mx-3"><a className="nav-link" href="">Доставка и оплата</a></li>
                <li className="nav-item-my mx-3"><a className="nav-link" href="">Как заказать</a></li>
            </ul>
            <div className="d-flex align-items-center justify-content-end">
                <div className="mx-3 font-size-16-gray"><span>+7 (495) 984-41-06</span></div>
                <Button type_btn={"small-gray"}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="20" height="20" rx="2" fill="white" />
                        <mask id="mask0_2581_46461" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                            <rect x="0.25" y="0.25" width="19.5" height="19.5" rx="9.75" fill="white" stroke="white" stroke-width="0.5" />
                        </mask>
                        <g mask="url(#mask0_2581_46461)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 13.3333H20V6.66663H0V13.3333Z" fill="#0C47B7" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 20H20V13.3334H0V20Z" fill="#E53B35" />
                        </g>
                    </svg>

                    <span className="font-size-16-gray mx-2">RU</span>
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.78409 0.325883L7.66969 3.21148C8.37159 3.91338 7.88137 5.11664 6.88979 5.11664H1.1186C0.127024 5.11664 -0.374334 3.91338 0.327568 3.21148L3.21316 0.325883C3.64768 -0.108628 4.34958 -0.108628 4.78409 0.325883ZM3.21591 13.4334L0.330314 10.5478C-0.371588 9.84588 0.118629 8.64262 1.11021 8.64262H6.8814C7.87298 8.64262 8.37433 9.84588 7.67243 10.5478L4.78684 13.4334C4.35232 13.8679 3.65042 13.8679 3.21591 13.4334Z" fill="#969696" />
                    </svg>

                </Button>
            </div>
        </div>
        <div className="d-flex justify-content-between align-items-end mt-2">
            <Button icon={<MdGrading />} type_btn="catalog-blue">Каталог</Button>

            <form className=" d-flex mx-3">
                <input className="input-find mr-sm-2" type="search" placeholder="Поиск" aria-label="Search" />
                <Button type_btn="find-blue">Найти</Button>
            </form>
            <div className="d-flex">
                <div className="mx-1">
                    <Button icon={<MdPerson />} type_btn={"gray"}>Войти</Button>
                </div>
                <div className="mx-1">
                    <Button icon={<MdFavorite />} type_btn={"small-gray"}></Button>
                </div>
                <div className="mx-1">
                    <Button icon={<MdShoppingCart />} type_btn={"gray"} counter={0} type_counter={"up"}>Корзина</Button>
                </div>
            </div>
        </div>
    </div>
}

export default Navbar;


