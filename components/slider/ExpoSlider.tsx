import { FC, ReactNode, use, useEffect, useState } from "react";
import Canvas from "./Canvas";

interface ExpoSliderProps {
    valuesCv: number[],
    dataToWrapper?: (data: any) => void,
    widthCanvas: number,
    minPropValue?: number,
    maxPropValue?: number,
}

interface iChangeKeys {
    [key: number]: number,
}
interface iChangeKeysEmpty {
    [key: string]: string,
}

const ExpoSlider: FC<ExpoSliderProps> = ({ valuesCv, minPropValue, maxPropValue, widthCanvas }) => {
    const minValue = Math.min(...valuesCv) ?? minPropValue;
    const maxValue = Math.max(...valuesCv) ?? maxPropValue;

    let [minDisplayValue, setMinDisplayValue] = useState(minValue);
    let [maxDisplayValue, setMaxDisplayValue] = useState(maxValue);

    const handleMinValueChange = (event: any) => {
        setMinDisplayValue(event.target.value)
    }
    const handleMaxValueChange = (event: any) => {
        setMaxDisplayValue(event.target.value)
    }

    // Делю массив на разряды десяток
    let countSubArr = 0;
    if (maxValue.toString().length > 2) {
        countSubArr = maxValue.toString().length - 1
    } else {
        countSubArr = maxValue.toString().length
    }

    // Происходит присвание значений в подмассивы поразрядно
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
    useEffect(() => {
        console.log('TEST Дроблённый массив на разряды', rankValueCv)

    }, [])


    // Здесь высчитывается расстояние для breakpoint (круглешки) на графике
    let changeKeys: iChangeKeys = {};
    const changeKeysEmpty: iChangeKeysEmpty = {};
    let rank: number[] = [];
    let iter: number, maxRange, prevValue = 0;
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


    let valuesFromSlider: number[] = [];
    let arrKeys = Object.keys(changeKeys);
    for (let i = 0; i < arrKeys.length; i++) {
        valuesFromSlider[i] = +arrKeys[i];
    }
    valuesFromSlider[valuesFromSlider.length - 1] = 1000;
    valuesFromSlider.sort((a, b) => a - b);
    console.log('значения',valuesCv)

    // Здесь логика движения пальцев у слайдера и закрашивание breakpoints
    useEffect(() => {
        const progress = document.querySelector(".sliderr .progres") as HTMLElement;
        const breakpoints = document.querySelectorAll<HTMLElement>('.breakpoint');
        breakpoints.forEach(el => {
            let leftValue = +el.style.left.slice(0, 3);
            if (leftValue / 10 > minDisplayValue / maxValue * 100 && leftValue / 10 < maxDisplayValue / maxValue * 100) {
                el.classList.add('breakpoint-active')
            } else {
                el.classList.add('breakpoint')
                el.classList.remove('breakpoint-active')
            }
        })
        progress.style.left = minDisplayValue / maxValue * 100 + '%';
        progress.style.right = 100 - (maxDisplayValue / maxValue * 100) + '%';
    },[])

    console.log('Change Keys', valuesFromSlider)
    return <>
        <Canvas
            width={1000}
            height={300}
            valuesFromSlider={valuesFromSlider}
            valuesCv={valuesCv}
            rank={rank}
        />

        {/* Заполнение цветной полосы (СТИЛИ) задаётся в style.scss -> .progres left | right */}
        <div className="sliderr">
            <div className="progres"></div>
        </div>
        <div className="range-input">
            <input type="range" className="range-min cs" min={minValue} max={maxValue} value={minDisplayValue} onChange={handleMinValueChange} onClick={handleMinValueChange} />
            <input type="range" className="range-max cs" min={minValue} max={maxValue} value={maxDisplayValue} onChange={handleMaxValueChange} />
        </div>

        <div className="d-flex justify-content-between my-5">
            <div>
                <p>Min: {minDisplayValue}</p>
                <input type="number" onChange={handleMinValueChange} value={minDisplayValue} />
            </div>
            <div>
                <p>Max: {maxDisplayValue}</p>
                <input type="number" onChange={handleMaxValueChange} value={maxDisplayValue} />
            </div>
        </div>

        {/* <div className="d-flex justify-content-between mt-5">
            <ValueInput
                value={minDisplayValue}
                unit={'cv'}
            />
            <ValueInput
                value={maxDisplayValue}
                unit={'cv'}
            />
        </div> */}

    </>
}

export default ExpoSlider;