import Link from "next/link";
import { FC, ReactNode, RefObject } from "react";
import { MdFavorite, MdMenuOpen, MdOutlineFavorite, MdPerson, MdShoppingCart, MdUnfoldMore } from "react-icons/md";
import Button from "../buttons/Button";


interface TempNavbarProps {
    catalog: ReactNode,
    hook: RefObject<HTMLDivElement>,
    basket: ReactNode,
    login: ReactNode,
    favorite: ReactNode,
}

const TempNavbar: FC<TempNavbarProps> = ({ catalog, hook, basket, login, favorite }) => {
    return <div ref={hook} className="p-3 sticky-top zindex-offcanvas bg-white header-shadow border-bottom">

        <div className="row align-items-center mb-3">
            <div className="col-3">
                <Link href="/">
                    <img src="/kit/logo.png" alt="logo" />
                </Link>
            </div>




            <div className="col">


                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-xxl-fluid">
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" href="/">Главная</Link >
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" href="/about">О компании</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" href="/contacts">Контакты</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" href="/delivery">Доставка и оплата</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" href="/howtoorder">Как заказать</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>





            <div className="col-3 justify-content-end d-flex gap-4 align-items-center">

                <a className="nav-link text-dark" href="#Какзаказать">+7 (945) 984-41-06</a>


                <button className="btn btn-outline-secondary d-flex gap-2">
                    <img src="/kit/ru.svg" /> RU
                    <MdUnfoldMore size={23} />
                </button>

            </div>






        </div>


        <div className="row mb-3 align-items-stretch position-relative" style={{ height: 50 }}>
            <div className="col-3 d-flex align-items-stretch " id="catalog">
                {/* <button className="btn btn-primary w-100 d-flex justify-content-start fo align-items-center gap-3 fs-5" >
                    <MdMenuOpen size={24}/>
                    <div className="span">Каталог</div>
                </button> */}
                {
                    catalog
                }
            </div>
            <div className="col d-flex align-items-stretch" id="search">
                <div className="input-group " >
                    <input type="text" className="form-control border border-primary" placeholder="Поиск" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button className="btn btn-primary px-5" type="button" id="button-addon2" >
                        Найти
                    </button>
                </div>
            </div>
            <div className="col-3 d-flex align-items-stretch">
                <div className="d-flex gap-2 w-100">
                    {login}

                    {/* <button className="btn btn-outline-secondary grow pe-4">
                        <MdPerson size={22} color="#969696" className="me-2"/>
                        Войти
                    </button> */}

                    {favorite}


                    {basket}
                    
                    {/* <button type="button" className="btn btn-outline-secondary position-relative pe-4">
                        <MdShoppingCart size={22} color="#969696" className="me-2" />
                        Корзина
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                            0
                            <span className="visually-hidden">unread messages</span>
                        </span>
                    </button> */}




                </div>
            </div>
        </div>

    </div >
}

export default TempNavbar;