import CartItem from "../../components/cartItem/CartItem";
import Image from "next/image";
import Link from "next/link";

import reference from "./ref.png";

const list_links = [
    {
        'id': 1,
        'title': 'Продукция',
        'url': 'Продукция',
    },
    {
        'id': 2,
        'title': 'Клапаны',
        'url': 'Клапаны',
    },
    {
        'id': 3,
        'title': 'Шаровые краны',
        'url': 'Шаровые краны',
    },
]

const props_list = [
    {
        'prop' : 'Давление',
        'param' : 'до 207 бар при 21°C',
    },
    {
        'prop' : 'Давление',
        'param' : 'до 207 бар при 21°C',
    },
    {
        'prop' : 'Давление',
        'param' : 'до 207 бар при 21°C',
    },
]
export default function () {

    return <>
        <h1>
            CartItem
        </h1>
        <Link href='/'>Back</Link>

        <div className="container-xxl p-0" style={{ outline: '1px solid #000' }}>
            <Image src={reference} alt="" />
        </div>

        <hr />

        <div className="container-xxl p-0" style={{ outline: '1px solid #000' }}>
            <CartItem price={214} props_list={props_list} list={list_links} count={3} name_item={"H1B-H-6M"}></CartItem>
        </div>

    </>

}