import reference from "./ref.png";
import CollapseAntd from "../../components/collapse/CollapseAntd";
import Link from "next/link";
import Image from "next/image";
import Basket from "../../components/basket/Basket";
import Button from "../../components/buttons/Button";
import { MdClose, MdDelete } from "react-icons/md";
import FieldEncoding from "@/components/searchElement/fields/FieldEncoding";
import ButtonCounter from "@/components/buttons/ButtonCounter";

export default function () {
    return <>
        <h1>
            Navbar
        </h1>
        <Link href='/'>Back</Link>
        <hr />


        <div className="container-xxl p-0" style={{ outline: '1px solid #000' }}>
            <h1>Образец</h1>
            <Image src={reference} alt="" />
        </div>
        <h1>Мой</h1>
        <div className="container-xxl p-0 d-flex justify-content-center" style={{ outline: '1px solid #000', background: '#eee' }}>

            <Basket>
                <div className="basket p-3">
                    <div className="d-flex justify-content-between w-100 align-items-center">
                        <span className="font-size-20-black fw-500">Ваша корзина</span>
                        <Button icon={<MdClose size={20} fill={'gray'} />} btn_style="gray my-btn-h40"><span className="font-size-16-black fw-500">Закрыть</span></Button>
                    </div>
                    <div className="d-flex flex-column w-100">
                        {
                            [
                                ['H1B-H-6M', 156],
                            ].map(item => (

                                <FieldEncoding icon={<img src={'/kit/empty_square.png'} alt='' />}
                                    title={item[0]}
                                    price={item[1]}
                                    buttonGray
                                    button={<ButtonCounter text_style={'font-size-16-gray'} counter={1} btn_style="counter-h40"></ButtonCounter>}
                                    button2={<Button icon={<MdDelete size={20} fill={'gray'} />} btn_style={"small-gray my-btn-small-gray-h40"}></Button>}>
                                </FieldEncoding>
                            )
                            )
                        }
                    </div>

                </div>
            </Basket>



        </div>
    </>
}