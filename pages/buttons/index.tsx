import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "@/components/buttons/Button";
import ReactDOMServer from 'react-dom/server'
import Link from "next/link";
import { MdToc } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";

export default function () {

    return <>
        <h1>
            Buttons
        </h1>
        <Link href='/'>Back</Link>
        <hr />

        <Button counter={12}>
            Button
        </Button>
    </>

    {/* <div className="d-flex">

            <div className='mx-3'>
                <Button icon={<MdToc />}>Каталог</Button>
            </div>
            <div className='mx-3'>
                <Button icon={<MdShoppingCart />}>Корзина</Button>
            </div>

        </div> */}

}