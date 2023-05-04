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
                    <div className="font-size-16-gray "><a className="nav-link text-dark" href="#Какзаказать">+7 (495) 984-41-06</a></div>
                    <Button btn_style="btn-outline-secondary">
                        <img src="/kit/ru.svg" alt="" />
                        <span className="font-size-16-gray mx-1">RU</span>
                        <MdOutlineUnfoldMore />
                    </Button>
                </div>
            </div>
            <div className="d-flex align-items-end justify-content-between gap-3">
                <Button
                    icon={<MdOutlineMenuOpen size={24} />}
                    contentPosition="start"
                    style={{ width: '256px' }}>Каталог</Button>
                <div className="col d-flex align-items-stretch" id="search">
                    <div className="input-group " >
                        <input type="text" className="form-control border border-primary" placeholder="Поиск" aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <Button btn_style="btn-primary" style={{ width: '124px' }}>Найти</Button>
                    </div>
                </div>
                <div className="d-flex justify-content-end gap-2">
                    <Button
                        style={{ height: '52px' }}
                        fontSize="20px"
                        icon={<MdPerson size={24} fill={'#969696'} />}
                        btn_style="btn-outline-secondary">
                        Войти
                    </Button>
                    <Button
                        style={{ height: '52px' }}
                        icon={<MdFavorite size={24} fill={'#969696'} />}
                        btn_style="btn-outline-secondary"
                    />
                    <Button
                        style={{ height: '52px' }}
                        fontSize="20px"
                        counterPosition="right"
                        icon={<MdShoppingCart size={24} fill={'#969696'} />}
                        btn_style="btn-outline-secondary"
                        counter={0}>
                        Корзина
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;


