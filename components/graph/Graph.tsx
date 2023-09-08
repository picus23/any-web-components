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
    height: number,
}

const Graph: FC<GraphProps> = ({
                                   data,
                                   valuesFromSlider,
                                   isWaiting,
                                   height,
                               }) => {
    let [ranks, maxValue] = getRanks(data);

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
        <div className="d-flex justify-content-between align-items-end graph-wrapper" style={{columnGap: 5}}>
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
                        {/*<div key={value} className='d-flex' style={{flex: 1}}>*/}

                        {showDelimiter &&
                            <GraphDelimeter height={100} rank={comparisonArray[currentDelimetrId - 1]}/>}
                        <GraphScale
                            index={index}
                            height={height}
                            count={Number(count)}
                            value={numberValue}
                            isWaiting={isWaiting}
                            biggestCount={maxValue}
                            valuesFromSlider={valuesFromSlider}
                        />

                        {/*</div>*/}
                    </>
                })
            }
        </div>
    </>
}

export default Graph;


