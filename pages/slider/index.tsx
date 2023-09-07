import reference from "./ref.png";
import Link from "next/link";
import Image from "next/image";
import ExpoSlider from "@/components/slider/ExpoSlider";
import React, {useState} from "react";
import {Slider} from "antd";
import {SliderMarks} from "antd/es/slider";


const values1 = [0, 0.35, 0.37, 0.52, 0.73, 0.86, 2, 2.2, 3, 4.2, 4.3, 4.8, 5, 6, 6.3, 6.4, 7.1, 8, 9.5, 10, 10.3, 12, 12.7, 15, 15.8, 18, 19, 20, 25, 32, 40, 50, 65, 80];
// const values2 = [-20, -7, 0, 1, 10, 50, 100];

export default function () {

    const [values, setValues] = useState<[number, number]>([0, 80]);

    return <>

        <h1>
            Slider
        </h1>
        <Link href='/'>Back</Link>
        <hr/>

        <h1>МОЙ</h1>
        <div className="container-xxl p-0 p-4" style={{outline: '1px solid #000'}}>

            <div>Подопытный</div>
            <>


                {/*<ExpoSlider*/}
                {/*    data={[values1]}*/}
                {/*    minPropValue={values[0]}*/}
                {/*    maxPropValue={values[1]}*/}
                {/*    onTransform={(val: number) => `${val}`}*/}
                {/*    widthCanvas={1000}*/}
                {/*    heightCanvas={200}*/}
                {/*    onChange={(min, max) => setValues([min, max])}*/}
                {/*    lineWidth={4}*/}
                {/*/>*/}

            </>


        </div>

        <hr/>

    </>
}