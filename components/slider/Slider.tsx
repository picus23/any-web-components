import { FC, ReactNode, useEffect, useState } from "react";
import { Slider as SliderA } from "antd";
import { SliderMarks } from "antd/es/slider";
import SliderValueRange from "./SliderValueRange";

interface SliderProps {
    valuesCv: number[],
    minPropValue?: number,
    maxPropValue?: number,
    onChange: (target: [min: number, max: number]) => void,
    format?: (value: number) => string | ReactNode,
}

const Slider: FC<SliderProps> = ({ valuesCv, minPropValue, maxPropValue, format, onChange}) => {
    const sortedArray = valuesCv.sort((a, b) => a - b);

    const lenghtValueCv = sortedArray.length

    const minValueValue = Math.min(...sortedArray);
    const maxValueValue = Math.max(...sortedArray);

    let [minDisplayValue, setMinDisplayValue] = useState(minValueValue);
    let [maxDisplayValue, setMaxDisplayValue] = useState(maxValueValue);



    const distanceBetweenValueOnSlider = maxValueValue / lenghtValueCv;

    const changeKeys = {};
    const changeKeysEmpty = {};
    let maxRange = 0
    sortedArray.map((itm, index) => {
        maxRange = Math.round(distanceBetweenValueOnSlider * index)
        changeKeys[maxRange] = itm;
        changeKeysEmpty[maxRange] = ' '
    })

    const formatter = (value: number) => {
        return changeKeys[value]
    };

    const change = (target: [number, number]) => {
        onChange([
            formatter(target[0]), 
            formatter(target[1])
        ]);
    }

    return <>
        <SliderA
            range
            marks={changeKeysEmpty}
            defaultValue={[minValueValue ?? minPropValue, maxRange ?? maxPropValue]}
            // min={minValueValue}
            max={maxRange}
            onChange={change}
            tooltip={{ formatter: (value: number) => format ? format(formatter(value)) : formatter(value) }}
            step={null}
        />
    </>
}

export default Slider;