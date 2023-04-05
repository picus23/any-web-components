import Navbar from "../../components/navbar/Navbar";
import React from 'react';
import CollapseAntd from "../../components/collapse/CollapseAntd";
import SearchSeries from "../../components/searchElement/fields/FieldSeries";
import Button from "../../components/buttons/Button";
import SearchBarEncodings from "../../components/searchElement/SearchBarEncodings";
import Image from "next/image";
import Link from "next/link";
import SearchCategory from "../../components/searchElement/fields/FieldSeries";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import reference from "./ref.png";
import reference1 from "./ref1.png";
import SearchInput from "@/components/searchElement/SearchInput";
import SearchBar from "@/components/searchElement/SearchBar/SearchBar";
import SearchTitle from "@/components/searchElement/SearchBar/SearchTitle";
import FieldCategory from "@/components/searchElement/fields/FieldCategory";
import FieldSeries from "../../components/searchElement/fields/FieldSeries";
import FieldEncoding from "@/components/searchElement/fields/FieldEncoding";
import ButtonCounter from "@/components/buttons/ButtonCounter";
import SearchBarEncoding from "../../components/searchElement/SearchBarEncodings";
import ButtonShow from "@/components/buttons/ButtonShow";


let arraySearchOften = ['Hy-Lok- 3мм', 'Шаровые краны', 'Микронные фильтры'];

export default function () {

    return <>
        <h1>
            Navbar
        </h1>
        <Link href='/'>Back</Link>
        <hr />


        <div className="container-xxl p-0" style={{ outline: '1px solid #000' }}>
            <h1>Образец</h1>
            <Image src={reference} alt="" />
        </div>
        <div className="container-xxl p-0 d-flex justify-content-center" style={{ outline: '1px solid #000', background: '#eee' }}>
            {/* Обычно окно поиска */}
            <h1>Мой</h1>
            <div className="d-flex flex-column my-3">
                <SearchInput />
                <SearchBar>
                    <SearchTitle>Часто ищут</SearchTitle>
                    {
                        ['Hy-Lok 3мм', 'Шаровые краны', 'Микронные фильтры'].map(title => (
                            <FieldCategory title={title} />
                        ))
                    }
                    <hr />
                    <SearchTitle>Популярные категории</SearchTitle>
                    {
                        [
                            ['Фитинги для труб', '45 серия', '/kit/empty_square.png'],
                            ['Шаровые краны', '45 серия', '/kit/empty_square.png'],
                            ['Микронные фильтры', '45 серия', '/kit/empty_square.png'],
                        ].map(item => (
                            <FieldSeries title={item[0]} subtitle={item[1]} icon={<img src={item[2]} alt="" />}></FieldSeries>
                        ))
                    }
                </SearchBar>

                {/* <hr />
            <SearchBarEncodings></SearchBarEncodings> */}
            </div>
        </div>

        <CollapseAntd title={'Search Bar'} text={`
        
        <div className="d-flex flex-column my-3">
        <SearchInput />
        <SearchBar>
            <SearchTitle>Часто ищут</SearchTitle>
            {
                ['Hy-Lok 3мм', 'Шаровые краны', 'Микронные фильтры'].map(title => (
                    <FieldCategory title={title} />
                ))
            }

            <hr />

            <SearchTitle>Популярные категории</SearchTitle>
            {
                [
                    ['Фитинги для труб', '45 серия','/kit/empty_square.png'],
                    ['Шаровые краны', '45 серия','/kit/empty_square.png'],
                    ['Микронные фильтры', '45 серия','/kit/empty_square.png'],
                ].map(item => (
                    <FieldSeries title={item[0]} subtitle={item[1]} icon={<img src={item[2]} alt="" />}></FieldSeries>
                ))
            }
        </SearchBar>
        
        `}></CollapseAntd>


        <div className="container-xxl p-0" style={{ outline: '1px solid #000' }}>
            <h1>Образец</h1>
            <Image src={reference1} alt="" />
        </div>
        <div className="container-xxl p-0 d-flex justify-content-center" style={{ outline: '1px solid #000', background: '#eee' }}>
            {/* Обычно окно поиска */}

            <h1>Мой</h1>
            <div className="d-flex flex-column my-3">
                <SearchInput></SearchInput>
                <SearchBarEncoding>
                    <div className="search-hint-history">
                        <SearchTitle>Кодировки</SearchTitle>
                        <div className="row w-100 px-2">
                            {
                                [
                                    ['H1B-H-6M', 156, 5],
                                    ['H1B-H-6M', 156, 5],
                                    ['H1B-H-6M', 156, 5],
                                ].map(item => (

                                    <FieldEncoding icon={<img src={'/kit/empty_square.png'} alt='' />}
                                        titletle={item[0]}
                                        pricece={item[1]}
                                        amountnt={item[2]}
                                        button={<ButtonCounter text_style={'font-size-16-gray'} counter={1} btn_style="counter-h52"></ButtonCounter>}
                                        button2={<Button icon={<MdShoppingCart size={24} fill={'white'} />} btn_style={"blue"}><span className="fw-500">Купить</span></Button>}>
                                    </FieldEncoding>
                                )

                                )
                            }
                            <ButtonShow btn_style='show' text={'Показать все кодировки'} text_style={'font-size-16-black fw-500'}></ButtonShow>
                            <hr className="w-100 my-3"/>

                            <SearchTitle>Часто ищут</SearchTitle>
                            {
                                ['Hy-Lok 3мм', 'Шаровые краны', 'Микронные фильтры'].map(title => (
                                    <FieldCategory title={title} />
                                ))
                            }
                            <hr />
                            <SearchTitle>Популярные категории</SearchTitle>
                            {
                                [
                                    ['Фитинги для труб', '45 серия', '/kit/empty_square.png'],
                                    ['Шаровые краны', '45 серия', '/kit/empty_square.png'],
                                    ['Микронные фильтры', '45 серия', '/kit/empty_square.png'],
                                ].map(item => (
                                    <FieldSeries title={item[0]} subtitle={item[1]} icon={<img src={item[2]} alt="" />}></FieldSeries>
                                ))
                            }
                        </div>
                    </div>
                </SearchBarEncoding>
            </div>

        </div>

    </>
}
