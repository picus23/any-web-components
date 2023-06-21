import { FC, ReactNode, use, useEffect, useState } from "react";
import Canvas from "./Canvas";

interface ExpoSliderProps {
    data: [],
    dataToWrapper?: (data: any) => void,
    widthCanvas: number,
    heightCanvas: number,
    minPropValue?: number,
    maxPropValue?: number,
    lineWidth?: number,
    onChange: (min: number, max: number) => void,
}

interface iChangeKeys {
    [key: number]: number,
}
interface iChangeKeysEmpty {
    [key: string]: string,
}

const ExpoSlider: FC<ExpoSliderProps> = ({ data, minPropValue, maxPropValue, widthCanvas, heightCanvas, onChange, lineWidth = 2 }) => {
    const valuesCv = data.flat(Infinity);
    valuesCv.sort((a, b) => a - b);

    let minValue = minPropValue ?? Math.min(...valuesCv);
    let maxValue = maxPropValue ?? Math.max(...valuesCv);

    let [minDisplayValue, setMinDisplayValue] = useState(0);
    let [maxDisplayValue, setMaxDisplayValue] = useState(100);
    useEffect(() => {
        setMaxDisplayValue(100);
        setMinDisplayValue(0);
    }, [maxValue, minValue])


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

    // Здесь высчитывается расстояние между значениями (breakpoint (круглешки),числа, текст и т.д.) на графике
    let changeKeys: iChangeKeys = {};
    let changeKeysEmpty: iChangeKeysEmpty = {};
    let rank: number[] = [];
    let iter = 0;
    let maxRange = 0;
    let prevValue = 0;
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

    // Здесь создаётся массив с позициями
    let valuesFromSlider: number[] = [];
    let arrKeys = Object.keys(changeKeys);
    for (let i = 0; i < arrKeys.length; i++) {
        valuesFromSlider[i] = +arrKeys[i];
    }
    valuesFromSlider.sort((a, b) => a - b);

    // Здесь логика движения пальцев у слайдера и закрашивание breakpoints
    useEffect(() => {
        const progress = document.querySelector('.sliderr .progres') as HTMLElement;
        const breakpoints = document.querySelectorAll<HTMLElement>('.breakpoint');
        breakpoints.forEach(el => {
            let breakpoint_pos = +el.style.left.slice(0, el.style.left.length - 2); // Убирает из строки px
            if (breakpoint_pos > currentPosition && breakpoint_pos < currentPositionMax) { // Активно, если breakpoint больше левого пальца и меньше правого
                el.classList.add('breakpoint-active')
            } else {
                el.classList.add('breakpoint')
                el.classList.remove('breakpoint-active')
            }
        })
        // Закрашивание синей полосы
        if (maxValue < 0) {
            progress.style.left = Math.abs(((minDisplayValue))) + '%';
            progress.style.right = Math.abs(100 - maxDisplayValue) + '%';
        }
        else if (minValue < 0) {
            progress.style.left = Math.abs(minDisplayValue) + '%';
            progress.style.right = 100 - maxDisplayValue + '%';
        } else {
            progress.style.left = minDisplayValue + '%';
            progress.style.right = 100 - maxDisplayValue + '%';
        }
    })

    // Здесь считаются корректные значения ползунка (которые отображаются) 
    let fromKey = 0;
    let toKey = 0;
    let fromKeyMax = 0;
    let toKeyMax = 0;
    let currentPosition = 0;
    let currentPositionMax = 0;
    let reverseValuesFromSlider: number[] = [];
    let reverseValuesCv: number[] = [];
    let k = 0;
    // Переворачивание массивов для расчитывания Позиции отрицательных чисел
    // Переворачивание массива с позициями
    for (let i = valuesFromSlider.length - 1; i >= 0; i--) {
        reverseValuesFromSlider[k] = valuesFromSlider[i];
        k++;
    }
    k = 0;
    // Переворачивание массива со значениями
    for (let i = valuesCv.length - 1; i >= 0; i--) {
        reverseValuesCv[k] = valuesCv[i];
        k++;
    }
    // Конец переворачивания

    // Расчёт Current Position (зависит от данных, которые отображаются на отрезке (числа)) для положительных / отрицательных значений
    // Если отрицательное и МИН и МАКС
    if (maxValue < 0) {
        currentPosition = Math.floor(Math.abs((minDisplayValue * widthCanvas) / 100));
        currentPositionMax = Math.ceil(Math.abs(maxDisplayValue * widthCanvas / 100));
    }
    // Если отрицательное только MIN
    else if (minValue < 0) {
        currentPosition = Math.floor(Math.abs((minDisplayValue * widthCanvas) / 100));
        currentPositionMax = Math.ceil((maxDisplayValue * widthCanvas) / 100);
    }
    // Если положительные и МИН и МАКС
    else {
        currentPosition = Math.floor((minDisplayValue * widthCanvas) / 100);
        currentPositionMax = Math.ceil((maxDisplayValue * widthCanvas) / 100);
    }

    // Отрезок между левым и правым значением Для положительных значений
    // Позиция для MIN
    for (let key in valuesFromSlider) {
        if (currentPosition < valuesFromSlider[key]) {
            fromKey = Number(key) - 1
            toKey = Number(key)
            break;
        }
    }
    // Позиция для MAX
    for (let key in reverseValuesFromSlider) {
        if (currentPositionMax > reverseValuesFromSlider[key]) {
            fromKeyMax = Number(key)
            toKeyMax = Number(key) - 1
            break;
        }
    }

    // Отрезок между левым и правым значением Для отрицательных значений
    // Позиция для MIN
    for (let key in reverseValuesFromSlider) {
        if (currentPosition < valuesFromSlider[key]) {
            fromKey = Number(key)
            toKey = Number(key) - 1
            break;
        }
    }
    // Позиция для MAX
    for (let key in valuesFromSlider) {
        if (currentPositionMax > reverseValuesFromSlider[key]) {
            fromKeyMax = Number(key) - 1
            toKeyMax = Number(key)
            break;
        }
    }

    // Current Value для положительных значений
    if (minValue >= 0 && maxValue >= 0) {
        // MIN
        const pixFrom = valuesFromSlider[fromKey];
        const pixTo = valuesFromSlider[toKey];

        const valFrom = valuesCv[fromKey];
        const valTo = valuesCv[toKey];

        let differencePix = pixTo - pixFrom;
        let differenceCurrentPix = currentPosition - pixFrom;

        var currentValueMin = (valTo - valFrom) * (differenceCurrentPix / differencePix) + valFrom;

        // MAX
        const pixToMax = reverseValuesFromSlider[fromKeyMax];
        const pixFromMax = reverseValuesFromSlider[toKeyMax];

        const valFromMax = reverseValuesCv[fromKeyMax];
        const valToMax = reverseValuesCv[toKeyMax];

        let differencePixMax = pixFromMax - pixToMax;
        let differenceCurrentPixMax = currentPositionMax - pixToMax

        var currentValueMax = (valToMax - valFromMax) * (differenceCurrentPixMax / differencePixMax) + valFromMax;
        // console.log({ pixFrom, pixTo, valFrom, valTo, currentValueMin, differenceCurrentPix, differencePix })
        // console.log({ pixToMax, pixFromMax, valFromMax, valToMax, differenceCurrentPixMax, differencePixMax, currentValueMax })
    }
    // Current Value для отрицательных значений
    else {
        // MIN
        const pixTo = valuesFromSlider[fromKey];
        const pixFrom = valuesFromSlider[toKey];

        const valTo = valuesCv[fromKey];
        const valFrom = valuesCv[toKey];

        let differencePix = pixTo - pixFrom;
        let differenceCurrentPix = currentPosition - pixFrom;

        var currentValueMin = (valFrom - valTo);
        var currentValueMin = valFrom - (valFrom - valTo) * (differenceCurrentPix / differencePix);

        // console.log({ pixFrom, pixTo, valFrom, valTo, currentValueMin, differenceCurrentPix, differencePix, currentPosition })

        // MAX
        const pixFromMax = reverseValuesFromSlider[fromKeyMax];
        const pixToMax = reverseValuesFromSlider[toKeyMax];

        const valFromMax = reverseValuesCv[fromKeyMax];
        const valToMax = reverseValuesCv[toKeyMax];

        let differencePixMax = pixFromMax - pixToMax;
        let differenceCurrentPixMax = currentPositionMax - pixToMax;

        var currentValueMax = valToMax - ((valToMax - valFromMax) * (differenceCurrentPixMax / differencePixMax));
        // console.log({ pixToMax, pixFromMax, valFromMax, valToMax, differenceCurrentPixMax, differencePixMax, currentValueMax, currentPositionMax })
    }

    // Этот useEffect для того, что бы Canvas (график) перерисовывался при переключении без обновления страницы
    useEffect(() => {
        onChange(currentValueMin, currentValueMax)
    }, [minDisplayValue, maxDisplayValue])


    // console.log({ currentPosition, currentPositionMax })
    // console.log({ valFrom, valTo, pixFrom, currentPosition, pixTo, currentValueMin })  // Поднять выше
    // console.log({ valFromMax, valToMax, pixFromMax, currentPositionMax, pixToMax, currentValueMax, fromKeyMax, toKeyMax })  // Поднять выше
    // console.log('Дроблённый массив на разряды', rankValueCv);
    // console.log('Change Keys', changeKeys);
    // console.log('rank', rank)

    return <>
        <div className="my-2">
            <Canvas
                width={widthCanvas}
                height={heightCanvas}
                valuesFromSlider={valuesFromSlider}
                valuesCv={valuesCv}
                rank={rank}
                lineWidth={lineWidth}
            />
        </div>

        <div style={{ width: widthCanvas }} className="sliderr">
            <div className='progres'></div> {/* // Заполнение цветной полосы (СТИЛИ) задаётся в style.scss -> .progres left | right */}
        </div>
        <div style={{ width: widthCanvas }} className="range-input">
            <input step={0.01} style={{ width: widthCanvas }} type="range" className="range-min cs" min={0} max={100} value={minDisplayValue} onChange={handleMinValueChange} />
            <input step={0.01} style={{ width: widthCanvas }} type="range" className="range-max cs" min={0} max={100} value={maxDisplayValue} onChange={handleMaxValueChange} />
        </div>

        <div className="mt-3" style={{ width: widthCanvas / 2 + 'px', height: '20px', background: 'gray' }}></div>

        <div className="d-flex justify-content-between my-5">
            <div>
                <p>currentValueMin: {Math.trunc(currentValueMin * 100) / 100}</p>
                minDisplayValue <input type="number" onChange={handleMinValueChange} value={minDisplayValue} />
            </div>
            <div>
                <p>currentValueMax: {Math.trunc(currentValueMax * 100) / 100}</p>
                maxDisplayValue <input type="number" onChange={handleMaxValueChange} value={maxDisplayValue} />
            </div>
        </div>

    </>
}

export default ExpoSlider;