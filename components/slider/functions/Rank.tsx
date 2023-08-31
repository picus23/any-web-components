import rankPos from "@/components/slider/functions/RankPos";
import RankPos from "@/components/slider/functions/RankPos";
export default function Rank(valuesCv:number[],comparisonArray:number[]) {

    let countSubArr = 0;
    var j = 0;
    let rank: any = {};
    let tempRank = [];
    for (let i = 0; i < comparisonArray.length; i++) {
        if (valuesCv[j] >= comparisonArray[i] && valuesCv[j] <= comparisonArray[i + 1] || valuesCv[j] <= comparisonArray[i] && valuesCv[j] >= comparisonArray[i + 1]) {
            while (valuesCv[j] >= comparisonArray[i] && valuesCv[j] <= comparisonArray[i + 1] || valuesCv[j] <= comparisonArray[i] && valuesCv[j] >= comparisonArray[i + 1]) {
                j++;
            }
            tempRank[countSubArr] = comparisonArray[i + 1];
            countSubArr++;
        }
    }

    for (let i = 0; i < tempRank.length; i++) {
        let pos = RankPos();

        console.log({pos})
        rank[pos] = tempRank[i];
    }
    return [countSubArr,rank];
    // console.log({tempRank, rank})
}