export default function getRanks(data: {}) {
    let ranks: number[] = [];
    let j = 0;
    let k = 0;
    let dataValueArr:number[] = [];
    let comparisonArray = [-200, -10, -1, 0, 1, 10, 100, 1000, 10000];
    let dataArr:number[] = [];
    Object.entries(data).map(([key, value], index) => {
        dataArr[index] = Number(key);
    })
    let sortedDataArr = dataArr.sort((a, b) => a - b)

    for (let i = 0; i < comparisonArray.length; i++) {
        if (sortedDataArr[j] >= comparisonArray[i] && sortedDataArr[j] <= comparisonArray[i + 1]
            || sortedDataArr[j] <= comparisonArray[i] && sortedDataArr[j] >= comparisonArray[i + 1]) {
            while (sortedDataArr[j] >= comparisonArray[i] && sortedDataArr[j] <= comparisonArray[i + 1] || sortedDataArr[j] <= comparisonArray[i] && sortedDataArr[j] >= comparisonArray[i + 1]) {
                j++;
            }
            if (sortedDataArr[sortedDataArr.length - 1] > comparisonArray[i + 1]) {
                ranks[k] = comparisonArray[i + 1];
                k++;
            }
        }
    }

    Object.values(data).map((value,index) => {
        dataValueArr[index] = Number(value);
    })

    return [ranks,Number(Math.max(...dataValueArr))];
}