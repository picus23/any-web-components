import React, {FC, useEffect, useRef, useState} from "react";
import Canvas from "./Canvas";
import {convertValueToPercent, convertPercentToValue, tempConvMin, tempConvMax} from './convert';
import reverseArrays from "./ExpoSliderFunctions/reverseArrays";
import valuesPos from "./ExpoSliderFunctions/valuesPos";
import assigmentToSubArray from "./ExpoSliderFunctions/assigmentToSubArray";
import getRanks from "./ExpoSliderFunctions/rank/getRanks";
import getRanksPos from "./ExpoSliderFunctions/rank/getRanksPos";
import {Slider} from "antd";

interface ExpoSliderProps {
    data: number[],
    dataToWrapper?: (data: any) => void,
    widthCanvas: number,
    heightCanvas?: number,
    minPropValue?: number,
    maxPropValue?: number,
    lineWidth?: number,
    onChange?: (min: number, max: number) => void,
    onTransform?: (val: number) => string,
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

    const values = data.flat(Infinity);
    values.sort((a, b) => a - b);

    let minValue = Math.min(...values);
    let maxValue = Math.max(...values);

    let [minDisplayValue, setMinDisplayValue] = useState(0);
    let [maxDisplayValue, setMaxDisplayValue] = useState<number>(90);

    // Делю массив на разряды | Вычисление кол-ва подмассивов
    let [countSubArr, ranks, comparisonArray, onlyViewRanks] = getRanks(values);

    // Происходит присваивание значений в подмассивы поразрядно
    let [rankValues, valuesLenght] = assigmentToSubArray(countSubArr, comparisonArray, values);

    // Здесь высчитывается расстояние между значениями (breakpoint (круглешки),числа, текст и т.д.) на графике
    let [valuesWithPos, valuesWithPosEmpty] = valuesPos(maxValue, valuesLenght, rankValues, countSubArr);
console.log(valuesWithPos)

    // Здесь создаётся массив с позициями значений и разрядов
    let valuesPosition: number[] = [];
    let arrKeys = Object.keys(valuesWithPos);
    for (let i = 0; i < arrKeys.length; i++) {
        valuesPosition[i] = Number(arrKeys[i]);
    }
    valuesPosition.sort((a, b) => a - b);

    let ranksPos = getRanksPos(valuesWithPos, ranks);


    // Переворачивание массивов для расчитывания Позиции отрицательных чисел
    let [reverseValuesPos, reverseValuesCv] = reverseArrays(valuesPosition, values);
    // Конец переворачивания

    // Конвертирует значения ползунка в %
    useEffect(() => {
        let [minPosAfterRenderUseEffect, maxPosAfterRenderUseEffect] = convertValueToPercent(valuesPosition, reverseValuesPos, values, minPropValue, maxPropValue, widthCanvas, currentPositionMin, currentPositionMax);
        setMinDisplayValue(minPropValue ? minPosAfterRenderUseEffect : 0);
        setMaxDisplayValue(maxPropValue ? maxPosAfterRenderUseEffect : 100);
    }, [maxPropValue, minPropValue])

    // Конвертирует % ползунка в значения
    let [currentPositionMin, currentPositionMax] = convertPercentToValue(valuesPosition, reverseValuesPos, minValue, maxValue, widthCanvas, minDisplayValue, maxDisplayValue);
    let currentValueMin = tempConvMin(minValue, maxValue, valuesPosition, values, currentPositionMin, minDisplayValue)
    let currentValueMax = tempConvMax(minValue, maxValue, reverseValuesPos, reverseValuesCv, currentPositionMax, maxDisplayValue)

    const handleMinValueChange = (event: any) => {
        const currentMin = tempConvMin(minValue, maxValue, valuesPosition, values, currentPositionMin, event.target.value)
        // onChange(currentMin!, currentValueMax!);
        setMinDisplayValue(event.target.value)
    }
    const handleMaxValueChange = (event: any) => {
        const currentMax = tempConvMax(minValue, maxValue, reverseValuesPos, reverseValuesCv, currentPositionMax, event.target.value)
        // onChange(currentValueMin!, currentMax!);
        setMaxDisplayValue(event.target.value)
    }

    // Здесь логика движения пальцев у слайдера и закрашивание breakpoints и полосы
    // breakpoints(currentPositionMin, minDisplayValue, minValue, currentPositionMax, maxDisplayValue, maxValue);

