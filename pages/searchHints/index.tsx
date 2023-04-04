import Navbar from "@/components/navbar/Navbar";
import React from 'react';
import CollapseAntd from "@/components/collapse/CollapseAntd";
import SearchSeries from "@/components/searchElement/SearchSeries";
import Button from "@/components/buttons/Button";
import Image from "next/image";
import Link from "next/link";
import SearchCategory from "@/components/searchElement/SearchSeries";
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
            <div className="search-hint">

                <form className=" d-flex my-2">
                    <input className="input-find" type="search" placeholder="Поиск" aria-label="Search" />
                    <Button type_btn="find-blue">Найти</Button>
                </form>

                <div className="search-hint-search-often">
                    <span className="font-size-16-gray fw-500">Часто ищут</span>
                    {
                        arraySearchOften.map(title => {
                            return <SearchCategory title={title}></SearchCategory>
                        })
                    }
                </div>

                <div className="search-hint-search-often">
                    <span className="font-size-16-gray fw-500">Популярные категории</span>
                    <SearchSeries title={'Фитинги для труб'} category={'45 серия'} icon={<img src="/kit/empty_square.png" alt="" />}></SearchSeries>
                    <SearchSeries title={'Шаровые краны'} category={'45 серия'} icon={<img src="/kit/empty_square.png" alt="" />}></SearchSeries>
                    <SearchSeries title={'Микронные фильтры'} category={'45 серия'} icon={<img src="/kit/empty_square.png" alt="" />}></SearchSeries>
                </div>

            </div>

            {/* Окно поиска с фильтрами */}
            <div>
                
            </div>


        </div>

    </>
}