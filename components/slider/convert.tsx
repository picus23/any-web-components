let fromValueMin = 0;
let toValueMin = 0;
let fromValueMax = 0;
let toValueMax = 0;
let fromKey = 0;
let toKey = 0;
let fromKeyMax = 0;
let toKeyMax = 0;
var minPosAfterRenderUseEffect = 0;
var maxPosAfterRenderUseEffect = 0;
var currentValueMin: number | undefined = 0;
var currentValueMax: number | undefined = 0;

// Конвертер значений в %
function convertValueToPercent(
    valuesPosition: number[],
    reverseValuesPosition: number[],
    valuesCv: any,
    minPropValue: number | undefined,
    maxPropValue: number | undefined,
    widthCanvas: number,
    currentPositionMin: number,
    currentPositionMax: number,
) {
    // Pos After Render для положительных
    // MIN
    for (let key in valuesCv) {
        if (minPropValue != null) {
            if (minPropValue < valuesCv[key]) {
                fromValueMin = Number(key) - 1
                toValueMin = Number(key)
                break;
            }
        }
    }
    // MAX
    for (let key in valuesCv) {
        if (maxPropValue != null) {
            if (maxPropValue < valuesCv[key]) {
                fromValueMax = Number(key)
                toValueMax = Number(key) - 1
                break;
            }
        }
    }

    // Pos After Render для отрицательных
    // Позиция для MIN
    for (let key in reverseValuesPosition) {
        if (currentPositionMin < valuesPosition[key]) {
            fromKey = Number(key)
            toKey = Number(key) - 1
            break;
        }
    }
    // Позиция для MAX
    for (let key in valuesPosition) {
        if (currentPositionMax > reverseValuesPosition[key]) {
            fromKeyMax = Number(key) - 1
            toKeyMax = Number(key)
            break;
        }
    }

    // Конвертирование
    if (minPropValue! >= 0 && maxPropValue! >= 0) {
        // MIN
        const pixFrom = valuesPosition[fromValueMin];
        const pixTo = valuesPosition[toValueMin];

        const valFrom = valuesCv[fromValueMin];
        const valTo = valuesCv[toValueMin];


        let differencePixMin = pixTo - pixFrom;
        let differcenceValueMin = valTo - valFrom;
        let minPercentDifferenceBetweenMinPropValFrom = Math.ceil((minPropValue! - valFrom) / differcenceValueMin * 100);

        let differenceCurrentPixMin = (minPercentDifferenceBetweenMinPropValFrom / 100 * differencePixMin) + pixFrom;

        minPosAfterRenderUseEffect = differenceCurrentPixMin / widthCanvas * 100;

        // MAX
        const pixToMax = valuesPosition[fromValueMax];
        const pixFromMax = valuesPosition[toValueMax];

        const valFromMax = valuesCv[fromValueMax];
        const valToMax = valuesCv[toValueMax];

        let differencePixMax = pixToMax - pixFromMax;
        let differenceValueMax = valFromMax - valToMax;
        let maxPercentDifferenceBetweenMaxPropValFrom = (maxPropValue! - valToMax) / differenceValueMax * 100;

        let differenceCurrentPixMax = (maxPercentDifferenceBetweenMaxPropValFrom / 100 * differencePixMax) + pixFromMax;

        maxPosAfterRenderUseEffect = differenceCurrentPixMax / widthCanvas * 100;
    } else {
        // MIN
        const pixFrom = valuesPosition[fromValueMin];
        const pixTo = valuesPosition[toValueMin];

        const valFrom = valuesCv[fromValueMin];
        const valTo = valuesCv[toValueMin];

        let differencePixMin = pixTo - pixFrom;
        let differcenceValueMin = Math.abs(valFrom - valTo);
        let minPercentDifferenceBetweenMinPropValFrom = Math.abs(valFrom - minPropValue!) / differcenceValueMin * 100;

        let differenceCurrentPixMin = (minPercentDifferenceBetweenMinPropValFrom / 100 * differencePixMin) + pixFrom;

        minPosAfterRenderUseEffect = differenceCurrentPixMin / widthCanvas * 100;

        // MAX
        const pixToMax = valuesPosition[fromValueMax];
        const pixFromMax = valuesPosition[toValueMax];

        const valFromMax = valuesCv[fromValueMax];
        const valToMax = valuesCv[toValueMax];

        let differencePixMax = pixToMax - pixFromMax;
        let differenceValueMax = valFromMax - valToMax;
        let maxPercentDifferenceBetweenMaxPropValFrom = (maxPropValue! - valToMax) / differenceValueMax * 100;

        let differenceCurrentPixMax = (maxPercentDifferenceBetweenMaxPropValFrom / 100 * differencePixMax) + pixFromMax;

        maxPosAfterRenderUseEffect = differenceCurrentPixMax / widthCanvas * 100;
    }
    return [minPosAfterRenderUseEffect, maxPosAfterRenderUseEffect];
}

