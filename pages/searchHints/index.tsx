import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";
import Link from "next/link";
import SearchOftenField from "@/components/searchElement/SearchOftenField";
import { MdSearch } from "react-icons/md";


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
            <span className="font-size-16-gray fw-500">Часто ищут</span>
            <SearchOftenField title="Hy-Lok 3мм"></SearchOftenField>
        </div>
    </>
}

{/* <div> */ }

{/* 'import {MdSearch} from 'react-icons/md'
            import ButtonGrayArrow from '../buttons/ButtonGrayArrow'

            interface SearchOftenFieldProps {
                title: string,
}


            function SearchOftenField(props: SearchOftenFieldProps) {
    return (
            <div className="search-field p-2">
                <div className="mx-2">
                    <MdSearch size={24} fill={'gray'} />
                    <span className="font-size-20 ms-3 fw-500">{props.title}</span>
                </div>
                <div>
                    <ButtonGrayArrow />
                </div>
            </div>
            )
}

            export default SearchOftenField;
        </div>

}' */}