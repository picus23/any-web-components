import reference from "./ref.png";
import Link from "next/link";
import Image from "next/image";
import Slider from "@/components/slider/Slider";


const values =
{
    1.18: '1.18 cv',
    0.09: '0.09 cv',
    30: '30 cv',
    0.14: '0.14 cv',
    2: '2 cv',
    0.48: '0.48 cv',
    14: '14 cv',
    58: '58 cv',
};
// const marks: SliderMarks = {
//     0.09: '0.09 cv',
//     0.14: '0.14 cv',
//     0.48: '0.48 cv',
//     1.18: '1.18 cv',
//     2: '2 cv',
//     14: '14 cv',
//     30: '30 cv',
// };

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