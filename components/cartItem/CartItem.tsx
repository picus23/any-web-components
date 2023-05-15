import { FC, ReactNode } from "react";
import Button from '../buttons/Button';
import { Md3DRotation } from 'react-icons/md';
import { MdPictureAsPdf } from 'react-icons/md';
import { MdCheckCircle } from 'react-icons/md';
import { MdAddComment } from 'react-icons/md';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';
import { MdKeyboardArrowDown } from 'react-icons/md';
import BreadCrumbs from "../breadСrumbs/BreadCrumbs";
import { IBreadСrumbs, NextUrl } from '../breadСrumbs/interface';
import MainBasketEraceTimer from "../basket/MainBasketEraceTimer";
import Image from "next/image";

interface encoding {
    title: string,
    value: string
}

interface CartItemProps {
    pagetitle: string,
    props?: encoding[],
    breadCrumbs: IBreadСrumbs[],
    breadCrumbsRoute?: (url: string) => NextUrl,
    imgUrl: string,
    BasketButton: ReactNode,
    price?: number,
    index?: number
    count?: number,
    icon?: ReactNode,
    btn_style?: string,
    onClick?: () => void,
    isDelete?: false | number,

    onCancelErace: () => void,
}


const CartItem: FC<CartItemProps> = ({ BasketButton, props, btn_style, breadCrumbs, breadCrumbsRoute, count, imgUrl, price, onClick, pagetitle, index, onCancelErace, isDelete }) => {



    return <>
        <div className="d-flex position-relative">
            {
                isDelete && <MainBasketEraceTimer onClick={onCancelErace} timerWidth={isDelete >= 0 && isDelete <=100 ? isDelete : false}  />
            }

            <div className="d-flex flex-column mx-1 justify-content-center me-2">
                <button onClick={() => alert('Click')} className="border-0 bg-transparent"><MdOutlineKeyboardArrowUp fill="#969696" /></button>
                <span className="ms-2">{index}</span>
                <button onClick={() => alert('Click')} className="border-0 bg-transparent"><MdKeyboardArrowDown fill="#969696" /></button>
            </div>
            <Image src={imgUrl} alt="PRODUCT LOGO" width={100} height={100} />

            <div className="d-flex flex-column flex-grow-1 ms-3 gap-2 py-1">
                <div className="row">
                    <div className="col-4">
                        <BreadCrumbs list={breadCrumbs} route={breadCrumbsRoute} />
                        <span className="font-size-20 fw-500">{pagetitle}</span>
                    </div>
                    <div className="d-flex col gap-3">
                        <div className="d-flex align-items-center gap-1">
                            <Button onClick={() => alert('Click')} icon={<MdCheckCircle size={20} fill={'#969696'} />} btn_style="btn-outline-secondary"></Button>
                            <Button onClick={() => alert('Click')} icon={<MdAddComment size={20} fill={'#969696'} />} btn_style="btn-outline-secondary"></Button>
                        </div>
                        <div className="d-flex align-items-center gap-1">
                            <Button onClick={() => alert('Click')} icon={<Md3DRotation size={20} fill={'#969696'} />} btn_style="btn-outline-secondary"></Button>
                            <Button onClick={() => alert('Click')} icon={<MdPictureAsPdf size={20} fill={'#969696'} />} btn_style="btn-outline-secondary"></Button>
                        </div>
                        <div className="d-flex align-items-center gap-1">
                            {BasketButton}
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="d-flex col-9">
                        {props
                            ? props.map(el => {
                                return <div key={el.title} className="col">
                                    <span className="font-size-13">{el.title}</span> <br />
                                    <span className="font-size-16-black fw-500">{el.value}</span>
                                </div>
                            })
                            : false
                        }
                    </div>
                    <div className="d-flex flex-column col-3 justify-content-end align-items-center mr-2">
                        <span className="font-size-13 mb-1">Итого</span>
                        <span className="font-size-16-black fw-500">$ {price}</span>
                    </div>
                </div>

            </div >

        </div>
    </>

}

export default CartItem;