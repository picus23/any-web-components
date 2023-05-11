import reference from "./ref.png";
import Link from "next/link";
import Image from "next/image";
import Slider from "@/components/slider/Slider";


const values =
{
    1.18: 1.18,
    0.09: 0.09,
    30: 30,
    0.14: 0.14,
    2: 2,
    0.48: 0.48,
    14: 14,
    58: 58,
};

export default function () {
    return <>
        <h1>
            Slider
        </h1>
        <Link href='/'>Back</Link>
        <hr />

        <h1>ОБРАЗЕЦ</h1>
        <div className="container-xxl p-0" style={{ outline: '1px solid #000' }}>
            <Image src={reference} alt="" />
        </div>

        <hr />

        <h1>МОЙ</h1>
        <div className="container-xxl" style={{ outline: '1px solid #000' }}>
            <Slider valuesCv={values} />
        </div>

        <hr />

    </>
}