import rankPos from "./getRanksPos";

export default function getRanks(values:number[],comparisonArray:number[],widthCanvas:number) {

    let countSubArr = 0;
    var j = 0;
    let ranks: any = {};
    // let tempRank = [];

    for (let i = 0; i < comparisonArray.length; i++) {
        if (values[j] >= comparisonArray[i] && values[j] <= comparisonArray[i + 1] || values[j] <= comparisonArray[i] && values[j] >= comparisonArray[i + 1]) {
            while (values[j] >= comparisonArray[i] && values[j] <= comparisonArray[i + 1] || values[j] <= comparisonArray[i] && values[j] >= comparisonArray[i + 1]) {
                j++;
            }
            if (values[values.length - 1] > comparisonArray[i + 1]) {
                ranks[countSubArr] = comparisonArray[i + 1];
            }
            countSubArr++;
        }
    }
    // tempRank.forEach((value,index) => {
    //     let pos = rankPos(widthCanvas,countSubArr,index);
    //     ranks[pos] = value;
    // })
    return [countSubArr,ranks];
}