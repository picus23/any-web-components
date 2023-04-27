import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Image from "next/image";
import Link from "next/link";
import header from "./header.png";
import PopularFilters from "./PopularFilters.png";
import table from "./table.png";
import EncodingWrapper from "@/components/encoding/EncodingWrapper";
import EncodingPicture from "@/components/encoding/EncodingPicture";
import EncodingBlockText from "@/components/encoding/EncodingBlockText";
import EncodingBlockButtons from "@/components/encoding/EncodingBlockButtons";
import CollapseAntd from "@/components/collapse/CollapseAntd";
import ButtonGrayAddRemove from "@/components/buttons/ButtonGrayAddRemove";
import { MdArrowDropDown, MdArrowDropUp, MdShoppingCart } from "react-icons/md";
import ButtonBuy from "@/components/buttons/ButtonBuy";
import { InputSwitch } from "@/components/inputs/InputSwitch";
import FilterChips from "@/components/filter/FilterChips";




const array_picture = ["/kit/small_pic_encoding.svg", "/kit/small_pic_encoding.svg", "/kit/small_pic_encoding.svg"];
const prop_encodings = [
    {
        'key': 'Подсоединение: ',
        'title': 'Hy-Lok 6 мм'
    },
    {
        'key': 'Температура: ',
        'title': 'Hy-Lok 6 мм'
    },
    {
        'key': 'ДУ: ',
        'title': 'Hy-Lok 6 мм'
    },
    {
        'key': 'Давление: ',
        'title': 'Hy-Lok 6 мм'
    },
    {
        'key': 'СV: ',
        'title': 'Hy-Lok 6 мм'
    },
];
const list = [
    {
        'id': 1,
        'title': 'Продукция',
        'url': 'Продукция',
    },
    {
        'id': 1,
        'title': 'Клапаны',
        'url': 'Клапаны',
    },
    {
        'id': 1,
        'title': 'Шаровые краны',
        'url': 'Шаровые краны',
    },
];

export default function () {

    return <>
        <h1>
            Encoding
        </h1>
        <Link href='/'>Back</Link>
        <hr />

        <h1>Образец</h1>
        <div className="container-xxl d-flex justify-content-center p-0" style={{ outline: '1px solid #000;background:#eee' }}>
            <Image src={header} alt="" />
        </div>
        <h1>Мой</h1>
        <div className="container-xxl d-flex p-0" style={{ outline: '1px solid #000;background:#eee' }}>

            <EncodingWrapper>
                <EncodingPicture
                    onClickLeft={() => alert('Click')}
                    onClickRight={() => alert('Click')}
                    list_picture={array_picture}>
                </EncodingPicture>
                <EncodingBlockText prop_encodings={prop_encodings} list={list}></EncodingBlockText>
                <EncodingBlockButtons
                    price={79.99}
                    amount={16}
                    buttonCount={
                        <ButtonGrayAddRemove counter={2} onClickRemove={() => alert('Click')} onClickAdd={() => alert('Click')} />
                    }
                    buttonBuy={
                        <ButtonBuy onClick={() => alert('Click')} icon={<MdShoppingCart size={20} fill={'#fff'} />} btn_style='blue'>Купить</ButtonBuy>
                    }>
                </EncodingBlockButtons>
                <div className="d-flex my-4 gap-4">
                    <a type={'button'} style={{ fontWeight: '500', fontSize: '16px', color: '#0085FF', borderBottom: '2px solid #0085FF' }}
                        onClick={() => alert('Click')}>Таблица конфигураций</a>
                    <a type={'button'} style={{ fontWeight: '500', fontSize: '16px', color: '#1C1C1C' }}
                        onClick={() => alert('Click')}>Конструкционные материалы</a>
                    <a type={'button'} style={{ fontWeight: '500', fontSize: '16px', color: '#1C1C1C' }}
                        onClick={() => alert('Click')}>Вебинары</a>
                    <a type={'button'} style={{ fontWeight: '500', fontSize: '16px', color: '#1C1C1C' }}
                        onClick={() => alert('Click')}>Каталоги</a>
                </div>
            </EncodingWrapper>

        </div >

        <CollapseAntd title={'Encoding Header'} text={`
           <EncodingWrapper>
           <EncodingPicture
               onClickLeft={() => alert('Click')}
               onClickRight={() => alert('Click')}
               list_picture={array_picture}>
           </EncodingPicture>

           <EncodingBlockText prop_encodings={prop_encodings} list={list}></EncodingBlockText>

           <EncodingBlockButtons
               price={79.99}
               amount={16}
               buttonCount={
                   <ButtonGrayAddRemove counter={2} onClickRemove={() => alert('Click')} onClickAdd={() => alert('Click')} />
               }
               buttonBuy={
                   <ButtonBuy onClick={() => alert('Click')} icon={<MdShoppingCart size={20} fill={'#fff'} />} btn_style='blue'>Купить</ButtonBuy>
               }>

           </EncodingBlockButtons>
       </EncodingWrapper>
         `}></CollapseAntd>

        <h1>Образец</h1>
        <div className="container-xxl d-flex justify-content-center p-0" style={{ outline: '1px solid #000;background:#eee' }}>
            <Image src={PopularFilters} alt="" />
        </div>
        <h1>Мой</h1>
        <div className="container-xxl d-flex p-0" style={{ outline: '1px solid #000;background:#eee' }}>

            <EncodingWrapper>
                <div className="d-flex justify-content-between">
                    <div className="d-flex gap-2">
                        <div className="d-flex align-items-center p-2 border rounded-2 gap-2 bg-white"
                            style={{ border: '1px solid #E8E8E8' }}>
                            <span style={{fontSize:'16px',fontWeight:'500'}}>Есть в наличии</span>
                            <InputSwitch></InputSwitch>
                        </div>
                        <div className="d-flex align-items-center px-1 border rounded-2 gap-2 bg-white"
                            style={{ border: '1px solid #E8E8E8' }}>
                            <FilterChips title="A-Flow" onClick={() => alert(111)} />
                            <FilterChips title="A-Flow" onClick={() => alert(111)} />
                            <div className="d-flex flex-column">
                                <button className="bg-transparent border-0"><MdArrowDropUp fill="#969696" /></button>
                                <button className="bg-transparent border-0"><MdArrowDropDown fill="#969696" /></button>
                            </div>
                        </div>
                    </div>
                </div>


            </EncodingWrapper>


        </div>



    </>

}