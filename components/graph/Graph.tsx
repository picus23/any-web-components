import {FC, useEffect} from "react";
import getRanks from "../../components/graph/functions/getRanks";
import GraphDelimeter from "../../components/graph/GraphDelimeter";
import GraphScale from "../../components/graph/GraphScale";
import sortObject from "../../components/graph/functions/sortObject";

const comparisonArray = [-200, -10, -1, 0, 1, 10, 100, 1000, 10000];
const getCurrentDelimitr = (value: number): number => {
    for (let i = 0; i < comparisonArray.length; i++) {
            if (i == 0) continue

            const pre = comparisonArray[i - 1]
            const after = comparisonArray[i]

            if (pre <= value && value < after)
                return i
        }

    return 0
}

interface GraphProps {
    data: { [key: string]: number },
    valuesFromSlider: number[],
    isWaiting: boolean,
    height: number,
}

const Graph: FC<GraphProps> = ({
                                   data,
                                   valuesFromSlider,
                                   isWaiting,
                                   height,
                               }) => {
    let [maxValue] = getRanks(data);

    if (isWaiting) {
        useEffect(() => {
            let graphScales = document.querySelectorAll('.graph-scale');
            let scalesCount = graphScales.length;
            let index = 0;
            let intervalId = setInterval(() => {
                graphScales[index].classList.add('waiting');
                index++;
                if (index >= scalesCount) {
                    clearInterval(intervalId);
                }
            }, 50)
        }, [data])
    }
    data = sortObject(data)
    let last = getCurrentDelimitr(Number(Object.keys(data)[0].substring(1)))

    return <>
        <div className="d-flex justify-content-between align-items-end graph-wrapper" style={{columnGap: 5, marginTop: 35}}>
            {
                Object.keys(data).map((value, index) => {
                    const count = data[value]

                    const numberValue = Number(value.substring(1))
                    const currentDelimetrId = getCurrentDelimitr(numberValue)

                    let showDelimiter = false

                    if (currentDelimetrId && currentDelimetrId != last) {
                        last = currentDelimetrId
                        showDelimiter = true
                    }

                    return <>
                        {showDelimiter &&
                            <GraphDelimeter height={height + 20} rank={comparisonArray[currentDelimetrId - 1]}/>}
                        <GraphScale
                            index={index}
                            height={height}
                            count={Number(count)}
                            value={numberValue}
                            isWaiting={isWaiting}
                            biggestCount={maxValue}
                            valuesFromSlider={valuesFromSlider}
                        />

                    </>
                })
            }
        </div>
    </>
}

export default Graph;


