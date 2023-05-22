import { FC, ReactNode, useState } from "react";
import { Slider as SliderA } from "antd";
import SliderValueRange from "./SliderValueRange";

interface ExpoSliderProps {
    valuesCv: number[],
    minPropValue?: number,
    maxPropValue?: number,
    onChange?: (target: [min: number, max: number]) => void,
    format?: (value: number) => string | ReactNode,
}

interface iChangeKeys {
    [key: number]: number,
}
interface iChangeKeysEmpty {
    [key: string]: string,
}

const ExpoSlider: FC<ExpoSliderProps> = ({ valuesCv, minPropValue, maxPropValue, format, onChange }) => {
    const minValue = Math.min(...valuesCv);
    const maxValue = Math.max(...valuesCv);

    let minDisplayValue = useState(minValue);
    let maxDisplayValue = useState(maxValue);


    // Делю массив на разряды десяток
    let countRank = 0;
    if (maxValue.toString().length > 2) {
        countRank = maxValue.toString().length - 1
    } else {
        countRank = maxValue.toString().length
    }

    console.log(valuesCv)

    let rankValueCv = new Array(countRank);
    let prev = 0;
    let curr = 10;
    var lenghtPrevArr = 0;
    var tempLenght = 0;
    
    for (let i = 0; i < countRank; i++) {
        let position = 0;
        rankValueCv[i] = [];
        if (i > 0) {
            prev = curr;
            curr = String(curr);
            curr += '0';
            curr = Number(curr);

        }
        for (let j = tempLenght; j < valuesCv.length; j++) {

            if (valuesCv[j] >= prev && valuesCv[j] <= curr) {
                rankValueCv[i][position] = valuesCv[j];
                lenghtPrevArr = position;
                position++;
            } else {
                tempLenght += ++lenghtPrevArr;
                break;
            }

        }
    }
    console.log('Дроблённый массив на разряды', rankValueCv)
    // Делю массив на разряды десяток

    let changeKeys: iChangeKeys = {};
    const changeKeysEmpty: iChangeKeysEmpty = {};

    let maxRange: number = 0

    let prevValue = 0;
    rankValueCv.map((array, index) => {

        let rangeEverySubArray = (maxValue / rankValueCv.length) * (index + 1)
        if (index == 0) {
            var firstValue = rangeEverySubArray / 3;
        } else {
            firstValue = 0;
        }

        array.map(item => {
            if (firstValue != 0) {
                changeKeys[firstValue] = item;
                changeKeysEmpty[firstValue] = ' ';
                prevValue = firstValue;
                firstValue = 0;
            } else {
                maxRange = ((rangeEverySubArray - prevValue) / 2) + prevValue;
                prevValue = maxRange;
                changeKeys[maxRange] = item;
                changeKeysEmpty[maxRange] = ' ';
            }
        })
    })
    console.log('Change Keys', changeKeys)

    const formatter = (value: number) => {
        return changeKeys[value];
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
            defaultValue={[minValue ?? minPropValue, maxRange ?? maxPropValue]}
            // min={minValueValue}
            max={maxRange}
            onChange={change}
            tooltip={{ formatter: (value?: number) => format ? format(formatter(value!)) : formatter(value!) }}
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

export default ExpoSlider;



    //     array.map((item, index) => {

    //         if (index === 0) {
    //             let firstValue = ((rangeEverySubArray / 3) * (index + 1)) //1333 | 2666 | 4000
    //             // let firstValue = ((rangeEverySubArray / 3) * (index + 1)) * 2 //1333 | 2666 | 4000
    //             maxRange = firstValue;
    //             prevValue = maxRange;
    //             console.log('First maxRange', maxRange, index)

    //             changeKeys[maxRange] = item;
    //             changeKeysEmpty[maxRange] = ' ';

    //             console.log('First Range', maxRange)

    //         } else {

    //             maxRange = ((rangeEverySubArray - prevValue) / 2) + prevValue;
    //             console.log('Other Range', maxRange)

    //             changeKeys[maxRange] = item;
    //             changeKeysEmpty[maxRange] = ' ';

    //         }
    //     })
    // })

    // let changeKeys : iChangeKeys = {};
    // const changeKeysEmpty : iChangeKeysEmpty = {};

    // let maxRange: number = 0
    // valuesCv.map((itm, index) => {
    //     maxRange = Math.round(distanceBetweenValueOnSlider * index);
    //     changeKeys[maxRange] = itm;
    //     changeKeysEmpty[maxRange] = ' ';
    // })