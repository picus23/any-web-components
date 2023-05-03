import reference from "./ref.png";
import del from "./delete.png";
import seconds from "./seconds.png";
import CollapseAntd from "../../components/collapse/CollapseAntd";
import Link from "next/link";
import Image from "next/image";
import Basket from "../../components/basket/Basket";
import Button from "../../components/buttons/Button";
import { MdClose, MdDelete } from "react-icons/md";
import FieldEncoding from "@/components/searchElement/fields/FieldEncoding";
import ButtonCounter from "@/components/buttons/ButtonCounter";
import ButtonCheckout from "@/components/buttons/ButtonCheckout";
import ButtonGrayAddRemove from "@/components/buttons/ButtonGrayAddRemove";
import MainBasketEraceTimer from "@/components/basket/MainBasketEraceTimer";

export default function () {
    return <>
        <h1>

        </h1>
        <Link href='/'>Back</Link>
        <hr />
        <div className="container-xxl p-0 d-flex justify-content-center" style={{ outline: '1px solid #000', background: '#eee' }}>
            <h1>Образец</h1>
            <Image src={del} alt="" />
        </div>
        <div className="container-xxl p-0 d-flex justify-content-center" style={{ outline: '1px solid #000', background: '#eee' }}>
            <h1>Образец</h1>
            <Image src={seconds} alt="" />
        </div>
        <h1>Мой</h1>
        <div className="container-xxl p-0 d-flex justify-content-center" style={{ outline: '1px solid #000', background: '#eee' }}>
            <MainBasketEraceTimer
                onClick={() => alert('Click')}
            />
        </div>






        <div className="container-xxl p-0 d-flex justify-content-center" style={{ outline: '1px solid #000' }}>
            <h1>Образец</h1>
            <Image src={reference} alt="" />
        </div>
        <h1>Мой</h1>
        <div className="container-xxl p-0 d-flex justify-content-center" style={{ outline: '1px solid #000', background: '#eee' }}>

            <Basket>
                <div className="basket py-3">
                    {/* <div className="basket py-3 justify-content-between"> */}
                    <div className="d-flex flex-column mx-3">
                        <div className="d-flex justify-content-between w-100 align-items-center">
                            <span className="font-size-20-black fw-500">Ваша корзина</span>
                            <Button icon={<MdClose size={20} fill={'gray'} />} btn_style="btn-outline-secondary"><span className="font-size-16-black fw-500">Закрыть</span></Button>
                        </div>
                        <div className="d-flex flex-column w-100">
                            {
                                [
                                    ['B1V-H-3M', 156],
                                ].map(item => (
                                    <FieldEncoding
                                        imgUrl={'/kit/empty_square.png'}
                                        pagetitle={item[0]}
                                        price={item[1]}
                                        basketButtons={
                                            <div className="d-flex gap-1">
                                                <ButtonGrayAddRemove
                                                    counter={0}
                                                    onClickRemove={() => alert('Click')}
                                                    onClickAdd={() => alert('Click')}
                                                />
                                                <Button
                                                    btn_style="btn-outline-secondary"
                                                    onClick={() => alert('Click')}
                                                    icon={<MdDelete size={20} fill='#969696' />} />
                                            </div>
                                        }
                                    />
                                )
                                )
                            }
                        </div>
                    </div>
                    <div className="d-flex flex-column gap-1 mx-3">
                        <hr />
                        <div className="d-flex justify-content-between">
                            <span className="font-size-16-black">Товаров</span>
                            <span className="font-size-16-black">12 шт.</span>
                        </div>
                        <div className="d-flex justify-content-between">
                            <span className="font-size-16-black">Итого</span>
                            <span className="font-size-16-black">650 $</span>
                        </div>
                        <a className="text-decoration-none" href="#"><Button btn_style="btn-primary" class_name="w-100">Оформить заказ</Button></a>
                        <a className="text-decoration-none" href="#"><Button btn_style="btn-outline-primary" class_name="w-100">Перейти в корзину</Button></a>
                    </div>
                </div>
            </Basket>

        </div>
        <CollapseAntd title={'Search Bar'} text={`
        
        <Basket>
                <div className="basket p-3 justify-content-between">
                    <div className="d-flex flex-column">
                        <div className="d-flex justify-content-between w-100 align-items-center">
                            <span className="font-size-20-black fw-500">Ваша корзина</span>
                            <Button icon={<MdClose size={20} fill={'gray'} />} btn_style="gray my-btn-h40"><span className="font-size-16-black fw-500">Закрыть</span></Button>
                        </div>
                        <div className="d-flex flex-column w-100">
                            {
                                [
                                    ['B1V-H-3M', 156],
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
                    <div className="d-flex flex-column gap-1 justify-self-end w-100">
                        <hr />
                        <div className="d-flex justify-content-between">
                            <span className="font-size-16-black">Товаров</span>
                            <span className="font-size-16-black">12 шт.</span>
                        </div>
                        <div className="d-flex justify-content-between">
                            <span className="font-size-16-black">Итого</span>
                            <span className="font-size-16-black">650 $</span>
                        </div>
                        <ButtonCheckout btn_style="my-btn-checkout">Оформить заказ</ButtonCheckout>
                        <ButtonCheckout btn_style="my-btn-go-to">Перейти в корзину</ButtonCheckout>
                    </div>
                </div>
            </Basket>
        
        `}></CollapseAntd>
    </>
}