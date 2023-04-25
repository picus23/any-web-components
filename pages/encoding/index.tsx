import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Image from "next/image";
import Link from "next/link";
import reference from "./ref.png";
import EncodingWrapper from "@/components/encoding/EncodingWrapper";
import EncodingPicture from "@/components/encoding/EncodingPicture";
import EncodingBlockText from "@/components/encoding/EncodingBlockText";
import EncodingBlockButtons from "@/components/encoding/EncodingBlockButtons";
import CollapseAntd from "@/components/collapse/CollapseAntd";




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
            <Image src={reference} alt="" />
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
                    price={2}
                    amount={3}
                    onClickBuy={() => alert('Click')}
                    onClickRemove={() => alert('Click')}
                    onClickAdd={() => alert('Click')}>


                </EncodingBlockButtons>
            </EncodingWrapper>

        </div>

        <CollapseAntd title={'Encoding'} text={`
            <EncodingWrapper>
                <EncodingPicture
                    onClickLeft={() => alert('Click')}
                    onClickRight={() => alert('Click')}
                    list_picture={array_picture}>
                </EncodingPicture>

                <EncodingBlockText prop_encodings={prop_encodings} list={list}></EncodingBlockText>
                <EncodingBlockButtons price={2} amount={3}></EncodingBlockButtons>
            </EncodingWrapper>
         `}></CollapseAntd>

    </>

}