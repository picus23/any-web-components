import reference from "./ref.png";
import Link from "next/link";
import Image from "next/image";
import ExpoSlider from "@/components/slider/ExpoSlider";
import { Tabs, TabsProps } from "antd";
import { useState } from "react";


const values1 = [-120, -90, -75, -30, -25, -21];
const values2 = [-20, -7, 0, 1, 10, 50, 100];

// const values1 = [16, 18, 24, 30, 35, 40, 44, 50, 65, 70, 75, 90, 95, 120, 137, 144, 172, 190, 205, 230, 240, 270, 300, 400, 700];
// const values2 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

// const values1 = [0.18, 0.63, 0.87, 0.93, 1.2, 1.4, 2.34, 3.62, 5.57, 6.42, 7.2, 7.5, 10, 19, 30];
// const values2 = [-0.18, -0.63, -0.87, -0.93, -1.2, -1.4, -2.34, -3.62, -5.57, -6.42, -7.2, -7.5, -10, -19, -30];

// const values1 = [120, 140, 210, 220, 340, 450, 560, 943];
// const values2 = [-120, -140, -210, -220, -340, -450, -560, -943];

export default function () {


    const [current, setCurrent] = useState(1)

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
        <div className="container-xxl p-0 p-4" style={{ outline: '1px solid #000' }}>

            <div>Подопытный</div>
            <button onClick={() => setCurrent(current + 1)}>click</button>
            {
                // current % 3 == 0 
                //     ? current
                //     :
                current % 2 == 1 ?
                    <>
                        1
                        <ExpoSlider
                            data={[values1]}
                            widthCanvas={553}
                            heightCanvas={300}
                            onChange={() => { }}
                            lineWidth={6}
                        />
                    </>
                    : <>
                        2
                        <ExpoSlider
                            data={[values2]}
                            widthCanvas={1000}
                            heightCanvas={300}
                            onChange={() => { }}
                        />
                    </>
            }


            {/* <ExpoSlider
                data_array={[values]}
                widthCanvas={553}
                heightCanvas={300}
                indexOrder={'1'}
            />
            <div className="my-3"></div>
            <ExpoSlider
                data_array={[arr1, arr2, arr3]}
                widthCanvas={553}
                heightCanvas={300}
                indexOrder={'2'}
            /> */}


            {/* <div className="mt-2" style={{ width: 553 / 2 + 'px', height: '20px', background: 'red' }}></div> */}
        </div>

        <hr />

    </>
}