    // ************************************************************************************************************************************
    // useEffect(() => {
    //     var sliderr = document.getElementById('sliderr')
    //     console.log(sliderr)
    //
    //
    //     // Отрисовка Значений X (числа(текст) + breakpoints + степени)
    //     let i = 0;
    //     let text;
    //
    //     function breakpointsStyles(element: any, key: any) {
    //         element.classList.add('breakpoint')
    //         element.classList.add('prev-canvas-values')
    //         element.style.left = key - 2 + 'px';
    //     }
    //
    //     for (let key in ranksPos) {
    //         var xAxisValue = document.createElement('i');
    //         let breakpoint = document.createElement('div');
    //         let verticalLine = document.getElementById('xAxisValue');
    //         verticalLine?.classList.add('position-relative');
    //
    //         let transformVal = onTransform ? onTransform(ranksPos[key]) : ranksPos[key];
    //
    //         text = document.createTextNode(transformVal + '')
    //         xAxisValue.appendChild(text);
    //         // verticalLine!.appendChild(breakpoint);
    //         breakpointsStyles(breakpoint, key)
    //         if (i % 2 === 0) { // Чётный индекс [i] == 0,2,4 ...
    //             xAxisValue.style.top = '-25px';
    //         } else { // Нечётный индекс [i] == 1,3,5 ...
    //             xAxisValue.style.top = '10px';
    //         }
    //         xAxisValue.classList.add('prev-canvas-values');
    //         xAxisValue.style.position = 'absolute';
    //         xAxisValue.style.fontSize = '14px';
    //         xAxisValue.style.left = key + 'px';
    //         // document.getElementById('xAxisValue')!.appendChild(xAxisValue);
    //         i++;
    //     }
    //
    // }, []);
    // useEffect(() => {
    //     document.querySelectorAll('.prev-canvas-values').forEach(el => {
    //         if (el.classList.contains('prev-canvas-values')) {
    //             el.remove()
    //         }
    //     })
    // }, [])
// ************************************************************************************************************************************
    return <>

        <Slider
            range={{draggableTrack: true}}
            defaultValue={[minValue, maxValue]}
            min={minPropValue}
            max={maxPropValue}
            // marks={valuesWithPos}
        />
        {/*<div className="my-4">*/}
        {/*    <Canvas*/}
        {/*        width={widthCanvas}*/}
        {/*        height={heightCanvas}*/}
        {/*        valuesPosition={valuesPosition}*/}
        {/*        values={values}*/}
        {/*        ranks={ranks}*/}
        {/*        ranksPos={ranksPos}*/}
        {/*        lineWidth={lineWidth}*/}
        {/*        onTransform={onTransform}*/}
        {/*    />*/}
        {/*</div>*/}

        {/*<div id="sliderr" style={{width: widthCanvas, right: '-2px'}} className="sliderr">*/}
        {/*    <div className='progres'></div>*/}
        {/*    /!* // Заполнение цветной полосы (СТИЛИ) задаётся в style.scss -> .progres left | right *!/*/}
        {/*    <input step={0.01} style={{width: widthCanvas, left: '-2px'}} type="range" className="range-min cs" min={0}*/}
        {/*           max={100} value={minDisplayValue} onInput={handleMinValueChange}/>*/}

        {/*    <input step={0.01} style={{width: widthCanvas + 8}} type="range" className="range-max cs" min={0} max={100}*/}
        {/*           value={maxDisplayValue} onInput={handleMaxValueChange}/>*/}
        {/*</div>*/}

        {/*<div className="d-flex justify-content-between my-5">*/}
        {/*    <div>*/}
        {/*        <p>currentValueMin: {Math.trunc(currentValueMin! * 100) / 100}</p>*/}
        {/*        <p>minDisplayValue <input type="number" onChange={handleMinValueChange}*/}
        {/*                                  value={Math.ceil(minDisplayValue)}/></p>*/}
        {/*    </div>*/}
        {/*    <div>*/}
        {/*        <p>currentValueMax: {Math.trunc(currentValueMax! * 100) / 100}</p>*/}
        {/*        <p>maxDisplayValue <input type="number" onChange={handleMaxValueChange}*/}
        {/*                                  value={Math.ceil(maxDisplayValue)}/></p>*/}
        {/*    </div>*/}
        {/*</div>*/}

    </>
}

export default ExpoSlider;