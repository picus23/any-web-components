import { FC, useEffect, useState } from "react";
import { Slider as SliderA } from "antd";
import { SliderMarks } from "antd/es/slider";
import SliderValueRange from "./SliderValueRange";

interface SliderProps {
    valuesCv?: SliderMarks,
    minValue?: number,
    maxValue?: number,
}

const Slider: FC<SliderProps> = ({ valuesCv, minValue, maxValue }) => {
    let [minDisplayValue, setMinDisplayValue] = useState(minValue ?? 0);
    let [maxDisplayValue, setMaxDisplayValue] = useState(maxValue);

    const values = Object.values(valuesCv).sort((a, b) => valuesCv[a] - valuesCv[b]);

    const maxValueValue = Object.values(valuesCv).reduce((a, b) => valuesCv[a] > valuesCv[b] ? a : b);

    const lenghtValueCv = Object.keys(valuesCv).length

    const distanceBetweenValueOnSlider = maxValueValue / lenghtValueCv

    const changeKeys = {};
    for (let i = 0; i < lenghtValueCv; i++) {
        const distance = distanceBetweenValueOnSlider * i;
        changeKeys[distance] = values[i];
    }

    const maxValueChange = Object.keys(changeKeys).reduce((a, b) => changeKeys[a] > changeKeys[b] ? a : b);

    const onChange = (target: [number, number]) => {
        setMinDisplayValue(target[0]);
        setMaxDisplayValue(target[1]);
    }

    return <>
        <SliderA
            range
            marks={changeKeys}
            defaultValue={[minValue ?? 0, maxValue ?? maxValueChange]}
            max={maxValue ?? maxValueChange}
            min={minValue ?? 0}
            onChange={onChange}
        />

        <div className="d-flex justify-content-between">
            <SliderValueRange
                value={minDisplayValue}
                unit={'cv'}
            />
            <SliderValueRange
                value={maxDisplayValue}
                unit={'cv'}
            />
        </div>




    </>
}

export default Slider;