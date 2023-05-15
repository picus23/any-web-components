import CartItem from "../../components/cartItem/CartItem";
import Image from "next/image";
import Link from "next/link";

import reference from "./ref.png";
import ButtonGrayAddRemove from "@/components/buttons/ButtonGrayAddRemove";
import { MdDelete } from "react-icons/md";
import Button from "@/components/buttons/Button";

const links = [
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

const props = [
    {
        'title': 'Давление',
        'value': 'до 207 бар при 21°C',
    },
    {
        'title': 'Давление',
        'value': 'до 207 бар при 21°C',
    },
    {
        'title': 'Давление',
        'value': 'до 207 бар при 21°C',
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
            <CartItem
                index={1}
                imgUrl="/kit/cart_item.png"
                breadCrumbs={links}
                price={214}
                props={props}
                count={3}
                pagetitle={"H1B-H-6M"}
                isDelete={false}
                onCancelErace={(() => alert('Click'))}
                BasketButton={<>
                    <ButtonGrayAddRemove
                        btn_class="btn-outline-secondary"
                        counter={1}
                        onClickRemove={() => alert('Click')}
                        onClickAdd={() => alert('Click')}
                    />
                    <Button
                        onClick={() => alert('Click')}
                        icon={<MdDelete size={20}
                            fill={'gray'} />}
                        btn_style="btn-outline-secondary"
                    />
                </>
                }
            />
        </div>

    </>

}