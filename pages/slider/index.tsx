import reference from "./ref.png";
import Link from "next/link";
import Image from "next/image";
import WrapperSlider from "@/components/slider/WrapperSlider";


const values = [2, 4, 6, 10, 20, 40, 100, 200, 300, 400, 500, 1000, 10000];
const sortedArray = values.sort((a, b) => a - b);
const minValue = Math.min(...sortedArray);
const maxValue = Math.max(...sortedArray);

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

            <WrapperSlider
                width={1000}
                values={values}
                onChange={() => { }}
            />

            {/* <LineChart
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
                <YAxis domain={[0, 10000]} tickCount={10} />

            </LineChart> */}
        </div>

        <hr />

    </>
}
