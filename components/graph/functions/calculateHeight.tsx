export default function calculateHeight(count: number, biggestCount: number|number[], height: number) {
    let percentageFromMaxValue = count / Number(biggestCount) * 100;
    let calculatedHeight = percentageFromMaxValue / height * 100;

    return calculatedHeight;
}