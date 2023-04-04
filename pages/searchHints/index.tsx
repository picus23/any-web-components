import Navbar from "@/components/navbar/Navbar";
import React from 'react';
import CollapseAntd from "@/components/collapse/CollapseAntd";

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
            <CollapseAntd title={'Поле для часто ищут'} text={'<SearchOftenField title="Hy-Lok 3мм"></SearchOftenField>'}></CollapseAntd>
            <span className="font-size-16-gray fw-500">Часто ищут</span>
            <SearchOftenField title="Hy-Lok 3мм"></SearchOftenField>
        </div>
    </>
}