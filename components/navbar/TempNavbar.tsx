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


    return <div ref={hook} className="sticky-top zindex-offcanvas bg-white header-shadow border-bottom" style={{ padding: 20, top: 0 }}>


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