// Конвертер % в значения
function convertPercentToValue(
    valuesPosition: number[],
    reverseValuesPosition: number[],
    minValue: number | undefined,
    maxValue: number | undefined,
    widthCanvas: number,
    minDisplayValue: number,
    maxDisplayValue: number) {

    var currentPositionMin = 0;
    var currentPositionMax = 0;

    // Расчёт Current Position (зависит от данных, которые отображаются на отрезке (числа)) для положительных / отрицательных значений
    // Если отрицательное и МИН и МАКС
    if (maxValue! < 0) {
        currentPositionMin = Math.floor(Math.abs((minDisplayValue * widthCanvas) / 100));
        currentPositionMax = Math.ceil(Math.abs(maxDisplayValue * widthCanvas / 100));
    }
    // Если отрицательное только MIN
    else if (minValue! < 0) {
        currentPositionMin = Math.floor(Math.abs((minDisplayValue * widthCanvas) / 100));
        currentPositionMax = Math.ceil((maxDisplayValue * widthCanvas) / 100);
    }
    // Если положительные и МИН и МАКС
    else {
        currentPositionMin = Math.floor((minDisplayValue * widthCanvas) / 100);
        currentPositionMax = Math.ceil((maxDisplayValue * widthCanvas) / 100);
    }

    // Отрезок между левым и правым значением Для положительных значений
    // Позиция для MIN
    for (let key in valuesPosition) {
        if (currentPositionMin < valuesPosition[key]) {
            fromKey = Number(key) - 1
            toKey = Number(key)
            break;
        }
    }
    // Позиция для MAX
    for (let key in reverseValuesPosition) {
        if (currentPositionMax > reverseValuesPosition[key]) {
            fromKeyMax = Number(key)
            toKeyMax = Number(key) - 1
            break;
        }
    }

    // Отрезок между левым и правым значением Для отрицательных значений
    // Позиция для MIN
    for (let key in reverseValuesPosition) {
        if (currentPositionMin < valuesPosition[key]) {
            fromKey = Number(key)
            toKey = Number(key) - 1
            break;
        }
    }
    // Позиция для MAX
    for (let key in valuesPosition) {
        if (currentPositionMax > reverseValuesPosition[key]) {
            fromKeyMax = Number(key) - 1
            toKeyMax = Number(key)
            break;
        }
    }

    return [currentPositionMin, currentPositionMax];
}

// Конвертер МИН % в значения
function tempConvMin(minValue: any, maxValue: any, valuesPosition: any, valuesCv: any, currentPositionMin: any, minDisplayValue: any) {
    // Current Value для Положительных значений
    if (minValue! >= 0 && maxValue! >= 0) {
        // MIN
        const pixFrom = valuesPosition[fromKey];
        const pixTo = valuesPosition[toKey];

        const valFrom = valuesCv[fromKey];
        const valTo = valuesCv[toKey];

        let differencePix = pixTo - pixFrom;
        let differenceCurrentPix = currentPositionMin - pixFrom;

        if (minDisplayValue == 100) {
            currentValueMin = maxValue;
        }
        minDisplayValue == 0 ? currentValueMin = minValue : currentValueMin = (valTo - valFrom) * (differenceCurrentPix / differencePix) + valFrom;

    } else {
        // Current Value для отрицательных значений
        // MIN
        const pixTo = valuesPosition[fromKey];
        const pixFrom = valuesPosition[toKey];

        const valTo = valuesCv[fromKey];
        const valFrom = valuesCv[toKey];

        let differencePix = pixTo - pixFrom;
        let differenceCurrentPix = currentPositionMin - pixFrom;

        if (minDisplayValue == 100) {
            currentValueMin = maxValue;
        }
        minDisplayValue == 0 ? currentValueMin = minValue : currentValueMin = valFrom - (valFrom - valTo) * (differenceCurrentPix / differencePix);
    }

    return currentValueMin;
}

// Конвертер МАКС % в значения
function tempConvMax(minValue: any, maxValue: any, reverseValuesPosition: any, reverseValuesCv: any, currentPositionMax: any, maxDisplayValue: any) {
    if (minValue! >= 0 && maxValue! >= 0) {
        // Current Value для положительных значений
        // MAX
        const pixToMax = reverseValuesPosition[fromKeyMax];
        const pixFromMax = reverseValuesPosition[toKeyMax];

        const valFromMax = reverseValuesCv[fromKeyMax];
        const valToMax = reverseValuesCv[toKeyMax];

        let differencePixMax = pixFromMax - pixToMax;
        let differenceCurrentPixMax = currentPositionMax - pixToMax

        if (maxDisplayValue == 0) {
            currentValueMax = minValue;
        }
        maxDisplayValue >= 100 ? currentValueMax = maxValue : currentValueMax = (valToMax - valFromMax) * (differenceCurrentPixMax / differencePixMax) + valFromMax;
    } else {
        // Current Value для отрицательных значений
        // MAX
        const pixFromMax = reverseValuesPosition[fromKeyMax];
        const pixToMax = reverseValuesPosition[toKeyMax];

        const valFromMax = reverseValuesCv[fromKeyMax];
        const valToMax = reverseValuesCv[toKeyMax];

        let differencePixMax = pixFromMax - pixToMax;
        let differenceCurrentPixMax = currentPositionMax - pixToMax;

        if (maxDisplayValue == 0) {
            currentValueMax = minValue;
        }
        maxDisplayValue >= 100 ? currentValueMax = maxValue : currentValueMax = valToMax - ((valToMax - valFromMax) * (differenceCurrentPixMax / differencePixMax));
    }
    // console.log({ currentValueMin, currentValueMax })
    return currentValueMax;
}

export {convertValueToPercent, convertPercentToValue, tempConvMin, tempConvMax};