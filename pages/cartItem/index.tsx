import CartItem from "@/components/cartItem/CartItem";
import Link from "next/link";

export default function () {

    return <>
        <h1>
            CartItem
        </h1>
        <Link href='/'>Back</Link>
        <hr />

        <CartItem count={3} name_item={"H1B-H-6M"}></CartItem>

    </>

}