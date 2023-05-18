import reference from "./ref.png";
import Link from "next/link";
import Image from "next/image";
import Slider from "@/components/slider/Slider";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import ExpoSlider from "@/components/slider/ExpoSlider";
import { Tooltip } from "antd";

const values = [2,4,6,10,20,40,100,200,400,1000,5000,10000];
const sortedArray = values.sort((a, b) => a - b);
const minValue = Math.min(...sortedArray);
const maxValue = Math.max(...sortedArray);

let data = [
    {
        value: values[0],
    },
    {
        value: values[1],
    },
    {
        value: values[2],
    },
    {
        value: values[3],
    },
    {
        value: values[4],
    },
    {
        value: values[5],
    },
    {
        value: values[6],
    },
    {
        value: values[7],
    },
    {
        value: values[8],
    },
    {
        value: values[9],
    },
    {
        value: values[10],
    },
    {
        value: values[11],
    },
];
console.log(data);
console.log(sortedArray.length);


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
        <div className="container-xxl p-0" style={{ outline: '1px solid #000',width:'1000px'}}>

            <LineChart
                width={1000}
                height={300}
                margin={{
                    top: 20,
                    right: 20,
                    left: 20,
                }}
                data={data}
            >

                <Line type="monotone" dataKey="value" stroke="#0085FF" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="value" /> 
                <YAxis domain={[0,10000]} tickCount={10}/>

            </LineChart>

            <ExpoSlider
                valuesCv={sortedArray}
                onChange={() => { }}
            />

            {/* <Slider
             valuesCv={values}
              format={(value) => `${value} cv`} 
              onChange={()=>{}}
              /> */}
        </div>

        <hr />

    </>
}