import {FC, ReactNode, useEffect} from "react";
import calculateHeight from "../../components/graph/functions/calculateHeight";


interface GraphScaleProps {
    isActive?: boolean,
    isWaiting: boolean,
    height: number,
    count: number,
    // widthScale: number,
    value: number,
    biggestCount: number|number[],
    index: number,
    // position?: number,
    valuesFromSlider: number[],
}

const GraphScale: FC<GraphScaleProps> = ({
                                             isActive = false,
                                             isWaiting,
                                             count,
                                             biggestCount,
                                             height,
                                             value,
                                             index,
                                             valuesFromSlider
                                         }) => {
    let calculatedHeight = calculateHeight(count, biggestCount, height);
    value >= valuesFromSlider[0] && value <= valuesFromSlider[1] ?
        isActive = true :
        isActive = false
    return <>
        <div className="d-flex flex-column align-items-center justify-content-end" style={{width: '100%',height: calculatedHeight}}>
            <div className={`graph-scale-${index} graph-scale ` + (isActive && 'active')}
                 style={{height: calculatedHeight,width:'100%'}}/>
        </div>
    </>
}

export default GraphScale;


