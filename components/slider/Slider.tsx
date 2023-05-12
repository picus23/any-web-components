import { FC, ReactNode, useEffect, useState } from "react";
import { Slider as SliderA } from "antd";
import { SliderMarks } from "antd/es/slider";
import SliderValueRange from "./SliderValueRange";

interface SliderProps {
    valuesCv: number[],
    minPropValue?: number,
    maxPropValue?: number,
    format?: (value: number) => string | ReactNode,
}

const Slider: FC<SliderProps> = ({ valuesCv, minPropValue, maxPropValue, format }) => {
    const sortedArray = valuesCv.sort((a, b) => a - b);

    const lenghtValueCv = sortedArray.length

    const minValueValue = Math.min(...sortedArray);
    const maxValueValue = Math.max(...sortedArray);

    let [minDisplayValue, setMinDisplayValue] = useState(minValueValue);
    let [maxDisplayValue, setMaxDisplayValue] = useState(maxValueValue);



    const distanceBetweenValueOnSlider = maxValueValue / lenghtValueCv;

    const changeKeys = {};
    let maxRange = 0
    sortedArray.map((itm, index) => {
        maxRange = Math.round(distanceBetweenValueOnSlider * index)
        changeKeys[maxRange] = itm;
    })

    const formatter = (value: number) => {
        return changeKeys[value]
    };

    const onChange = (target: [number, number]) => {
        setMinDisplayValue(formatter([target[0]]));
        setMaxDisplayValue(formatter([target[1]]));
    }

    return <>
        <SliderA
            range
            marks={changeKeys}
            defaultValue={[minValueValue ?? minPropValue, maxRange ?? maxPropValue]}
            // min={minValueValue}
            max={maxRange}
            onChange={onChange}
            tooltip={{ formatter: (value: number) => format ? format(formatter(value)) : formatter(value) }}
            step={null}
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
// import { FC, useEffect, useState } from "react";
// import { Slider as SliderA } from "antd";
// import { SliderMarks } from "antd/es/slider";
// import SliderValueRange from "./SliderValueRange";

// interface SliderProps {
//     valuesCv?: SliderMarks,
//     minValue?: number,
//     maxValue?: number,
// }

// const Slider: FC<SliderProps> = ({ valuesCv, minValue, maxValue }) => {
//     let [minDisplayValue, setMinDisplayValue] = useState(minValue ?? 0);
//     let [maxDisplayValue, setMaxDisplayValue] = useState(maxValue);

//     const values = Object.values(valuesCv).sort((a, b) => valuesCv[a] - valuesCv[b]);

//     const maxValueValue = Object.values(valuesCv).reduce((a, b) => valuesCv[a] > valuesCv[b] ? a : b);

//     const lenghtValueCv = Object.keys(valuesCv).length

//     const distanceBetweenValueOnSlider = maxValueValue / lenghtValueCv

//     const changeKeys = {};
//     for (let i = 0; i < lenghtValueCv; i++) {
//         const distance = distanceBetweenValueOnSlider * i;
//         changeKeys[distance] = values[i];
//     }

//     const maxValueChange = Object.keys(changeKeys).reduce((a, b) => changeKeys[a] > changeKeys[b] ? a : b);

//     const onChange = (target: [number, number]) => {
//         setMinDisplayValue(target[0]);
//         setMaxDisplayValue(target[1]);
//     }

//     return <>
//         <SliderA
//             range
//             marks={changeKeys}
//             defaultValue={[minValue ?? 0, maxValue ?? maxValueChange]}
//             max={maxValue ?? maxValueChange}
//             min={minValue ?? 0}
//             onChange={onChange}
//         />

//         <div className="d-flex justify-content-between">
//             <SliderValueRange
//                 value={minDisplayValue}
//                 unit={'cv'}
//             />
//             <SliderValueRange
//                 value={maxDisplayValue}
//                 unit={'cv'}
//             />
//         </div>




//     </>
// }

// export default Slider;