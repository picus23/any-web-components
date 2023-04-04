import Button from "@/components/buttons/Button";
import Link from "next/link";




export default function () {

    return <>
        <h1>
            Buttons
        </h1>
        <Link href='/'>Back</Link>
        <hr />
        <Button counter={0} type_btn='gray' type_counter="gray">Button</Button>
        <Button type_btn='catalog-blue'>Button</Button>
        <Button type_btn='catalog-blue'>Button</Button>
    </>

}
<img src="./navbar.png" alt="" />