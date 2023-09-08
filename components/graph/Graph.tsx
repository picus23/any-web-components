import {FC, ReactNode, useEffect, useRef, useState} from "react";
import getValuesPos from "@/components/graph/functions/getValuesPos";
import getRanks from "@/components/graph/functions/getRanks";
import GraphDelimeter from "@/components/graph/GraphDelimeter";
import GraphScale from "@/components/graph/GraphScale";
import sortObject from "@/components/graph/functions/sortObject";
import {Slider} from "antd";
import {rank} from "d3-array";


const comparisonArray = [-200, -10, -1, 0, 1, 10, 100, 1000, 10000];

const getCurrentDelimitr = (value: number): number => {


    for (const key in comparisonArray) {
        if (key == '0') continue

        const pre = comparisonArray[key - 1]
        const after = comparisonArray[key]

        if (pre <= value && value < after)
            return Number(key)
    }

    return false
}

interface GraphProps {
    data: { [key: string]: number },
    valuesFromSlider: number[],
    // width: number,
    isWaiting: boolean,
}

const Graph: FC<GraphProps> = ({
                                   data,
                                   valuesFromSlider,
                                   isWaiting,
                               }) => {
    let [ranks, maxValue] = getRanks(data);
    // let [widthGraphWrapper,setWidthGraphWrapper] = useState(document.querySelector('.graph-wrapper')!.clientWidth)
    const widthGraphWrapper = useRef<number>(0)
    const widthCalculated = useRef<number>(0)

    useEffect(() => {
        widthGraphWrapper.current = document.querySelector('.graph-wrapper')!.clientWidth;
        widthCalculated.current = widthGraphWrapper.current / (Object.keys(data).length + Object.keys(ranks).length - 1)
    }, [])

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
        }, [])
    }


    data = sortObject(data)
    let last = getCurrentDelimitr(Number(Object.keys(data)[0].substring(1)))

    return <>
        <div className="d-flex justify-content-between align-items-end graph-wrapper">
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

                    // {console.log({widthGraphWrapper,widthCalculated})}
                    return <div key={value} className='d-flex'>

                        {showDelimiter && <GraphDelimeter height={100} rank={comparisonArray[currentDelimetrId - 1]}/>}
                        <GraphScale
                            // widthScale={widthScale}
                            index={index}
                            height={150}
                            width={widthCalculated['current']}
                            count={Number(count)}
                            value={numberValue}
                            isWaiting={isWaiting}
                            biggestCount={maxValue}
                            valuesFromSlider={valuesFromSlider}
                        />

                    </div>

                })
            }
        </div>
    </>
}

export default Graph;


