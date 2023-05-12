import { FC, useEffect } from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

interface GraphProps {

}

const Graph: FC<GraphProps> = ({ }) => {
    // useEffect(() => {
    //     let canvas = document.querySelector('#my-canvas')
    //     console.log(canvas)
    //     let ctx = canvas.getContext('2d')
    // })
    const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 }];
    return <>
        {/* <canvas height={200} width={1000} id="my-canvas" /> */}
        <LineChart width={600} height={300} data={data}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
        </LineChart>

    </>
}

export default Graph;