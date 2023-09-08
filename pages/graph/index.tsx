import React, {useEffect, useState} from "react";
import GraphScale from "@/components/graph/GraphScale";
import GraphDelimeter from "@/components/graph/GraphDelimeter";
import Graph from "@/components/graph/Graph";
import {Slider} from "antd";


const values1: { [key: string]: number } =
    // {
    //     '0': 1,
    //     '5':1,
    //     '9': 1,
    //     '12': 1,
    //     '50': 1,
    // }

    {
    '0': 2,
    '0.35': 13,
    '0.37': 9,
    '0.52': 18,
    '0.73': 253,
    '0.86': 48,
    '2.2': 66,
    '4.2': 97,
    '4.3': 820,
    '4.8': 121,
    '5': 1224,
    '6': 135,
    '6.3': 148,
    '6.4': 154,
    '7.1': 164,
    '8': 176,
    '9.5': 188,
    '10': 199,
    '10.3': 207,
    '12': 214,
    '12.7': 223,
    '15': 232,
    '15.8': 247,
    '18': 251,
};
export default function () {

    let [valueMin, setValueMin] = useState(0)
    let [valueMax, setValueMax] = useState(18)
    let getValues = () => {
        setValueMin(Number(document.querySelector('.ant-slider-handle-1')!.getAttribute('aria-valuenow')));
        setValueMax(Number(document.querySelector('.ant-slider-handle-2')!.getAttribute('aria-valuenow')));
        console.log({valueMin, valueMax})
    }

    return <div className="p-5" style={{width: 1800}}>
        <Graph
            data={values1}
            valuesFromSlider={[valueMin,valueMax]}
            isWaiting={false}
        />
        <Slider
            range={{draggableTrack: true}}
            min={0}
            max={18}
            defaultValue={[0, 18]}
            step={0.01}
            onChange={getValues}
            onAfterChange={getValues}
        />

    </div>

}
