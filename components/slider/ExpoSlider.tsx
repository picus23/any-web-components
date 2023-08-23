import {FC, ReactNode, use, useEffect, useState} from "react";
import Canvas from "./Canvas";
import {convertValueToPercent, convertPercentToValue, tempConvMin, tempConvMax} from './convert';

interface ExpoSliderProps {
    data: [],
    dataToWrapper?: (data: any) => void,
    widthCanvas: number,
    heightCanvas: number,
    minPropValue?: number,
    maxPropValue?: number,
    lineWidth?: number,
    onChange: (min: number, max: number) => void,
    onTransform: (val: number) => string,
}

interface iChangeKeys {
    [key: number]: number,
}

interface iChangeKeysEmpty {
    [key: string]: string,
}

const ExpoSlider: FC<ExpoSliderProps> = ({
                                             data,
                                             minPropValue,
                                             maxPropValue,
                                             widthCanvas,
                                             heightCanvas,
                                             onChange,
                                             onTransform,
                                             lineWidth = 2
                                         }) => {
    const valuesCv = data.flat(Infinity);
    valuesCv.sort((a, b) => a - b);

    let minValue = Math.min(...valuesCv);
    let maxValue = Math.max(...valuesCv);

    let [minDisplayValue, setMinDisplayValue] = useState(0);
    let [maxDisplayValue, setMaxDisplayValue] = useState<number>(100);

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
    let lenghtPrevArr = 0;
    let tempLenght = 0;
    let prev = 0;
    let curr = 0;
    let indexComparisonArray = 0;

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
            } else {
                tempLenght += ++lenghtPrevArr!;
                indexComparisonArray++;
                break;
            }
        }
    }

    // Здесь высчитывается расстояние между значениями (breakpoint (круглешки),числа, текст и т.д.) на графике
    let changeKeys: iChangeKeys = {};
    let changeKeysEmpty: iChangeKeysEmpty = {};
    let rank: number[] = [];
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
        array.map((item: any, index: number) => {
            if (firstValue == 0) {
                changeKeys[firstValue] = item;
                changeKeysEmpty[firstValue] = ' ';
                prevValue = firstValue;
                firstValue = 1;
            }
                // else if (index == array.length - 1) {
                //     prevValue = rangeEverySubArray;
                //     changeKeys[rangeEverySubArray] = item;
                //     changeKeysEmpty[rangeEverySubArray] = ' ';
                //     rank[iter] = item;
                //     iter++;
            // }
            else {
                maxRange = Math.ceil((((rangeEverySubArray - prevValue) / 4) + prevValue * 1.0792));               //Здесь расчёт расстояния между значениями
                prevValue = maxRange;
                changeKeys[maxRange] = item;
                changeKeysEmpty[maxRange] = ' ';
            }
        })
    })
    // console.log(changeKeys);

    // Здесь создаётся массив с позициями
    let valuesFromSlider: number[] = [];
    let arrKeys = Object.keys(changeKeys);
    for (let i = 0; i < arrKeys.length; i++) {
        valuesFromSlider[i] = +arrKeys[i];
    }
    valuesFromSlider.sort((a, b) => a - b);

    // Функция для нажимания на breakpoint
    function clickBreakpoint(el: HTMLElement, pos: number) {
        // let breakpointPos = Math.round((pos) / widthCanvas * 100);
        // if (breakpointPos >= 50) {
        //     setMaxDisplayValue(breakpointPos);
        // } else {
        //     setMinDisplayValue(breakpointPos);
        // }
    }

    // Здесь логика движения пальцев у слайдера и закрашивание breakpoints
    useEffect(() => {
        const progress = document.querySelector('.sliderr .progres') as HTMLElement;
        const breakpoints = document.querySelectorAll<HTMLElement>('.breakpoint');

        breakpoints.forEach(el => {

            let breakpoint_pos = +el.style.left.slice(0, el.style.left.length - 2); // Убирает из строки px
            el.addEventListener('click', () => {
                clickBreakpoint(el, breakpoint_pos)
            });
            if (breakpoint_pos > currentPositionMin! && breakpoint_pos < currentPositionMax!) { // Активно, если breakpoint больше левого пальца и меньше правого
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
        } else if (minValue < 0) {
            progress.style.left = Math.abs(minDisplayValue) + '%';
            progress.style.right = 100 - maxDisplayValue + '%';
        } else {
            progress.style.left = minDisplayValue + '%';
            progress.style.right = 100 - maxDisplayValue + '%';
        }
    })


    // Переворачивание массивов для расчитывания Позиции отрицательных чисел
    let k = 0;
    // Переворачивание массива с позициями
    let reverseValuesFromSlider: number[] = [];
    for (let i = valuesFromSlider.length - 1; i >= 0; i--) {
        reverseValuesFromSlider[k] = valuesFromSlider[i];
        k++;
    }
    k = 0;
    // Переворачивание массива со значениями
    let reverseValuesCv: number[] = [];
    for (let i = valuesCv.length - 1; i >= 0; i--) {
        reverseValuesCv[k] = valuesCv[i];
        k++;
    }
    // Конец переворачивания

    // Конвертирует значения ползунка в %
    useEffect(() => {
        let [minPosAfterRenderUseEffect, maxPosAfterRenderUseEffect] = convertValueToPercent(valuesFromSlider, reverseValuesFromSlider, valuesCv, minPropValue, maxPropValue, widthCanvas, currentPositionMin, currentPositionMax);
        setMinDisplayValue(minPropValue ? minPosAfterRenderUseEffect : 0);
        setMaxDisplayValue(maxPropValue ? maxPosAfterRenderUseEffect : 100);
    }, [maxPropValue, minPropValue])

    // Конвертирует % ползунка в значения
    let [currentPositionMin, currentPositionMax] = convertPercentToValue(valuesFromSlider, reverseValuesFromSlider, minValue, maxValue, widthCanvas, minDisplayValue, maxDisplayValue);
    let currentValueMin = tempConvMin(minValue, maxValue, valuesFromSlider, valuesCv, currentPositionMin, minDisplayValue)
    let currentValueMax = tempConvMax(minValue, maxValue, reverseValuesFromSlider, reverseValuesCv, currentPositionMax, maxDisplayValue)

    const handleMinValueChange = (event: any) => {
        const currentMin = tempConvMin(minValue, maxValue, valuesFromSlider, valuesCv, currentPositionMin, event.target.value)
        onChange(currentMin!, currentValueMax!);
        setMinDisplayValue(event.target.value)
    }
    const handleMaxValueChange = (event: any) => {
        const currentMax = tempConvMax(minValue, maxValue, reverseValuesFromSlider, reverseValuesCv, currentPositionMax, event.target.value)
        onChange(currentValueMin!, currentMax!);
        setMaxDisplayValue(event.target.value)
    }


    return <>
        ********
        <div className="my-2">
            <Canvas
                width={widthCanvas}
                height={heightCanvas}
                valuesFromSlider={valuesFromSlider}
                valuesCv={valuesCv}
                rank={rank}
                lineWidth={lineWidth}
                onTransform={ onTransform }
            />
        </div>

        <div style={{width: widthCanvas, right: '-2px'}} className="sliderr">
            <div className='progres'></div>
            {/* // Заполнение цветной полосы (СТИЛИ) задаётся в style.scss -> .progres left | right */}
            <input step={0.01} style={{width: widthCanvas, left: '-2px'}} type="range" className="range-min cs" min={0}
                   max={100} value={minDisplayValue} onInput={handleMinValueChange}/>
            <input step={0.01} style={{width: widthCanvas + 8}} type="range" className="range-max cs" min={0} max={100}
                   value={maxDisplayValue} onInput={handleMaxValueChange}/>
        </div>

        {/*<div className="d-flex justify-content-between my-5">*/}
            {/*<div>*/}
            {/*<p>currentValueMin: {Math.trunc(currentValueMin! * 100) / 100}</p>*/}
            {/* <p>minDisplayValue <input type="number" onChange={handleMinValueChange} value={minDisplayValue} /></p>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*<p>currentValueMax: {Math.trunc(currentValueMax! * 100) / 100}</p>*/}
            {/* <p>maxDisplayValue <input type="number" onChange={handleMaxValueChange} value={maxDisplayValue} /></p>*/}
            {/*</div>*/}
        {/*</div>*/}

    </>
}

export default ExpoSlider;