export default function getRanks(values: number[]) {

    let comparisonArray: number[] = [-1000, -100, -10, -1, 0, 1, 10, 100, 1000, 10000, 100000];

    let countSubArr = 0;
    let onlyViewRanks: number[] = [];
    let keyForRanks = 0;
    let j = 0;
    let ranks: any = {};

    for (let i = 0; i < comparisonArray.length; i++) {
        if (values[j] >= comparisonArray[i] && values[j] <= comparisonArray[i + 1]
            || values[j] <= comparisonArray[i] && values[j] >= comparisonArray[i + 1]) {
            while (values[j] >= comparisonArray[i] && values[j] <= comparisonArray[i + 1] || values[j] <= comparisonArray[i] && values[j] >= comparisonArray[i + 1]) {
                j++;
            }
            if (values[values.length - 1] > comparisonArray[i + 1]) {
                if (keyForRanks === 0) {
                    onlyViewRanks[keyForRanks] = comparisonArray[i];
                    keyForRanks++;
                }
                ranks[countSubArr] = comparisonArray[i + 1];

            } else {
                onlyViewRanks[keyForRanks] = comparisonArray[i + 1];
            }
            countSubArr++;
        }
    }

    return [countSubArr, ranks, comparisonArray, onlyViewRanks];
}