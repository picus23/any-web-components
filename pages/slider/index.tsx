import reference from "./ref.png";
import Link from "next/link";
import Image from "next/image";
import ExpoSlider from "@/components/slider/ExpoSlider";
import { useState } from "react";
import { Slider } from "antd";


const values1 = [31,138,206,275,345,414,420,500,690,792,1034,1379,2068,4137,6895,10342];
const values2 = [-20, -7, 0, 1, 10, 50, 100];
// const values1 = [31,138,206,275,345,414,420,500,690,792,1034,1379,2068,4137,6895,9999];
// const values2 = [-120, -90, -75, -30, -25, -21];
// const values1 = [0, 2, 4, 6, 10, 20,40,100,200,400,1000,5000,10000];
// const values2 = [-200, -196, -180, -60, -54, -51, -50, -46, -45, -40, -32, -30, -28, -25, -23, -20, -17, -15, 0, 10, 30, 45, 50, 70, 100, 200, 8136];
// const values1 = [-20, -7, 0, 1, 10, 50, 100];

// const values1 = [16, 18, 24, 30, 35, 40, 44, 50, 65, 70, 75, 90, 95, 120, 137, 144, 172, 190, 205, 230, 240, 270, 300, 400, 700];
// const values2 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

// const values1 = [0.18, 0.63, 0.87, 0.93, 1.2, 1.4, 2.34, 3.62, 5.57, 6.42, 7.2, 7.5, 10, 19, 30];
// const values2 = [-0.18, -0.63, -0.87, -0.93, -1.2, -1.4, -2.34, -3.62, -5.57, -6.42, -7.2, -7.5, -10, -19, -30];

// const values1 = [120, 140, 210, 220, 340, 450, 560, 943];
// const values2 = [-120, -140, -210, -220, -340, -450, -560, -943];

// const values3 = [1, 2, 3, 4, 5, 10, 100];


export default function () {


    const [current, setCurrent] = useState(1)
    const [values, setValues] = useState<[number, number]>([31, 10341])
    const [valuess, setValuess] = useState<[number, number]>([0.7, 26])

    // console.log('values', values[0],values[1]);
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
                current % 2 == 1 ?
                    <>
                        {/* <Slider range value={values} step={0.001} onChange={(val) => setValues(val)} min={0.18} max={30}/> */}
                        {/* <input step={0.001} style={{width: '100%'}} type="range" min={1} max={100} value={values[0]}/>
                        <input step={0.001} style={{width: '100%'}} type="range" min={1} max={100} value={values[1]}/> */}
                        
                        1
                        <ExpoSlider
                            data={[values1]}

                            minPropValue={values[0]}
                            maxPropValue={values[1]}

                            widthCanvas={1000}
                            heightCanvas={300}
                            onChange={(min, max) => setValues([min, max])}
                            lineWidth={4}
                        />
                    </>
                    : <>
                        <Slider range value={valuess} onChange={(val) => setValuess(val)} step={0.001} min={0.18} max={30}/>
                        2
                        <ExpoSlider
                            data={[values2]}
                            
                            minPropValue={valuess[0]}
                            maxPropValue={valuess[1]}

                            widthCanvas={1191}
                            heightCanvas={300}
                            onChange={(min, max) => setValuess([min, max])}
                        />
                    </>
            }
        </div>

        <hr />

    </>
}
