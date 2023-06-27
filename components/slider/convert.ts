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
let currentPositionMin = 0;
let currentPositionMax = 0;
var currentValueMin: number | undefined = 0;
var currentValueMax: number | undefined = 0;

// Конвертер значений в %
function convertValueToPercent(
    valuesFromSlider: number[],
    reverseValuesFromSlider: number[],
    valuesCv: any,
    minPropValue: number | undefined,
    maxPropValue: number | undefined,
    widthCanvas: number) {
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
    for (let key in reverseValuesFromSlider) {
        if (currentPositionMin < valuesFromSlider[key]) {
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

    // Конвертирование
    if (minPropValue! >= 0 && maxPropValue! >= 0) {
        // MIN
        const pixFrom = valuesFromSlider[fromValueMin];
        const pixTo = valuesFromSlider[toValueMin];

        const valFrom = valuesCv[fromValueMin];
        const valTo = valuesCv[toValueMin];

        let differencePixMin = pixTo - pixFrom;
        let differcenceValueMin = valTo - valFrom;
        let minPercentDifferenceBetweenMinPropValFrom = Math.ceil((minPropValue! - valFrom) / differcenceValueMin * 100);

        let differenceCurrentPixMin = (minPercentDifferenceBetweenMinPropValFrom / 100 * differencePixMin) + pixFrom;

        minPosAfterRenderUseEffect = differenceCurrentPixMin / widthCanvas * 100;

        // MAX
        const pixToMax = valuesFromSlider[fromValueMax];
        const pixFromMax = valuesFromSlider[toValueMax];

        const valFromMax = valuesCv[fromValueMax];
        const valToMax = valuesCv[toValueMax];

        let differencePixMax = pixToMax - pixFromMax;
        let differenceValueMax = valFromMax - valToMax;
        let maxPercentDifferenceBetweenMaxPropValFrom = (maxPropValue! - valToMax) / differenceValueMax * 100;

        let differenceCurrentPixMax = (maxPercentDifferenceBetweenMaxPropValFrom / 100 * differencePixMax) + pixFromMax;

        maxPosAfterRenderUseEffect = differenceCurrentPixMax / widthCanvas * 100;
    }
    else {
        // MIN
        const pixFrom = valuesFromSlider[fromValueMin];
        const pixTo = valuesFromSlider[toValueMin];

        const valFrom = valuesCv[fromValueMin];
        const valTo = valuesCv[toValueMin];

        let differencePixMin = pixTo - pixFrom;
        let differcenceValueMin = Math.abs(valFrom - valTo);
        let minPercentDifferenceBetweenMinPropValFrom = Math.abs(valFrom - minPropValue!) / differcenceValueMin * 100;

        let differenceCurrentPixMin = (minPercentDifferenceBetweenMinPropValFrom / 100 * differencePixMin) + pixFrom;

        minPosAfterRenderUseEffect = differenceCurrentPixMin / widthCanvas * 100;

        // MAX
        const pixToMax = valuesFromSlider[fromValueMax];
        const pixFromMax = valuesFromSlider[toValueMax];

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
    valuesFromSlider: number[],
    reverseValuesFromSlider: number[],
    valuesCv: any,
    reverseValuesCv: number[],
    minValue: number | undefined,
    maxValue: number | undefined,
    widthCanvas: number,
    minDisplayValue: number,
    maxDisplayValue: number) {

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
    for (let key in valuesFromSlider) {
        if (currentPositionMin < valuesFromSlider[key]) {
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
        if (currentPositionMin < valuesFromSlider[key]) {
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
    if (minValue! >= 0 && maxValue! >= 0) {
        // MIN
        const pixFrom = valuesFromSlider[fromKey];
        const pixTo = valuesFromSlider[toKey];

        const valFrom = valuesCv[fromKey];
        const valTo = valuesCv[toKey];

        let differencePix = pixTo - pixFrom;
        let differenceCurrentPix = currentPositionMin - pixFrom;

        if (minDisplayValue == 100) {
            currentValueMin = maxValue;
        } else {
            currentValueMin = (valTo - valFrom) * (differenceCurrentPix / differencePix) + valFrom;
        }

        // MAX
        const pixToMax = reverseValuesFromSlider[fromKeyMax];
        const pixFromMax = reverseValuesFromSlider[toKeyMax];

        const valFromMax = reverseValuesCv[fromKeyMax];
        const valToMax = reverseValuesCv[toKeyMax];

        let differencePixMax = pixFromMax - pixToMax;
        let differenceCurrentPixMax = currentPositionMax - pixToMax

        if (maxDisplayValue == 0) {
            currentValueMax = minValue;
        } else {
            currentValueMax = (valToMax - valFromMax) * (differenceCurrentPixMax / differencePixMax) + valFromMax;
        }
    }
    // Current Value для отрицательных значений
    else {
        // MIN
        const pixTo = valuesFromSlider[fromKey];
        const pixFrom = valuesFromSlider[toKey];

        const valTo = valuesCv[fromKey];
        const valFrom = valuesCv[toKey];

        let differencePix = pixTo - pixFrom;
        let differenceCurrentPix = currentPositionMin - pixFrom;

        // currentValueMin = (valFrom - valTo);
        if (minDisplayValue == 100) {
            currentValueMin = maxValue;
        } else {
            currentValueMin = valFrom - (valFrom - valTo) * (differenceCurrentPix / differencePix);
        }

        // MAX
        const pixFromMax = reverseValuesFromSlider[fromKeyMax];
        const pixToMax = reverseValuesFromSlider[toKeyMax];

        const valFromMax = reverseValuesCv[fromKeyMax];
        const valToMax = reverseValuesCv[toKeyMax];

        let differencePixMax = pixFromMax - pixToMax;
        let differenceCurrentPixMax = currentPositionMax - pixToMax;

        if (maxDisplayValue == 0) {
            currentValueMax = minValue;
        } else {
            currentValueMax = valToMax - ((valToMax - valFromMax) * (differenceCurrentPixMax / differencePixMax));
        }
    }

    return [currentValueMin, currentValueMax, currentPositionMin, currentPositionMax];
}

function tempConvMin(minValue: any, maxValue: any, valuesFromSlider: any, valuesCv: any, minDisplayValue: any) {
    if (minValue! >= 0 && maxValue! >= 0) {
        // MIN
        const pixFrom = valuesFromSlider[fromKey];
        const pixTo = valuesFromSlider[toKey];

        const valFrom = valuesCv[fromKey];
        const valTo = valuesCv[toKey];

        let differencePix = pixTo - pixFrom;
        let differenceCurrentPix = currentPositionMin - pixFrom;

        if (minDisplayValue == 100) {
            currentValueMin = maxValue;
        } else {
            currentValueMin = (valTo - valFrom) * (differenceCurrentPix / differencePix) + valFrom;
        }
    } else {
        // Current Value для отрицательных значений
        // MIN
        const pixTo = valuesFromSlider[fromKey];
        const pixFrom = valuesFromSlider[toKey];

        const valTo = valuesCv[fromKey];
        const valFrom = valuesCv[toKey];

        let differencePix = pixTo - pixFrom;
        let differenceCurrentPix = currentPositionMin - pixFrom;

        // currentValueMin = (valFrom - valTo);
        if (minDisplayValue == 100) {
            currentValueMin = maxValue;
        } else {
            currentValueMin = valFrom - (valFrom - valTo) * (differenceCurrentPix / differencePix);
        }
    }
    return currentValueMin;
}
function tempConvMax(minValue: any, maxValue: any, reverseValuesFromSlider: any, reverseValuesCv: any, maxDisplayValue: any) {
    if (minValue! >= 0 && maxValue! >= 0) {
        // MAX
        const pixToMax = reverseValuesFromSlider[fromKeyMax];
        const pixFromMax = reverseValuesFromSlider[toKeyMax];

        const valFromMax = reverseValuesCv[fromKeyMax];
        const valToMax = reverseValuesCv[toKeyMax];

        let differencePixMax = pixFromMax - pixToMax;
        let differenceCurrentPixMax = currentPositionMax - pixToMax

        if (maxDisplayValue == 0) {
            currentValueMax = minValue;
        } else {
            currentValueMax = (valToMax - valFromMax) * (differenceCurrentPixMax / differencePixMax) + valFromMax;
        }
    } else {
        // Current Value для отрицательных значений
        // MAX
        const pixFromMax = reverseValuesFromSlider[fromKeyMax];
        const pixToMax = reverseValuesFromSlider[toKeyMax];

        const valFromMax = reverseValuesCv[fromKeyMax];
        const valToMax = reverseValuesCv[toKeyMax];

        let differencePixMax = pixFromMax - pixToMax;
        let differenceCurrentPixMax = currentPositionMax - pixToMax;

        if (maxDisplayValue == 0) {
            currentValueMax = minValue;
        } else {
            currentValueMax = valToMax - ((valToMax - valFromMax) * (differenceCurrentPixMax / differencePixMax));
        }
    }
    return currentValueMax;
}
export { convertValueToPercent, convertPercentToValue, tempConvMin, tempConvMax };