import React from 'react';
import SearchSeries from "@/components/searchElement/fields/FieldSeries";
import Button from "@/components/buttons/Button";
import SearchCategory from "@/components/searchElement/fields/FieldCategory";
import {MdSearch} from "react-icons/md";

export default function SearchBarEncodings() {

    return <>
        {/* Обычно окно поиска */}
        <div className="search-hint">

            <form className=" d-flex my-2">
                <input className="input-find" type="search" placeholder="Поиск" aria-label="Search" />
                <Button type_btn="find-blue">Найти</Button>
            </form>

            <div className="search-hint-history">
                <span className="font-size-16-gray fw-500">Кодировки</span>
                <div className="row gap-3">
                <SearchSeries title={'H1B-H-6M'} subtitle={''}></SearchSeries>
                </div>
            </div>

            <div className="search-hint-search-often">
                <span className="font-size-16-gray fw-500">Часто ищут</span>
                <SearchCategory title={'Hy-Lok- 3мм'}></SearchCategory>
                <SearchCategory title={'Шаровые краны'}></SearchCategory>
                <SearchCategory title={'Микронные фильтры'}></SearchCategory>
            </div>

            <div className="search-hint-search-often">
                <span className="font-size-16-gray fw-500">Популярные категории</span>
                <SearchSeries title={'Фитинги для труб'} subtitle={'45 серия'} icon={<img src="/kit/empty_square.png" alt="" />}></SearchSeries>
                <SearchSeries title={'Шаровые краны'} subtitle={'45 серия'} icon={<img src="/kit/empty_square.png" alt="" />}></SearchSeries>
                <SearchSeries title={'Микронные фильтры'} subtitle={'45 серия'} icon={<img src="/kit/empty_square.png" alt="" />}></SearchSeries>
            </div>

        </div>
    </>
}