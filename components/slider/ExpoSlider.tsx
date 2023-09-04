import React, {FC, useEffect, useState} from "react";
import Canvas from "./Canvas";
import {convertValueToPercent, convertPercentToValue, tempConvMin, tempConvMax} from './convert';
import reverseArrays from "./functions/reverseArrays";
import breakpoints from "./functions/breakpoints/breakpoints";
import valuesPos from "./functions/valuesPos";
import assigmentToSubArray from "./functions/assigmentToSubArray";
import getRanks from "./functions/rank/getRanks";
import getRanksPos from "./functions/rank/getRanksPos";

interface ExpoSliderProps {
    data: number[],
    dataToWrapper?: (data: any) => void,
    widthCanvas: number,
    heightCanvas: number,
    minPropValue?: number,
    maxPropValue?: number,
    lineWidth?: number,
    onChange: (min: number, max: number) => void,
    onTransform: (val: number) => string,
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
    let [maxDisplayValue, setMaxDisplayValue] = useState<number>(100);

    // Делю массив на разряды десяток | Вычисление кол-ва подмассивов
    let comparisonArray = [-1000, -100, -10, -1, 0, 1, 10, 100, 1000, 10000, 100000];
    let [countSubArr, ranks] = getRanks(values,comparisonArray,widthCanvas);


    // Происходит присваивание значений в подмассивы поразрядно
    let [rankValues,valuesLenght] = assigmentToSubArray(countSubArr,comparisonArray,values);

    // Здесь высчитывается расстояние между значениями (breakpoint (круглешки),числа, текст и т.д.) на графике
   let [valuesWithPos,valuesWithPosEmpty] = valuesPos(widthCanvas,valuesLenght,rankValues,countSubArr);
   ranks = getRanksPos(valuesWithPos,ranks);
   console.log({ranks})

   // Здесь создаётся массив с позициями
   let valuesPosition: number[] = [];
   let arrKeys = Object.keys(valuesWithPos);
   for (let i = 0; i < arrKeys.length; i++) {
       valuesPosition[i] = Number(arrKeys[i]);
    }
    valuesPosition.sort((a, b) => a - b);


    // Переворачивание массивов для расчитывания Позиции отрицательных чисел
    let [reverseValuesPos,reverseValuesCv] = reverseArrays(valuesPosition,values);
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
        onChange(currentMin!, currentValueMax!);
        setMinDisplayValue(event.target.value)
    }
    const handleMaxValueChange = (event: any) => {
        const currentMax = tempConvMax(minValue, maxValue, reverseValuesPos, reverseValuesCv, currentPositionMax, event.target.value)
        onChange(currentValueMin!, currentMax!);
        setMaxDisplayValue(event.target.value)
    }

    // Здесь логика движения пальцев у слайдера и закрашивание breakpoints
    breakpoints(currentPositionMin,minDisplayValue,minValue,currentPositionMax,maxDisplayValue,maxValue);


    return <>
        <div className="my-4">
            <Canvas
                width={widthCanvas}
                height={heightCanvas}
                valuesPosition={valuesPosition}
                values={values}
                ranks={ranks}
                lineWidth={lineWidth}
                onTransform={onTransform}
            />
        </div>
        <div id="sliderr" style={{width: widthCanvas, right: '-2px'}} className="sliderr">
            <div className='progres'></div>
            {/* // Заполнение цветной полосы (СТИЛИ) задаётся в style.scss -> .progres left | right */}
            <input step={0.01} style={{width: widthCanvas, left: '-2px'}} type="range" className="range-min cs" min={0}
                   max={100} value={minDisplayValue} onInput={handleMinValueChange}/>
            <input step={0.01} style={{width: widthCanvas + 8}} type="range" className="range-max cs" min={0} max={100}
                   value={maxDisplayValue} onInput={handleMaxValueChange}/>
        </div>

        <div className="d-flex justify-content-between my-5">
            <div>
                <p>currentValueMin: {Math.trunc(currentValueMin! * 100) / 100}</p>
                <p>minDisplayValue <input type="number" onChange={handleMinValueChange} value={minDisplayValue}/></p>
            </div>
            <div>
                <p>currentValueMax: {Math.trunc(currentValueMax! * 100) / 100}</p>
                <p>maxDisplayValue <input type="number" onChange={handleMaxValueChange} value={maxDisplayValue}/></p>
            </div>
        </div>

    </>
}

export default ExpoSlider;