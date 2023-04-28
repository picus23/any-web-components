import Navbar from "../../components/navbar/Navbar";
import CollapseAntd from "../../components/collapse/CollapseAntd";
import Image from "next/image";
import Link from "next/link";


import reference from "./ref.png";
import TempNavbar from "@/components/navbar/TempNavbar";
import Button from "@/components/buttons/Button";
import { useRef } from "react";
import { MdFavorite, MdPerson, MdShoppingCart } from "react-icons/md";

export default function () {

    return <>
        <h1>
            Navbar
        </h1>
        <Link href='/'>Back</Link>
        <hr />


        <div className="container-xxl p-0" style={{ outline: '1px solid #000' }}>
            <Image src={reference} alt="" />
        </div>

        <hr />

        <div className="container-xxl" style={{ outline: '1px solid #000' }}>
            <Navbar type_navbar="my"></Navbar>
        </div><br />
        <CollapseAntd title={'Nav Bar'} text={'<Navbar type_navbar="my"></Navbar>'}></CollapseAntd>

        <div className="container-xxl" style={{ outline: '1px solid #000' }}>
            <TempNavbar
                catalog={<Button />}
                hook={useRef()}
                basket={<Button isCounterUp={true} icon={<MdShoppingCart size={24} fill={'#969696'} />} isGray={true} counter={0}><span className="fw-500">Корзина</span></Button>}
                login={<Button class_name="py-2" icon={<MdPerson size={24} fill={'#969696'} />} isGray={true}><span className="fw-500">Войти</span></Button>
                }
                favorite={<Button icon={<MdFavorite size={24} fill={'#969696'} />} isGray={true} />}>

            </TempNavbar>
        </div>

        <hr />



    </>

}