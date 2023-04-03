import Image from "next/image";
import Link from "next/link";


export default function ({link}: {link: string}) {


    return <>
        <img src={`${link}/ref.png`} alt=""/> 
        <Link href={link}>Шапка</Link>
    </>
}