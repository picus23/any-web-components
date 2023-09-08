import {FC, ReactNode, useEffect} from "react";
import calculateHeight from "@/components/graph/functions/calculateHeight";


interface GraphScaleProps {
    isActive?: boolean,
    isWaiting: boolean,
    width?: number,
    height: number,
    count: number,
    // widthScale: number,
    value: number,
    biggestCount: number,
    index: number,
    // position?: number,
    valuesFromSlider: number[],
}

const GraphScale: FC<GraphScaleProps> = ({
                                             isActive = false,
                                             isWaiting,
                                             width,
                                             count,
                                             biggestCount,
                                             // position,
                                             height,
                                             value,
                                             // widthScale,
                                             index,
                                             valuesFromSlider
                                         }) => {
    let calculatedHeight = calculateHeight(count, biggestCount, height);
    value >= valuesFromSlider[0] && value <= valuesFromSlider[1] ?
        isActive = true :
        isActive = false
    return <>
        <div className="d-flex flex-column align-items-center justify-content-end">
            <div className={`graph-scale-${index} graph-scale ` + (isActive && 'active')}
                 style={{height: calculatedHeight,width:width}}/>
        </div>
    </>
}

export default GraphScale;


