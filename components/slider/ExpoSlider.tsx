import { FC, ReactNode, use, useEffect, useState } from "react";
import Canvas from "./Canvas";

interface ExpoSliderProps {
    data_array: [],
    dataToWrapper?: (data: any) => void,
    widthCanvas: number,
    heightCanvas: number,
    minPropValue?: number,
    maxPropValue?: number,
    indexOrder: string,
}

interface iChangeKeys {
    [key: number]: number,
}
interface iChangeKeysEmpty {
    [key: string]: string,
}

const ExpoSlider: FC<ExpoSliderProps> = ({ data_array, minPropValue, maxPropValue, widthCanvas, heightCanvas, indexOrder}) => {
    const valuesCv = data_array.flat(Infinity);
    valuesCv.sort((a, b) => a - b);

    let minValue = minPropValue ?? Math.min(...valuesCv);
    let maxValue = maxPropValue ?? Math.max(...valuesCv);

    let [minDisplayValue, setMinDisplayValue] = useState(minValue);
    let [maxDisplayValue, setMaxDisplayValue] = useState(maxValue);

    const handleMinValueChange = (event: any) => {
        setMinDisplayValue(event.target.value)
    }
    const handleMaxValueChange = (event: any) => {
        setMaxDisplayValue(event.target.value)
    }

    // Делю массив на разряды десяток | Вычисление кол-ва подмассивов
    let comparisonArray = [-1000, -100, -10, -1, 0, 1, 10, 100, 1000, 10000, 100000];
    let countSubArr = 0;
    var j = 0;
    for (let i = 0; i < comparisonArray.length + 1; i++) {
        if (valuesCv[j] >= comparisonArray[i] && valuesCv[j] <= comparisonArray[i + 1] || valuesCv[j] <= comparisonArray[i] && valuesCv[j] >= comparisonArray[i + 1]) {
            while (valuesCv[j] >= comparisonArray[i] && valuesCv[j] <= comparisonArray[i + 1] || valuesCv[j] <= comparisonArray[i] && valuesCv[j] >= comparisonArray[i + 1]) {
                j++;
            }
            countSubArr++;
        }
    }

    // Происходит присвание значений в подмассивы поразрядно
    let rankValueCv = new Array(countSubArr);
    var lenghtPrevArr, tempLenght = 0;
    let prev, curr, indexComparisonArray = 0;

    for (let i = 0; i < countSubArr; i++) {
        let position = 0;
        rankValueCv[i] = [];
        for (let j = tempLenght; j < valuesCv.length; j++) {
            prev = comparisonArray[indexComparisonArray];
            curr = comparisonArray[indexComparisonArray + 1];

            if (valuesCv[j] >= prev && valuesCv[j] <= curr || valuesCv[j] <= comparisonArray[i] && valuesCv[j] >= comparisonArray[i + 1]) {
                rankValueCv[i][position] = valuesCv[j];
                lenghtPrevArr = position;
                position++;

            } else if (rankValueCv[i].length === 0) {
                j--;
                indexComparisonArray++;
                continue;
            }
            else {
                tempLenght += ++lenghtPrevArr;
                indexComparisonArray++;
                break;
            }

        }
    }


    // Здесь высчитывается расстояние для breakpoint (круглешки) на графике
    let changeKeys: iChangeKeys = {};
    let changeKeysEmpty: iChangeKeysEmpty = {};
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
                maxRange = Math.ceil(((rangeEverySubArray - prevValue) / 6) + prevValue);                   //Здесь расчёт расстояния между значениями
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
    valuesFromSlider.sort((a, b) => a - b);

    // Здесь логика движения пальцев у слайдера и закрашивание breakpoints
    useEffect(() => {
        const progress = document.querySelector('.sliderr .progres-' + indexOrder) as HTMLElement;
        console.log(progress)
        const breakpoints = document.querySelectorAll<HTMLElement>('.breakpoint-' + indexOrder);
        breakpoints.forEach(el => {
            let leftValue = +el.style.left.slice(0, el.style.left.length - 2); // Убирает из строки px
            if (leftValue > minDisplayValue / maxValue * widthCanvas && leftValue < maxDisplayValue / maxValue * widthCanvas) { // Активно, если breakpoint больше левого пальца и меньше правого
                el.classList.add('breakpoint-active')
            } else {
                el.classList.add('breakpoint')
                el.classList.remove('breakpoint-active')
            }
        })
        if (maxValue < 0) {
            progress.style.left = Math.abs((minDisplayValue / maxValue) * 100) + '%';
            progress.style.right = Math.abs(100 - ((maxDisplayValue / maxValue) * 100)) + '%';
        }
        else if (minValue < 0) {
            progress.style.left = Math.abs((minDisplayValue / maxValue) * 100) + '%';
            progress.style.right = 100 - ((maxDisplayValue / maxValue) * 100) + '%';
        } else {
            progress.style.left = (minDisplayValue / maxValue) * 100 + '%';
            progress.style.right = 100 - ((maxDisplayValue / maxValue) * 100) + '%';
        }

        let fromKey = 0
        let toKey = 0
        let currentPosition = Math.floor(minDisplayValue / maxValue * widthCanvas);
        for (let key in valuesFromSlider) {
            if (currentPosition < valuesFromSlider[key]) {
                fromKey = Number(key) - 1
                toKey = Number(key)
                break;
            }
        }
        const pixFrom = valuesFromSlider[fromKey];
        const pixTo = valuesFromSlider[toKey];

        const valFrom = valuesCv[fromKey];
        const valTo = valuesCv[toKey];

        let differencePix = pixTo - pixFrom;
        let differenceCurrentPix = currentPosition - pixFrom

        let currentValue = (valTo - valFrom) * (differenceCurrentPix / differencePix) + valFrom;

        console.log({ valFrom, valTo, pixFrom, currentPosition, pixTo, currentValue })
    })



    console.log('Дроблённый массив на разряды', rankValueCv);
    console.log('Change Keys', changeKeys);

    return <>
        <Canvas
            width={widthCanvas}
            height={heightCanvas}
            valuesFromSlider={valuesFromSlider}
            valuesCv={valuesCv}
            rank={rank}
            indexOrder={indexOrder}
        />

        {/* Заполнение цветной полосы (СТИЛИ) задаётся в style.scss -> .progres left | right */}
        <div style={{ width: widthCanvas }} className="sliderr">
            <div className={'progres progres-' + indexOrder}></div>
        </div>
        <div style={{ width: widthCanvas }} className="range-input">
            <input style={{ width: widthCanvas }} type="range" className="range-min cs" min={minValue} max={maxValue} value={minDisplayValue} onChange={handleMinValueChange} />
            <input style={{ width: widthCanvas }} type="range" className="range-max cs" min={minValue} max={maxValue} value={maxDisplayValue} onChange={handleMaxValueChange} />
        </div>

        {/* <div className="d-flex justify-content-between my-5">
            <div>
                <p>Min: {minDisplayValue}</p>
                <input type="number" onChange={handleMinValueChange} value={minDisplayValue} />
            </div>
            <div>
                <p>Max: {maxDisplayValue}</p>
                <input type="number" onChange={handleMaxValueChange} value={maxDisplayValue} />
            </div>
        </div> */}

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