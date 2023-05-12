import reference from "./ref.png";
import Link from "next/link";
import Image from "next/image";
import Slider from "@/components/slider/Slider";
import Graph from "@/components/slider/Graph";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import { VictoryChart,VictoryLine } from "victory";

const values = [0.0111, 5, 12, 20, 100];
const data = [
    {
        name: values[0],
        cv: values[0],
        name1: values[0],
    },
    {
        name: values[1],
        cv: values[1],
    },
    {
        name: values[2],
        cv: values[2],
    },
    {
        name: values[3],
        cv: values[3],
    },
    {
        name: values[4],
        cv: values[4],
    },
];

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

            <LineChart width={600} height={300} data={data}>
                <Line type="monotone" dataKey="cv" stroke="#0085FF" />
                <CartesianGrid stroke="#ccc" />
                <XAxis hide dataKey=" " /> Ошибка из за hide
                <YAxis name="" />
            </LineChart>

            {/* <Slider valuesCv={values} minValue={1} maxValue={20}/> */}
            <Slider valuesCv={values} format={(value) => `${value} cv`} />

            {/* <VictoryChart
                theme={VictoryTheme.material}
            >
                <VictoryLine
                    style={{
                        data: { stroke: "#0085FF" },
                        parent: { border: "1px solid #ccc" }
                    }}
                    data={[
                        { x: 1, y: values[0] },
                        { x: 2, y: values[1] },
                        { x: 3, y: 5 },
                        { x: 4, y: 4 },
                        { x: '', y: 7 }
                    ]}
                />
            </VictoryChart> */}
        </div>

        <hr />

    </>
}