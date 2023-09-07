export default function getValuesPos(sortedData: number[], width: number) {
    let valuesPos: { [key: string]: number } = {};
    let pos = Math.ceil(width / (sortedData.length));
    sortedData.forEach((value, index) => {
        if (index === 0) {
            valuesPos[0] = value;
            return;
        }
        if (index == (sortedData.length - 1)) {
            valuesPos[width] = value;
            return;
        }
        valuesPos[pos * index] = value;

    })

    return valuesPos;
}