import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";
import Link from "next/link";


import reference from "./ref.png";

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
            component
        </div>
    </>

}