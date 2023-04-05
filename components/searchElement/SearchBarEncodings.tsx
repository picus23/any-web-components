import React from 'react';
import Button from "../../components/buttons/Button";
import ButtonCounter from "../../components/buttons/ButtonCounter";
import ButtonShow from "../../components/buttons/ButtonShow";
import FieldSeries from "../../components/searchElement/fields/FieldSeries";
import FieldCategory from "../../components/searchElement/fields/FieldCategory";
import FieldEncoding from "../../components/searchElement/fields/FieldEncoding";
import { MdSearch } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";
import { MdRemove } from "react-icons/md";
import { MdAdd } from "react-icons/md";

export default function SearchBarEncodings() {

    return <>
        <div className="search-hint">

            <form className=" d-flex my-2">
                <input className="input-find" type="search" placeholder="Поиск" aria-label="Search" />
                <Button btn_style="find-blue">Найти</Button>
            </form>

            <div className="search-hint-history">
                <span className="font-size-16-gray fw-500">Кодировки</span>
                <div className="row gap-3 w-100 px-2">
                    <FieldEncoding icon={<img src='/kit/empty_square.png' alt='' />}
                        title={'H1B-H-6M'}
                        price={156}
                        amount={5}
                        button={<ButtonCounter text_style={'font-size-16-gray'} counter={1} btn_style="counter-h52"></ButtonCounter>}
                        button2={<Button icon={<MdShoppingCart size={24} fill={'white'} />} btn_style={"blue"}><span className="fw-500">Купить</span></Button>}>
                    </FieldEncoding>
                    <FieldEncoding icon={<img src='/kit/empty_square.png' alt='' />}
                        title={'H1B-H-6M'}
                        price={156}
                        amount={5}
                        button={<ButtonCounter text_style={'font-size-16-gray'} btn_style="counter-h52"></ButtonCounter>}
                        button2={<Button icon={<MdShoppingCart size={24} fill={'white'} />} btn_style={"blue"}><span className="fw-500">Купить</span></Button>}>
                    </FieldEncoding>
                    <FieldEncoding icon={<img src='/kit/empty_square.png' alt='' />}
                        title={'H1B-H-6M'}
                        price={156}
                        amount={5}
                        button={<ButtonCounter text_style={'font-size-16-gray'} counter={10} btn_style="counter-h52"></ButtonCounter>}
                        button2={<Button icon={<MdShoppingCart size={24} fill={'white'} />} btn_style={"blue"}><span className="fw-500">Купить</span></Button>}>
                    </FieldEncoding>
                    <ButtonShow btn_style='show' text={'Показать все кодировки'} text_style={'font-size-16-black fw-500'}></ButtonShow>
                </div>
            </div>

            <div className="search-hint-search-often">
                <span className="font-size-16-gray fw-500">Часто ищут</span>
                <FieldCategory title={'Hy-Lok- 3мм'}></FieldCategory>
                <FieldCategory title={'Шаровые краны'}></FieldCategory>
                <FieldCategory title={'Микронные фильтры'}></FieldCategory>
            </div>

            <div className="search-hint-search-often">
                <span className="font-size-16-gray fw-500">Популярные категории</span>
                <FieldSeries title={'Фитинги для труб'} subtitle={'45 серия'}></FieldSeries>
                <FieldSeries title={'Шаровые краны'} subtitle={'45 серия'} icon={<img src="/kit/empty_square.png" alt="" />}></FieldSeries>
                <FieldSeries title={'Микронные фильтры'} subtitle={'45 серия'}></FieldSeries>
            </div>

        </div>
    </>
}