import { FC, ReactNode } from "react";
import Button from '@/components/buttons/Button';
import { MdRemove } from 'react-icons/md';
import { MdAdd } from 'react-icons/md';
import { Md3DRotation } from 'react-icons/md';
import { MdPictureAsPdf } from 'react-icons/md';
import { MdCheckCircle } from 'react-icons/md';
import { MdAddComment } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';
import { MdKeyboardArrowDown } from 'react-icons/md';
import Button_with_imgs from "../buttons/Button_with_imgs";


interface CartItemProps {
    children?: ReactNode,
    icon?: ReactNode,
    type_btn?: string,
    type_counter?: string,
    count?: number,
    name_item: string,
}

const CartItem: FC<CartItemProps> = ({ children, icon, type_btn, type_counter, count, name_item }) => {
    return <div className="d-flex border border-dark">

        <div className="d-flex flex-column mx-1 justify-content-evenly me-2">
            <MdOutlineKeyboardArrowUp />
            <span className="mx-1">{count}</span>
            <MdKeyboardArrowDown />
        </div>
        <img src="/img/cart_item.png" alt="" />

        <div className="d-flex flex-column flex-grow-1 ms-3 gap-2 py-1">
            <div className="d-flex">
                <div className="col-4">
                    <span className="font-size-13">Продукция /</span>
                    <span className="font-size-13"> Клапаны /</span>
                    <span className="font-size-13"> Шаровые краны</span>
                    <br />
                    <span className="font-size-20 fw-500">{name_item}</span>
                </div>
                <div className="d-flex col-4 gap-3">
                    <div className="action-group">
                        <Button icon={<MdCheckCircle size={20} fill={'gray'}/>} type_btn="small-gray"></Button>
                        <Button icon={<MdAddComment size={20} fill={'gray'} />} type_btn="small-gray"></Button>
                    </div>
                    <div className="action-group">
                        <Button icon={<Md3DRotation size={20} fill={'gray'} />} type_btn="small-gray"></Button>
                        <Button icon={<MdPictureAsPdf size={20} fill={'gray'} />} type_btn="small-gray"></Button>
                    </div>
                    <div className="action-group">
                        <Button_with_imgs icon={<MdRemove  size={20} fill={'gray'}/>} icon2={<MdAdd size={20} fill={'gray'} />} class_name={'font-size-16-gray'} counter={1} type_btn="with-imgs"></Button_with_imgs>
                        <Button_with_imgs icon={<MdDelete size={20} fill={'gray'} />} type_btn="small-gray"></Button_with_imgs>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-2">
                    <span className="font-size-13">Давление</span> <br />
                    <span className="font-size-16-black fw-500">до 207 бар при 21°C</span>
                </div>
                <div className="col-2">
                    <span className="font-size-13">Давление</span> <br />
                    <span className="font-size-16-black fw-500">до 207 бар при 21°C</span>
                </div>
                <div className="col-2">
                    <span className="font-size-13">Давление</span> <br />
                    <span className="font-size-16-black fw-500">до 207 бар при 21°C</span>
                </div>
                <div className="col-2">
                {/* <div className="d-flex flex-column col-2 justify-content-end align-items-end me-2"> */}
                    <span className="font-size-13 mb-1">Итого</span> <br />
                    <span className="font-size-16-black fw-500">$214</span>
                </div>
            </div>

        </div >
    </div>

}

export default CartItem;