import Header from "@/components/header/Header";
import Navbar from "@/components/navbar/Navbar";
import Link from "next/link";




export default function () {

    return <>
        <h1>
        Header
        </h1>
        <Link href='/'>Back</Link>
        <hr />
        <Navbar type_navbar="my"></Navbar>
        <Header></Header>
    </>

}