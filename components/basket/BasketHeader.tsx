import { FC, useEffect } from "react";
import Button from "../buttons/Button";
import { MdClose } from "react-icons/md";

interface BasketHeaderProps {
    onClick?: () => void,
}

const BasketHeader: FC<BasketHeaderProps> = ({ onClick }) => {
    useEffect(() => {
        const basketHeader: HTMLElement = document.querySelector('#basket-header') as HTMLElement;
        const position = basketHeader?.offsetTop

        window.addEventListener('scroll', function () {
            if (position < basketHeader?.offsetTop) {
                basketHeader.style.boxShadow = '0px 11px 15px rgba(0, 0, 0, 0.1), 0px 9px 46px rgba(0, 0, 0, 0.06), 0px 24px 38px rgba(0, 0, 0, 0.04)';
            } else {
                basketHeader.style.boxShadow = '';
            }
        })
    }, [])

    return <>
        <div
            id="basket-header"
            className="d-flex justify-content-between align-items-center sticky-top bg-white py-2 px-3"
        >
            <span style={{ fontSize: '16px', fontWeight: 500 }}>Ваша корзина</span>
            <Button
                onClick={onClick}
                icon={<MdClose size={20} fill={'#969696'} />}
                btn_style="btn-outline-secondary">
                <span style={{ fontSize: '16px', fontWeight: 500 }}>Закрыть</span>
            </Button>
        </div>
    </>
}

export default BasketHeader;