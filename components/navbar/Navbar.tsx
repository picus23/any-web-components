import { FC, ReactNode } from "react";
import Button from '@/components/buttons/Button';
import { MdOutlineMenuOpen } from 'react-icons/md';
import { MdPerson } from 'react-icons/md';
import { MdShoppingCart } from 'react-icons/md';
import { MdFavorite } from 'react-icons/md';
import { MdRemove } from 'react-icons/md';
import { MdOutlineUnfoldMore } from 'react-icons/md';


interface NavbarProps {
    children?: ReactNode,
    logo?: ReactNode,
    type_navbar?: string,
    type_counter?: string,
}

const Navbar: FC<NavbarProps> = ({ logo, children, type_navbar }) => {
    return <div className={`${type_navbar ? 'navbar-' + type_navbar : 'nav'}`}>

        <div className="row justify-content-between">
            <div className="col-2">
                <img src="/img/logo.png" alt="" />
            </div>
            <ul className="navbar col-5">
                <li className="nav-item-my active"><a className="nav-link" href="">Главная</a></li>
                <li className="nav-item-my"><a className="nav-link" href="">О Компании</a></li>
                <li className="nav-item-my"><a className="nav-link" href="">Контакты</a></li>
                <li className="nav-item-my"><a className="nav-link" href="">Доставка и оплата</a></li>
                <li className="nav-item-my"><a className="nav-link" href="">Как заказать</a></li>
            </ul>
            <div className="d-flex align-items-center justify-content-end col-3 gap-3">
                <div className="font-size-16-gray "><span>+7 (495) 984-41-06</span></div>
                <Button type_btn={"small-gray"}>
                    <img src="/img/ru.svg" alt="" />
                    <span className="font-size-16-gray mx-1">RU</span>
                    <MdOutlineUnfoldMore />
                </Button>
            </div>
        </div>
        <div className="d-flex align-items-end justify-content-between gap-3">
            <Button icon={<MdOutlineMenuOpen />} type_btn="catalog-blue">Каталог</Button>
            <form className=" d-flex">
                <input className="input-find" type="search" placeholder="Поиск" aria-label="Search" />
                <Button type_btn="find-blue">Найти</Button>
            </form>
            <div className="d-flex justify-content-end gap-2">
                <Button icon={<MdPerson fill={'gray'} />} type_btn={"gray"}><span className="fw-500">Войти</span></Button>
                <Button icon={<MdFavorite fill={'gray'} />} type_btn={"small-gray"}></Button>
                <div className="position-relative">
                <Button icon={<MdShoppingCart fill={'gray'} />} type_btn={"gray"} counter={0} type_counter={"up"}><span className="fw-500">Корзина</span></Button>
                </div>
            </div>
        </div>
    </div>
}

export default Navbar;


