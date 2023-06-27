import reference from "./ref.png";
import Link from "next/link";
import Image from "next/image";
import ExpoSlider from "@/components/slider/ExpoSlider";
import { useState } from "react";
import { Slider } from "antd";


// const values1 = [-120, -90, -75, -30, -25, -21];
// const values2 = [-20, -7, 0, 1, 10, 50, 100];
const values2 = [-200, -196, -180, -60, -54, -51, -50, -46, -45, -40, -32, -30, -28, -25, -23, -20, -17, -15, 0, 10, 30, 45, 50, 70, 100, 200, 8136];

// const values1 = [16, 18, 24, 30, 35, 40, 44, 50, 65, 70, 75, 90, 95, 120, 137, 144, 172, 190, 205, 230, 240, 270, 300, 400, 700];
// const values2 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

const values1 = [0.18, 0.63, 0.87, 0.93, 1.2, 1.4, 2.34, 3.62, 5.57, 6.42, 7.2, 7.5, 10, 19, 30];
// const values2 = [-0.18, -0.63, -0.87, -0.93, -1.2, -1.4, -2.34, -3.62, -5.57, -6.42, -7.2, -7.5, -10, -19, -30];

// const values1 = [120, 140, 210, 220, 340, 450, 560, 943];
// const values2 = [-120, -140, -210, -220, -340, -450, -560, -943];

export default function () {


    const [current, setCurrent] = useState(1)
    const [values, setValues] = useState<[number, number]>([-187, -7])
    const [valuess, setValuess] = useState<[number, number]>([0.7, 26])

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
                        <Slider range value={values} onChange={(val) => setValues(val)} min={-200} max={8136}/>
                        
                        1
                        <ExpoSlider
                            data={[values2]}

                            minPropValue={values[0]}
                            maxPropValue={values[1]}

                            widthCanvas={1191}
                            heightCanvas={300}
                            onChange={(min, max) => setValues([min, max])}
                            lineWidth={4}
                        />
                    </>
                    : <>
                        2
                        <Slider range value={valuess} onChange={(val) => setValuess(val)} min={0.18} max={30}/>
                        <ExpoSlider
                            data={[values1]}
                            
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
