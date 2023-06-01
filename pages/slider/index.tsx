import reference from "./ref.png";
import Link from "next/link";
import Image from "next/image";
import ExpoSliderTest from "@/components/slider/ExpoSlider";


// const values = [1, 10, 100]
const values = [0.18, 0.63, 0.87, 0.93, 1.2, 2.34, 3.62, 5.57, 6.42, 7.2, 7.5, 10, 19,30];
// const values = [2, 4, 6, 10, 20, 40, 100, 200, 300, 400, 500, 1000, 10000];
values.sort((a, b) => a - b);

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


        <h1>МОЙ</h1>
        <div className="container-xxl p-0" style={{ outline: '1px solid #000', width: '1000px' }}>

            <div>Подопытный</div>

            <ExpoSliderTest
                valuesCv={values}
                widthCanvas={1000}
            />

        </div>

        <hr />

    </>
}
