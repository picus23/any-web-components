import React from 'react';
import SearchSeries from "@/components/searchElement/SearchSeries";
import Button from "@/components/buttons/Button";
import SearchCategory from "@/components/searchElement/SearchSeries";

export default function SearchBar() {

    return <>
        {/* Обычно окно поиска */}
        <div className="search-hint">

            <form className=" d-flex my-2">
                <input className="input-find" type="search" placeholder="Поиск" aria-label="Search" />
                <Button type_btn="find-blue">Найти</Button>
            </form>

            <div className="search-hint-search-often">
                <span className="font-size-16-gray fw-500">Часто ищут</span>
                <SearchCategory title={'Hy-Lok- 3мм'}></SearchCategory>
                <SearchCategory title={'Шаровые краны'}></SearchCategory>
                <SearchCategory title={'Микронные фильтры'}></SearchCategory>
            </div>

            <div className="search-hint-search-often">
                <span className="font-size-16-gray fw-500">Популярные категории</span>
                <SearchSeries title={'Фитинги для труб'} category={'45 серия'} icon={<img src="/kit/empty_square.png" alt="" />}></SearchSeries>
                <SearchSeries title={'Шаровые краны'} category={'45 серия'} icon={<img src="/kit/empty_square.png" alt="" />}></SearchSeries>
                <SearchSeries title={'Микронные фильтры'} category={'45 серия'} icon={<img src="/kit/empty_square.png" alt="" />}></SearchSeries>
            </div>

        </div>
    </>
}