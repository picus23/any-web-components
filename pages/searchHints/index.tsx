import Navbar from "@/components/navbar/Navbar";
import React from 'react';
import CollapseAntd from "@/components/collapse/CollapseAntd";
import SearchField from "@/components/searchElement/SearchField";
import Button from "@/components/buttons/Button";
import Image from "next/image";
import Link from "next/link";
import SearchOftenField from "@/components/searchElement/SearchOftenField";
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

            <div className="search-hint">

                <form className=" d-flex my-2">
                    <input className="input-find" type="search" placeholder="Поиск" aria-label="Search" />
                    <Button type_btn="find-blue">Найти</Button>
                </form>

                <div className="search-hint-search-often">
                    <span className="font-size-16-gray fw-500">Часто ищут</span>
                    {
                        arraySearchOften.map(title => {
                            return <SearchOftenField title={title}></SearchOftenField>
                        })
                    }
                </div>

                <div className="search-hint-search-often">
                    <span className="font-size-16-gray fw-500">Популярные категории</span>
                    <SearchField title={'Фитинги для труб'} category={'45 серия'} icon={<img src="/kit/empty_square.png" alt="" />}></SearchField>
                    <SearchField title={'Шаровые краны'} category={'45 серия'} icon={<img src="/kit/empty_square.png" alt="" />}></SearchField>
                    <SearchField title={'Микронные фильтры'} category={'45 серия'} icon={<img src="/kit/empty_square.png" alt="" />}></SearchField>
                </div>

            </div>

        </div>

    </>
}