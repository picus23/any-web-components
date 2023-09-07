export default function calculateHeight(count: number, biggestCount: number, height: number) {
    let percentageFromMaxValue = count / biggestCount * 100;
    let calculatedHeight = percentageFromMaxValue / height * 100;

    return calculatedHeight;
}