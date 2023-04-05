import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Image from "next/image";
import Link from "next/link";




export default function () {

    return <>
        <h1>
        Header
        </h1>
        <Link href='/'>Back</Link>
        <hr />

        <div className="container-xxl " style={{outline: '1px solid #000'}}>
            <Navbar type_navbar="my"></Navbar>
        </div>
        
        <Header></Header>
    </>

}