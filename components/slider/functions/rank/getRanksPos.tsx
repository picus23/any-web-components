export default function getRanksPos(valuesWithPos: any, ranks: number[]) {
    let arr = Object.entries(valuesWithPos);
    console.log(arr)
    for(let [key,value] of arr) {
        console.log(key,value);
    }
  return ranks;
}
