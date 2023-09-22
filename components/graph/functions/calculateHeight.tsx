export default function calculateHeight(count: number, biggestCount: number|number[], height: number) {
    let percentageFromMaxValue = count / Number(biggestCount);
    let calculatedHeight = height * percentageFromMaxValue;

    return calculatedHeight;
}