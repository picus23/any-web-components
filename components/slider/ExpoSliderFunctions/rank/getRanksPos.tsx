export default function getRanksPos(valuesWithPosObj: {}, ranks: number[]) {
    let fromKey: number[] = [];
    let toKey: number[] = [];
    let ranksPos: number[] = [];
    let valuesWithPosArr: number[] = [];
    let i = 0;

    for (let key in valuesWithPosObj) {
        valuesWithPosArr.push([key, valuesWithPosObj[key]]);
    }

    valuesWithPosArr.sort((a, b) => {
        return a[1] - b[1];
    });

    valuesWithPosArr.forEach(([key, value], index) => {
        if (ranks[i] < value) {
            fromKey.push(valuesWithPosArr[index - 1][0])
            toKey.push(valuesWithPosArr[index][0])
            i++;
        }
    })

    for (let key in ranks) {
        let differencePix = toKey[key] - fromKey[key];
        let differencePercentage = ranks[key] / valuesWithPosObj[toKey[key]];
        let rankPos = differencePercentage * differencePix + Number(fromKey[key]);
        ranksPos[rankPos] = ranks[key];
    }

    return ranksPos;
}
