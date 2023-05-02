import { FC, ReactNode } from "react";
import Button from '../buttons/Button';
import { MdRemove } from 'react-icons/md';
import { MdAdd } from 'react-icons/md';
import { Md3DRotation } from 'react-icons/md';
import { MdPictureAsPdf } from 'react-icons/md';
import { MdCheckCircle } from 'react-icons/md';
import { MdAddComment } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';
import { MdKeyboardArrowDown } from 'react-icons/md';
import ButtonCounter from "../buttons/ButtonCounter";
import BreadCrumbs from "../breadСrumbs/BreadCrumbs";
import { IBreadСrumbs } from '../breadСrumbs/interface'
import ButtonGrayAddRemove from "../buttons/ButtonGrayAddRemove";

interface encoding {
    prop: string,
    param: string
}

interface CartItemProps {
    children?: ReactNode,
    icon?: ReactNode,
    btn_style?: string,
    count?: number,
    name_item: string,
    list: IBreadСrumbs[],
    props_list: encoding[],
    price: number,
}


const CartItem: FC<CartItemProps> = ({ children, props_list, btn_style, list, count, name_item, price }) => {
    return <div className="d-flex">

        <div className="d-flex flex-column mx-1 justify-content-center me-2">
            <button onClick={() => alert(123)} className="border-0 bg-white"><MdOutlineKeyboardArrowUp fill="#969696" /></button>
            <span className="ms-2 my-2">1</span>
            <button onClick={() => alert(123)} className="border-0 bg-white"><MdKeyboardArrowDown fill="#969696" /></button>
        </div>
        <img src="kit/cart_item.png" alt="PRODUCT LOGO" />

        <div className="d-flex flex-column flex-grow-1 ms-3 gap-2 py-1">
            <div className="row">
                <div className="col-5">
                    <a className="text-decoration-none" style={{ color: '#585757', fontSize: '16px', fontWeight: '400' }} href={'/'}>Продукция / </a>
                    <a className="text-decoration-none" style={{ color: '#585757', fontSize: '16px', fontWeight: '400' }} href={'/'}>Продукция / </a>
                    <a className="text-decoration-none" style={{ color: '#585757', fontSize: '16px', fontWeight: '400' }} href={'/'}>Продукция</a>
                    <br />
                    <span className="font-size-20 fw-500">H1B-H-6M</span>
                </div>
                <div className="d-flex col gap-3">
                    <div className="d-flex align-items-center gap-1">
                        <Button onClick={() => {
                            alert(123)
                        }} icon={<MdCheckCircle size={20} fill={'gray'} />} btn_style="btn-outline-secondary"></Button>
                        <Button onClick={() => alert(123)} icon={<MdAddComment size={20} fill={'gray'} />} btn_style="btn-outline-secondary"></Button>
                    </div>
                    <div className="d-flex align-items-center gap-1">
                        <Button onClick={() => alert(123)} icon={<Md3DRotation size={20} fill={'gray'} />} btn_style="btn-outline-secondary"></Button>
                        <Button onClick={() => alert(123)} icon={<MdPictureAsPdf size={20} fill={'gray'} />} btn_style="btn-outline-secondary"></Button>
                    </div>
                    <div className="d-flex align-items-center gap-1">
                        <ButtonGrayAddRemove btn_class="my-btn-small-gray-h40" counter={1} onClickRemove={() => alert(123)} onClickAdd={() => alert(123)} />
                        <Button onClick={() => alert(123)} icon={<MdDelete size={20} fill={'gray'} />} btn_style="btn-outline-secondary"></Button>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-3">
                    <span className="font-size-13">Давление</span> <br />
                    <span className="font-size-16-black fw-500">до 207 бар при 21°C</span>
                </div>
                <div className="col-3">
                    <span className="font-size-13">Давление</span> <br />
                    <span className="font-size-16-black fw-500">до 207 бар при 21°C</span>
                </div>
                <div className="col-3">
                    <span className="font-size-13">Давление</span> <br />
                    <span className="font-size-16-black fw-500">до 207 бар при 21°C</span>
                </div>
                <div className="d-flex flex-column col-2 justify-content-end align-items-end mr-2">
                    <span className="font-size-13 mb-1">Итого</span>
                    <span className="font-size-16-black fw-500">$216</span>
                </div>
            </div>

        </div >
    </div>

}

export default CartItem;