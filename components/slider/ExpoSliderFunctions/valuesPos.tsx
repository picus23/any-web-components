interface iValuesWithPos {
    [key: number]: number,
}

interface iValuesWithPosEmpty {
    [key: string]: string,
}

export default function valuesPos(widthCanvas: number, valuesLenght: any, rankValues: any, countSubArr: number) {
    widthCanvas = widthCanvas - (widthCanvas / 10)
    let valuesWithPos: iValuesWithPos = {};
    let valuesWithPosEmpty: iValuesWithPosEmpty = {};
    let maxRange = 0;
    let prevValue = 0;
    let posValue = widthCanvas / valuesLenght;
    for (let i = 0; i < rankValues.length; i++) {
        // let rangeEverySubArray = (widthCanvas / countSubArr) * (i + 1)

        // Подмассив (разряды до 10,100,1000 и т.д.)
        for (let j = 0; j < rankValues[i].length; j++) {
            if (i == 0) {
                valuesWithPos[0] = 0;
                valuesWithPosEmpty[0] = ' ';
                prevValue = 0;
                continue;
            }
            if (i == rankValues.length - 1) {
                valuesWithPos[widthCanvas] = rankValues[i][j];
                valuesWithPosEmpty[widthCanvas] = ' ';
                continue;
            }
            maxRange = posValue + prevValue;  //Здесь расчёт расстояния между значениями
            prevValue = maxRange;
            valuesWithPos[maxRange] = rankValues[i][j];
            valuesWithPosEmpty[maxRange] = ' ';
        }
    }
    return [valuesWithPos, valuesWithPosEmpty]
}