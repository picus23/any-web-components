import CartItem from "@/components/cartItem/CartItem";
import Image from "next/image";
import Link from "next/link";

import reference from "./ref.png";


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
            <CartItem count={3} name_item={"H1B-H-6M"}></CartItem>
        </div>

    </>

}