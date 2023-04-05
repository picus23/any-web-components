import Navbar from "@/components/navbar/Navbar";
import React from 'react';
import CollapseAntd from "@/components/collapse/CollapseAntd";
import SearchSeries from "@/components/searchElement/fields/FieldSeries";
import Button from "@/components/buttons/Button";
import SearchBar from "@/components/searchElement/SearchBar";
import Image from "next/image";
import Link from "next/link";
import SearchCategory from "@/components/searchElement/fields/FieldSeries";
import { MdSearch } from "react-icons/md";


import reference from "./ref.png";


let arraySearchOften = ['Hy-Lok- 3мм', 'Шаровые краны', 'Микронные фильтры'];

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

        <div className="container-xxl p-0" style={{ outline: '1px solid #000' }}>
            {/* Обычно окно поиска */}
            <SearchBar></SearchBar>
        </div>
        <CollapseAntd title={'Search Bar'} text={''}></CollapseAntd>

    </>
}