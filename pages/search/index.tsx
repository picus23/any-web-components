import Navbar from "../../components/navbar/Navbar";
import React from 'react';
import CollapseAntd from "../../components/collapse/CollapseAntd";
import SearchSeries from "../../components/searchElement/fields/FieldSeries";
import Button from "../../components/buttons/Button";
import SearchBarEncodings from "../../components/searchElement/SearchBarEncodings";
import Image from "next/image";
import Link from "next/link";
import SearchCategory from "../../components/searchElement/fields/FieldSeries";
import { MdFilterAlt, MdPictureAsPdf, MdSearch, MdShoppingCart } from "react-icons/md";
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
import FieldCharacteristic from "../../components/searchElement/fields/FieldCharacteristic";
import FieldText from "@/components/searchElement/fields/FieldText";


export default function () {
    var character = [
        {
            title: 'Краны шаровые HY-LOK 112 серии',
            subtitle: '115 кодировок',
            characteristics: [
                {
                    title: 'Давление',
                    subtitle: 'до 207 бар при 21°C',
                },
                {
                    title: 'ДУ',
                    subtitle: 'от 1.3мм до 10.3мм',
                },
                {
                    title: 'Диапазон температур',
                    subtitle: 'от +10°C до +65°C',
                },
            ],
        },
        {
            title: 'Краны шаровые HY-LOK 112 серии',
            subtitle: '115 кодировок',
            characteristics: [
                {
                    title: 'Давление',
                    subtitle: 'до 207 бар при 21°C',
                },
                {
                    title: 'ДУ',
                    subtitle: 'от 1.3мм до 10.3мм',
                },
                {
                    title: 'Диапазон температур',
                    subtitle: 'от +10°C до +65°C',
                },
            ],
        },
        {
            title: 'Краны шаровые HY-LOK 112 серии',
            subtitle: '115 кодировок',
            characteristics: [
                {
                    title: 'Давление',
                    subtitle: 'до 207 бар при 21°C',
                },
                {
                    title: 'ДУ',
                    subtitle: 'от 1.3мм до 10.3мм',
                },
                {
                    title: 'Диапазон температур',
                    subtitle: 'от +10°C до +65°C',
                },
            ],
        },
    ];

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

            <h1>Мой</h1>
            <div className="d-flex flex-column my-3">
                <SearchInput></SearchInput>
                <SearchBarEncoding>
                    <div className="search-hint-history">
                        <SearchTitle>Кодировки</SearchTitle>
                        <div className="row w-100">
                            {
                                [
                                    ['H1B-H-6M', 156, 5],
                                    ['H1B-H-6M', 156, 5],
                                    ['H1B-H-6M', 156, 5],
                                ].map(item => (

                                    <FieldEncoding icon={<img src={'/kit/empty_square.png'} alt='' />}
                                        title={item[0]}
                                        price={item[1]}
                                        amount={item[2]}
                                        button={<ButtonCounter text_style={'font-size-16-gray '} counter={1} btn_style="counter-h52"></ButtonCounter>}
                                        button2={<Button icon={<MdShoppingCart size={24} fill={'white'} />} btn_style={"blue"}><span className="fw-500">Купить</span></Button>}>
                                    </FieldEncoding>
                                )
                                )
                            }
                        </div>
                            <ButtonShow btn_style='show' text={'Показать все кодировки'} text_style={'font-size-16-black fw-500'} counter={12}></ButtonShow>

                        <hr className="w-100" />

                        <SearchTitle>Серии</SearchTitle>

                        <div className="row w-100  gap-2">
                            {
                                character.map(item => (


                                    <div>
                                        <FieldSeries title={item.title} subtitle={item.subtitle} icon={<img src="/kit/empty_square.png" alt="" />}></FieldSeries>

                                        <div className="d-flex justify-content-between me-4">
                                            {
                                                item.characteristics.map(temp => (
                                                    <FieldCharacteristic title={temp.title} subtitle={temp.subtitle}></FieldCharacteristic>

                                                ))
                                            }
                                        </div>
                                    </div>
                                ))
                            }


                        </div>
                        <hr className="w-100" />
                        <SearchTitle>PDF документы</SearchTitle>
                        <div className="row w-100 ">
                            {
                                [
                                    ['H1B-H-6M', 'Найдено 15 совпадений', 'Пожаробезопасная конструкция Все краны Hy - Lok имеют дополнительное металлическое седло, которое обеспечивает уплотнение металл по металлу, для случаев если упругое седло будет разрушено или выгорит.Для подтверждения огнестойкости, шаровые краны Hy - Lok протестированы в соответствии с BS6755 часть 2, API 607 & 6FA.шаровые краны'],
                                    ['H1B-H-6M', 'Найдено 15 совпадений', 'Пожаробезопасная конструкция Все краны Hy - Lok имеют дополнительное металлическое седло, которое обеспечивает уплотнение металл по металлу, для случаев если упругое седло будет разрушено или выгорит.Для подтверждения огнестойкости, шаровые краны Hy - Lok протестированы в соответствии с BS6755 часть 2, API 607 & 6FA.шаровые краны'],
                                    ['H1B-H-6M', 'Найдено 15 совпадений', 'Пожаробезопасная конструкция Все краны Hy - Lok имеют дополнительное металлическое седло, которое обеспечивает уплотнение металл по металлу, для случаев если упругое седло будет разрушено или выгорит.Для подтверждения огнестойкости, шаровые краны Hy - Lok протестированы в соответствии с BS6755 часть 2, API 607 & 6FA.шаровые краны'],

                                ].map(item => (
                                    <div>
                                        <FieldSeries title={item[0]} subtitle={item[1]} icon={<MdPictureAsPdf size={24} fill={'gray'} />}></FieldSeries>
                                        <FieldText>{item[2]}</FieldText>
                                    </div>
                                )
                                )
                            }
                            <ButtonShow btn_style='show my-2' text={'Показать все документы'} text_style={'font-size-16-black fw-500'} counter={12}></ButtonShow>
                        </div>

                        <hr className="w-100" />

                        <SearchTitle>Фильтры</SearchTitle>
                        <span className="font-size-13">Используйте <img src="/kit/chips.png" alt="" />для выбора нескольких фильтров.</span>
                        <div className="row w-100 ">
                            {
                                [
                                    ['Hy-Lok 3мм', 'Найдено 156 товаров'],
                                    ['Hy-Lok 3мм', 'Найдено 156 товаров'],
                                    ['Hy-Lok 3мм', 'Найдено 156 товаров'],
                                ].map(item => (
                                    <FieldSeries icon={<MdFilterAlt size={24} fill={'gray'} />} title={item[0]} subtitle={item[1]}></FieldSeries>
                                ))
                            }
                        </div>

                    </div>
                </SearchBarEncoding>
            </div >

        </div >
        <CollapseAntd title={'Search Bar'} text={`
        
        <div className="d-flex flex-column my-3">
                <SearchInput></SearchInput>
                <SearchBarEncoding>
                    <div className="search-hint-history">
                        <SearchTitle>Кодировки</SearchTitle>
                        <div className="row w-100 ">
                            {
                                [
                                    ['H1B-H-6M', 156, 5],
                                    ['H1B-H-6M', 156, 5],
                                    ['H1B-H-6M', 156, 5],
                                ].map(item => (

                                    <FieldEncoding icon={<img src={'/kit/empty_square.png'} alt='' />}
                                        title={item[0]}
                                        price={item[1]}
                                        amount={item[2]}
                                        button={<ButtonCounter text_style={'font-size-16-gray'} counter={1} btn_style="counter-h52"></ButtonCounter>}
                                        button2={<Button icon={<MdShoppingCart size={24} fill={'white'} />} btn_style={"blue"}><span className="fw-500">Купить</span></Button>}>
                                    </FieldEncoding>
                                )
                                )
                            }
                            <ButtonShow btn_style='show' text={'Показать все кодировки'} text_style={'font-size-16-black fw-500'} counter={12}></ButtonShow>
                        </div>

                        <hr className="w-100" />

                        <SearchTitle>Серии</SearchTitle>

                        <div className="row w-100  gap-2">
                            {
                                character.map(item => (


                                    <div>
                                        <FieldSeries title={item.title} subtitle={item.subtitle} icon={<img src="/kit/empty_square.png" alt="" />}></FieldSeries>

                                        <div className="d-flex justify-content-between me-4">
                                            {
                                                item.characteristics.map(temp => (
                                                    <FieldCharacteristic title={temp.title} subtitle={temp.subtitle}></FieldCharacteristic>

                                                ))
                                            }
                                        </div>
                                    </div>
                                ))
                            }


                        </div>
                        <hr className="w-100" />
                        <SearchTitle>PDF документы</SearchTitle>
                        <div className="row w-100 ">
                            {
                                [
                                    ['H1B-H-6M', 'Найдено 15 совпадений', 'Пожаробезопасная конструкция Все краны Hy - Lok имеют дополнительное металлическое седло, которое обеспечивает уплотнение металл по металлу, для случаев если упругое седло будет разрушено или выгорит.Для подтверждения огнестойкости, шаровые краны Hy - Lok протестированы в соответствии с BS6755 часть 2, API 607 & 6FA.шаровые краны'],
                                    ['H1B-H-6M', 'Найдено 15 совпадений', 'Пожаробезопасная конструкция Все краны Hy - Lok имеют дополнительное металлическое седло, которое обеспечивает уплотнение металл по металлу, для случаев если упругое седло будет разрушено или выгорит.Для подтверждения огнестойкости, шаровые краны Hy - Lok протестированы в соответствии с BS6755 часть 2, API 607 & 6FA.шаровые краны'],
                                    ['H1B-H-6M', 'Найдено 15 совпадений', 'Пожаробезопасная конструкция Все краны Hy - Lok имеют дополнительное металлическое седло, которое обеспечивает уплотнение металл по металлу, для случаев если упругое седло будет разрушено или выгорит.Для подтверждения огнестойкости, шаровые краны Hy - Lok протестированы в соответствии с BS6755 часть 2, API 607 & 6FA.шаровые краны'],

                                ].map(item => (
                                    <div>
                                        <FieldSeries title={item[0]} subtitle={item[1]} icon={<MdPictureAsPdf size={24} fill={'gray'} />}></FieldSeries>
                                        <FieldText>{item[2]}</FieldText>
                                    </div>
                                )
                                )
                            }
                            <ButtonShow btn_style='show my-2' text={'Показать все документы'} text_style={'font-size-16-black fw-500'} counter={12}></ButtonShow>
                        </div>

                        <hr className="w-100" />

                        <SearchTitle>Фильтры</SearchTitle>
                        <span className="font-size-13">Используйте <img src="/kit/chips.png" alt="" />для выбора нескольких фильтров.</span>
                        <div className="row w-100 ">
                            {
                                [
                                    ['Hy-Lok 3мм', 'Найдено 156 товаров'],
                                    ['Hy-Lok 3мм', 'Найдено 156 товаров'],
                                    ['Hy-Lok 3мм', 'Найдено 156 товаров'],
                                ].map(item => (
                                    <FieldSeries icon={<MdFilterAlt size={24} fill={'gray'} />} title={item[0]} subtitle={item[1]}></FieldSeries>
                                ))
                            }
                        </div>

                    </div>
                </SearchBarEncoding>
            </div >
        
        `}></CollapseAntd>

    </>
}
