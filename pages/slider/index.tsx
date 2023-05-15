import reference from "./ref.png";
import Link from "next/link";
import Image from "next/image";
import Slider from "@/components/slider/Slider";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

const values = [1, 5, 12, 20,22, 30, 100];
const sortedArray = values.sort((a, b) => a - b);
const minValue = Math.min(...sortedArray);
const maxValue = Math.max(...sortedArray);

let data = [
    {
        value : values[0],
    },
    {
        value : values[1],
    },
    {
        value : values[2],
    },
    {
        value : values[3],
    },
    {
        value : values[4],
    },
    {
        value : values[5],
    },
    {
        value : values[6],
    },
];
// values.map(el=> {
//     data[value] = el;
// })
console.log(data)
// const data = [
//     {
//         unit: values[0],
//     },
//     {
//         unit: values[1],
//     },
//     {
//         unit: values[2],
//     },
//     {
//         unit: values[3]
//     },
//     {
//         unit: values[4],
//     },
//     {
//         unit: values[5],
//     },
// ];


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

            <LineChart 
            width={1100} 
            height={300} 
            margin={{
                top:20,
                right:20,
                left:20,
            }} 
            data={data}>

                <Line type="monotone" dataKey="value" stroke="#0085FF" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey=" " /> {/* Ошибка из за hide,если есть. Она делает чистой X */}
                {/* <XAxis dataKey="unit" name=" " />*/}
                <YAxis dataKey="value" domain={[minValue,maxValue]} tickCount={sortedArray.length} />
                {/* <YAxis dataKey="unit" domain={sortedArray} /> */}

            </LineChart>

            {/* <Slider valuesCv={values} minValue={1} maxValue={20}/> */}
            {/* <Slider valuesCv={values} format={(value) => `${value} cv`} /> */}

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