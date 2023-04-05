import Button from "../../components/buttons/Button";
import Link from "next/link";




export default function () {

    return <>
        <h1>
            Buttons
        </h1>
        <Link href='/'>Back</Link>
        <hr />
        <Button counter={0} btn_style='gray' counter_style="gray">Button</Button>
        <Button btn_style='catalog-blue'>Button</Button>
        <Button btn_style='catalog-blue'>Button</Button>
    </>

}
<img src="./navbar.png" alt="" />