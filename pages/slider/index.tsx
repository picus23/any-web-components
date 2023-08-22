import reference from "./ref.png";
import Link from "next/link";
import Image from "next/image";
import ExpoSlider from "@/components/slider/ExpoSlider";
import {useState} from "react";


const values1 = [31, 138, 206, 275, 345, 414, 420, 500, 690, 792, 1034, 1379, 2068, 4137, 6895, 10342];
const values2 = [-20, -7, 0, 1, 10, 50, 100];

export default function () {

    const [current, setCurrent] = useState(1);
    const [values, setValues] = useState<[number, number]>([31, 10341]);
    const [valuess, setValuess] = useState<[number, number]>([0.7, 26]);

    return <>

        <h1>
            Slider
        </h1>
        <Link href='/'>Back</Link>
        <hr/>

        <h1>ОБРАЗЕЦ</h1>
        <div className="container-xxl p-0" style={{outline: '1px solid #000'}}>
            <Image src={reference} alt=""/>
        </div>


        <h1>МОЙ</h1>
        <div className="container-xxl p-0 p-4" style={{outline: '1px solid #000'}}>

            <div>Подопытный</div>
            <>

                <ExpoSlider
                    data={[values1]}
                    minPropValue={values[0]}
                    maxPropValue={values[1]}
                    onTransform={(val:number) => val * 5}
                    widthCanvas={553}
                    heightCanvas={200}
                    onChange={(min, max) => setValues([min, max])}
                    lineWidth={4}
                />

            </>

            {/*<button onClick={() => setCurrent(current + 1)}>click</button>*/}
            {/*{*/}
            {/*    current % 2 == 1 ?*/}
            {/*        <>*/}
            {/*            /!*<Slider range value={values} onChange={(val) => setValues(val)} min={-200} max={8136}/>*!/*/}
            {/*            */}
            {/*            1*/}
            {/*            <ExpoSlider*/}
            {/*                data={[values1]}*/}

            {/*                minPropValue={values[0]}*/}
            {/*                maxPropValue={values[1]}*/}

            {/*                widthCanvas={1191}*/}
            {/*                heightCanvas={300}*/}
            {/*                onChange={(min, max) => setValues([min, max])}*/}
            {/*                lineWidth={4}*/}
            {/*            />*/}
            {/*        </>*/}
            {/*        : <>*/}
            {/*            2*/}
            {/*            <Slider range value={valuess} onChange={(val) => setValuess(val)} min={0.18} max={30}/>*/}
            {/*            <ExpoSlider*/}
            {/*                data={[values2]}*/}
            {/*                */}
            {/*                minPropValue={valuess[0]}*/}
            {/*                maxPropValue={valuess[1]}*/}

            {/*                widthCanvas={1191}*/}
            {/*                heightCanvas={300}*/}
            {/*                onChange={(min, max) => setValuess([min, max])}*/}
            {/*            />*/}
            {/*        </>*/}
            {/*}*/}

        </div>

        <hr/>

    </>
}
