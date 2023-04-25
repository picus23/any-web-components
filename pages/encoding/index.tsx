import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Image from "next/image";
import Link from "next/link";
import reference from "./ref.png";
import EncodingWrapper from "@/components/encoding/EncodingWrapper";
import EncodingPicture from "@/components/encoding/EncodingPicture";




const array_picture = ["/kit/small_pic_encoding.svg", "/kit/small_pic_encoding.svg", "/kit/small_pic_encoding.svg"];
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
            {/* <div className="container-xxl d-flex justify-content-center p-0" style={{ outline: '1px solid #000;background:#eee' }}> */}
            <EncodingWrapper>
                <EncodingPicture list_picture={array_picture}></EncodingPicture>


            </EncodingWrapper>
        </div>

    </>

}