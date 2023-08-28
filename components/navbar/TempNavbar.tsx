import Image from "next/image";
import Link from "next/link";
import { FC, ReactNode, RefObject } from "react";
import { MdFavorite, MdOutlineShoppingBasket, MdPerson, MdShoppingCart, MdUnfoldMore } from "react-icons/md";
import Button from "../buttons/Button";


interface TempNavbarProps {
    catalog: ReactNode,
    search: ReactNode,
    hook: RefObject<HTMLDivElement>,
    onBasket?: () => void,
    onLogin?: () => void,
    onFavorite?: () => void,
    basketCounter: number,
}

const TempNavbar: FC<TempNavbarProps> = ({ catalog, hook, onBasket, onLogin, onFavorite, basketCounter, search }) => {


    return <div ref={hook} className="p-3 sticky-top zindex-offcanvas bg-white header-shadow border-bottom" style={{ top: 0 }}>

        {/* <div className="row align-items-center mb-3">
            <div className="col-3">
                <Link href="/">
                    <Image width={200} height={70} src="/kit/logo.svg" alt="logo" />
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

   
            </div>
        </div> 
    */}

        <div className="d-flex  gap-3 mb-3 align-items-stretch position-relative" >

            <Link href="/">
                <Image width={100} height={50} src="/kit/logo.svg" alt="logo" />
            </Link>

            <div className="d-flex align-items-stretch" style={{width: 200}}>
                {
                    catalog
                }
            </div>
            {
                search
            }
            <Button
                onClick={onBasket}
                fontSize="20px"
                counterPosition="right"
                icon={<MdOutlineShoppingBasket size={24} fill={'#969696'} />}
                btn_style="btn-outline-secondary"
                counter={basketCounter}>
                Корзина
            </Button>
        </div>

    </div >
}

export default TempNavbar;