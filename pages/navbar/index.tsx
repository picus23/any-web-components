import Navbar from "@/components/navbar/Navbar";
import Link from "next/link";

export default function () {

    return <>
        <h1>
            Navbar
        </h1>
        <Link href='/'>Back</Link>
        <hr />

        <Navbar type_navbar="my"></Navbar>

    </>

}