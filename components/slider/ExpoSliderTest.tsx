import { FC, ReactNode, use, useEffect, useState } from "react";
import { Slider as SliderA } from "antd";
import SliderValueRange from "./SliderValueRange";
import CanvasTest from "./CanvasTest";

interface ExpoSliderTestProps {
    valuesCv: number[],
    dataToWrapper?: (data: any) => void,
    widthCanvas: number,
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

const ExpoSliderTest: FC<ExpoSliderTestProps> = ({ valuesCv, minPropValue, maxPropValue, format, onChange, widthCanvas }) => {
    const minValue = Math.min(...valuesCv) ?? minPropValue;
    const maxValue = Math.max(...valuesCv) ?? maxPropValue;



    // Делю массив на разряды десяток
    let countSubArr = 0;
    if (maxValue.toString().length > 2) {
        countSubArr = maxValue.toString().length - 1
    } else {
        countSubArr = maxValue.toString().length
    }

    let rankValueCv = new Array(countSubArr);
    let prev = 0;
    let curr = 10;
    var lenghtPrevArr = 0;
    var tempLenght = 0;

    for (let i = 0; i < countSubArr; i++) {
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
    console.log('TEST Дроблённый массив на разряды', rankValueCv)
    // Делю массив на разряды десяток

    let changeKeys: iChangeKeys = {};
    const changeKeysEmpty: iChangeKeysEmpty = {};

    let rank: number[] = [];
    let iter = 0;

    let maxRange: number = 0

    let prevValue = 0;

    // Здесь высчитывается расстояние для точек на слайдере
    rankValueCv.map((array, index) => {
        let rangeEverySubArray = (widthCanvas / countSubArr) * (index + 1)
        if (index == 0) {
            var firstValue = 0;
        } else {
            firstValue = 1;
        }
        // Подмассив (разряды до 10,100,1000 и т.д.)
        array.map((item, index) => {
            if (firstValue == 0) {
                changeKeys[firstValue] = item;
                changeKeysEmpty[firstValue] = ' ';
                prevValue = firstValue;
                firstValue = 1;
            }
            else if (index == array.length - 1) {
                prevValue = rangeEverySubArray;
                changeKeys[rangeEverySubArray] = item;
                changeKeysEmpty[rangeEverySubArray] = ' ';
                rank[iter] = item;
                iter++;
            }
            else {
                maxRange = Math.ceil(((rangeEverySubArray - prevValue) / 2) + prevValue);
                prevValue = maxRange;
                changeKeys[maxRange] = item;
                changeKeysEmpty[maxRange] = ' ';
            }
        })
    })


    const formatter = (value: number) => {
        return changeKeys[value];
    };

    const change = (target: [number, number]) => {
        onChange!([
            formatter(target[0]),
            formatter(target[1])
        ]);
    }
    console.log('Расстояния для Слайдера', changeKeys)

    let valuesFromSlider: number[] = [];
    let arrKeys = Object.keys(changeKeys);
    for (let i = 0; i < arrKeys.length; i++) {
        valuesFromSlider[i] = +arrKeys[i];
    }

    valuesFromSlider[valuesFromSlider.length - 1] = 1000;
    // dataToWrapper!(valuesFromSlider);

    let [minDisplayValue, setMinDisplayValue] = useState(minValue);
    let [maxDisplayValue, setMaxDisplayValue] = useState(maxValue);

    const handleMinValueChange = (event: any) => {
        setMinDisplayValue(event.target.value)
    }
    const handleMaxValueChange = (event: any) => {
        setMaxDisplayValue(event.target.value)
    }

    useEffect(() => {
        const progress = document.querySelector(".sliderr .progres") as HTMLElement;
        const breakpoints = document.querySelectorAll<HTMLElement>('.breakpoint');
        let gap = maxValue / 100 * 10;
        breakpoints.forEach(el => {
            let leftValue = +el.style.left.slice(0, 3);
            if (leftValue / 10 > minDisplayValue / maxValue * 100 && leftValue / 10 < maxDisplayValue / maxValue * 100) {
                el.classList.add('breakpoint-active')
            } else {
                el.classList.add('breakpoint')
                el.classList.remove('breakpoint-active')
            }
        })
        if (maxDisplayValue - minDisplayValue < gap) {
            setMinDisplayValue(maxDisplayValue - gap);
        }
        progress.style.left = minDisplayValue / maxValue * 100 + '%';
        progress.style.right = 100 - (maxDisplayValue / maxValue * 100) + '%';
    })

    return <>
        <CanvasTest
            width={1000}
            height={300}
            valuesFromSlider={valuesFromSlider}
            valuesCv={valuesCv}
            rank={rank}
        />

        {/* Заполнение цветной полосы (СТИЛИ) задаётся в style.scss -> progres left | right */}
        <div className="sliderr">
            <div className="progres"></div>
        </div>
        <div className="range-input">
            <input type="range" className="range-min cs" min={minValue} max={maxValue} value={minDisplayValue} onChange={handleMinValueChange} />
            <input type="range" className="range-max cs" min={minValue} max={maxValue} value={maxDisplayValue} onChange={handleMaxValueChange} />
        </div>

        <div className="d-flex justify-content-between mt-5">
            <SliderValueRange
                value={minDisplayValue}
                unit={'cv'}
            />
            <SliderValueRange
                value={maxDisplayValue}
                unit={'cv'}
            />
        </div>



        {/* <SliderA
            range
            marks={changeKeys}
            defaultValue={[minValue ?? minPropValue, maxRange ?? maxPropValue]}
            // min={minValueValue}
            max={maxRange}
            onChange={change}
            tooltip={{ formatter: (value?: number) => format ? format(formatter(value!)) : formatter(value!) }}
            step={null}
        /> */}

    </>
}

export default ExpoSliderTest;