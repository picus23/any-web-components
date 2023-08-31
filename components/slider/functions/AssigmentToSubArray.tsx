export default function AssigmentToSubArray(countSubArr: number, comparisonArray: number[], valuesCv: number[]) {
    let rankValueCv = new Array(countSubArr);
    let lenghtPrevArr = 0;
    let tempLenght = 0;
    let prev = 0;
    let curr = 0;
    let indexComparisonArray = 0;

    for (let i = 0; i < countSubArr; i++) {
        let position = 0;
        rankValueCv[i] = [];
        for (let j = tempLenght; j < valuesCv.length; j++) {
            prev = comparisonArray[indexComparisonArray];
            curr = comparisonArray[indexComparisonArray + 1];

            if (valuesCv[j] >= prev && valuesCv[j] <= curr || valuesCv[j] <= comparisonArray[i] && valuesCv[j] >= comparisonArray[i + 1]) {
                rankValueCv[i][position] = valuesCv[j];
                lenghtPrevArr = position;
                position++;

            } else if (rankValueCv[i].length === 0) {
                j--;
                indexComparisonArray++;
                continue;
            } else {
                tempLenght += ++lenghtPrevArr!;
                indexComparisonArray++;
                break;
            }
        }
    }
    return [rankValueCv, tempLenght];
}