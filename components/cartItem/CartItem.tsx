import { FC, ReactNode } from "react";
import Button from '@/components/buttons/Button';
import Describe from '@/components/cartItem/Describe';
import { MdOutlineRecycling } from 'react-icons/md';
import { MdMinimize } from 'react-icons/md';


interface CartItemProps {
    children?: ReactNode,
    icon?: ReactNode,
    type_btn?: string,
    type_counter?: string,
    count?: number,
    name_item: string,
}

const CartItem: FC<CartItemProps> = ({ children, icon, type_btn, type_counter, count, name_item }) => {
    return <div className="d-flex border border-dark width-100">
        <div className="d-flex flex-column mx-2 justify-content-evenly">
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.11997 6.70998L5.99997 2.82998L9.87997 6.70998C10.27 7.09998 10.9 7.09998 11.29 6.70998C11.68 6.31998 11.68 5.68998 11.29 5.29998L6.69997 0.70998C6.30997 0.31998 5.67997 0.31998 5.28997 0.70998L0.699971 5.29998C0.309971 5.68998 0.309971 6.31998 0.699971 6.70998C1.08997 7.08998 1.72997 7.09998 2.11997 6.70998Z" fill="#969696" />
            </svg>

            <span className="font-size-16">{count}</span>
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.11997 1.29006L5.99997 5.17006L9.87997 1.29006C10.27 0.900059 10.9 0.900059 11.29 1.29006C11.68 1.68006 11.68 2.31006 11.29 2.70006L6.69997 7.29006C6.30997 7.68006 5.67997 7.68006 5.28997 7.29006L0.699971 2.70006C0.309971 2.31006 0.309971 1.68006 0.699971 1.29006C1.08997 0.910059 1.72997 0.900059 2.11997 1.29006Z" fill="#969696" />
            </svg>
        </div>
        <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="127" height="127" rx="7.5" fill="url(#pattern0)" />
            <rect x="0.5" y="0.5" width="127" height="127" rx="7.5" stroke="#E8E8E8" />
        </svg>
        <div className="ms-3">
            <div className="d-flex justify-content-between">
                <div className="">
                    <span className="font-size-13">Продукция /</span>
                    <span className="font-size-13"> Клапаны /</span>
                    <span className="font-size-13"> Шаровые краны</span>
                    <br />
                    <span className="font-size-20">{name_item}</span>
                </div>
                <div className="action-panel">
                    <div className="action-group">
                        <Button icon={<MdOutlineRecycling />} type_btn="small-gray"></Button>
                        <Button icon={<MdOutlineRecycling />} type_btn="small-gray"></Button>
                    </div>
                    <div className="action-group">
                        <Button icon={<MdOutlineRecycling />} type_btn="small-gray"></Button>
                        <Button icon={<MdOutlineRecycling />} type_btn="small-gray"></Button>
                    </div>
                    <div className="action-group">
                        <Button icon={<MdMinimize />} type_btn="gray">1</Button>
                        <Button icon={<MdOutlineRecycling />} type_btn="small-gray"></Button>
                    </div>
                </div>

            </div>
            <div className="d-flex">
                <div className="me-3">
                    <span className="font-size-13">Давление</span> <br />
                    <span className="font-size-16">до 207 бар при 21°C</span>
                </div>
                <div className="mx-3">
                    <span className="font-size-13">Давление</span> <br />
                    <span className="font-size-16">до 207 бар при 21°C</span>
                </div>
                <div className="mx-3">
                    <span className="font-size-13">Давление</span> <br />
                    <span className="font-size-16">до 207 бар при 21°C</span>
                </div>
                <div className="ms-3">
                    <span className="font-size-13">Итого</span> <br />
                    <span className="font-size-16">$214</span>
                </div>
            </div>
        </div>
    </div >

}

export default CartItem;