function percentToValue(
    valuesFromSlider: number[],
    reverseValuesFromSlider: number[],
    valuesCv: any,
    reverseValuesCv: number[],
    minValue: number | undefined,
    maxValue: number | undefined,
    widthCanvas: number,
    minDisplayValue: number,
    maxDisplayValue: number) {

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

    // Current Value для положительных значений
    if (!negative) {
        // MIN
        const pixTo = valuesFromSlider[fromKey];
        const pixFrom = valuesFromSlider[toKey];

        const valTo = valuesCv[fromKey];
        const valFrom = valuesCv[toKey];

        let differencePix = pixTo - pixFrom;
        let differenceCurrentPix = currentPositionMin - pixFrom;

        if (minDisplayValue == 100) {
            currentValueMin = maxValue;
        } else {
            currentValueMin = (valTo - valFrom) * (differenceCurrentPix / differencePix) + valFrom;
        }
    }
}