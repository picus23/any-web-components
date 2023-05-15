import Image from "next/image";
import Link from "next/link";
import { FC, ReactNode, RefObject } from "react";
import { MdFavorite, MdPerson, MdShoppingCart, MdUnfoldMore } from "react-icons/md";
import Button from "../buttons/Button";


interface TempNavbarProps {
    catalog: ReactNode,
    hook: RefObject<HTMLDivElement>,
    onBasket: () => void,
    onLogin: () => void,
    onFavorite: () => void,
    basketCounter: number,
}

const TempNavbar: FC<TempNavbarProps> = ({ catalog, hook, onBasket, onLogin, onFavorite, basketCounter }) => {
    return <div ref={hook} className="p-3 sticky-top zindex-offcanvas bg-white header-shadow border-bottom">

        <div className="row align-items-center mb-3">
            <div className="col-3">
                <Link href="/">
                    <Image width={200} height={70} src="/kit/logo.png" alt="logo" />
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

                            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{fontSize:'16px',color:'#585757'}}>
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



            <div className="col-3 justify-content-end d-flex gap-3 align-items-center">

                <a className="text-decoration-none font-size-16-gray" href="#Какзаказать">+7 (945) 984-41-06</a>


                <button className="btn btn-outline-secondary d-flex gap-2">
                    <Image width={20} height={20} src="/kit/ru.svg" alt="lang icon"/>
                    <span className="font-size-16-gray mx-1">RU</span>
                    <MdUnfoldMore size={23} fill="#969696" />
                </button>

            </div>






        </div>


        <div className="row mb-3 align-items-stretch position-relative" style={{ height: 50 }}>
            <div className="d-flex align-items-stretch " style={{ maxWidth: '256px' }} id="catalog">

                {
                    catalog
                }
            </div>
            <div className="col d-flex align-items-stretch me-4" id="search">
                <div className="input-group " >
                    <input type="text" className="form-control border border-primary" placeholder="Поиск" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <Button
                        btn_style="btn-primary"
                        >
                        Найти
                    </Button>
                </div>
            </div>
            <div className="col-3 d-flex">
                <div className="d-flex gap-2 w-100 justify-content-end">
                    <Button
                        onClick={onLogin}
                        style={{ height: '52px' }}
                        fontSize="20px"
                        icon={<MdPerson size={24} fill={'#969696'} />}
                        btn_style="btn-outline-secondary">
                        Войти
                    </Button>
                    <Button
                        onClick={onFavorite}
                        style={{ height: '52px' }}
                        icon={<MdFavorite size={24} fill={'#969696'} />}
                        btn_style="btn-outline-secondary"
                    />
                    <Button
                        onClick={onBasket}
                        style={{ height: '52px' }}
                        fontSize="20px"
                        counterPosition="right"
                        icon={<MdShoppingCart size={24} fill={'#969696'} />}
                        btn_style="btn-outline-secondary"
                        counter={basketCounter}>
                        Корзина
                    </Button>
                </div>
            </div>
        </div>

    </div >
}

export default TempNavbar;