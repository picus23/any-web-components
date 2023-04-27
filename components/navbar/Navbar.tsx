import { FC, ReactNode } from "react";
import Button from '../buttons/Button';
import { MdOutlineMenuOpen } from 'react-icons/md';
import { MdPerson } from 'react-icons/md';
import { MdFavorite } from 'react-icons/md';
import { MdShoppingCart } from 'react-icons/md';
import { MdOutlineUnfoldMore } from 'react-icons/md';


interface NavbarProps {
    children?: ReactNode,
    logo?: ReactNode,
    type_navbar?: string,
    type_counter?: string,
}

const Navbar: FC<NavbarProps> = ({ logo, children, type_navbar }) => {
    return (
        <div className="navbar-my">
            <div className="row justify-content-between">
                <div className="col-2">
                    <img src="/kit/logo.png" alt="" />
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
                    <Button isGray={true}>
                        <img src="/kit/ru.svg" alt="" />
                        <span className="font-size-16-gray mx-1">RU</span>
                        <MdOutlineUnfoldMore />
                    </Button>
                </div>
            </div>
            <div className="d-flex align-items-end justify-content-between gap-3">
                <Button icon={<MdOutlineMenuOpen size={24} />} isGray={false} class_name="py-2 rounded-2" style={{width:'256px'}}>Каталог</Button>
                <form className=" d-flex">
                    <input className="input-find" style={{width:'613px'}} type="search" placeholder="Поиск" aria-label="Search" />
                    <Button isGray={false} class_name="justify-content-center" style={{width:'124px',borderRadius:'0 8px 8px 0'}}>Найти</Button>
                </form>
                <div className="d-flex justify-content-end gap-2">
                    <Button class_name="py-2" icon={<MdPerson size={24} fill={'#969696'} />} isGray={true}><span className="fw-500">Войти</span></Button>
                    <Button icon={<MdFavorite size={24} fill={'#969696'} />} isGray={true}></Button>
                    <Button isCounterUp={true} icon={<MdShoppingCart size={24} fill={'#969696'} />} isGray={true} counter={0} counter_style={"up"}><span className="fw-500">Корзина</span></Button>
                    {/* <Button isCounterUp={true} icon={<MdShoppingCart size={24} fill={'#969696'} />} btn_style={"gray"} counter={0} counter_style={"up"}><span className="fw-500">Корзина</span></Button> */}
                </div>
            </div>
        </div>
    )
}

export default Navbar;


