import {FC, ReactNode, useEffect} from "react";
import calculateHeight from "../../components/graph/functions/calculateHeight";
// import {Tooltip} from "react-tooltip";
import {Tooltip} from 'antd';

interface GraphScaleProps {
    isActive?: boolean,
    isWaiting?: boolean,
    height: number,
    count: number,
    value: number,
    biggestCount: number | number[],
    index: number,
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
    let tooltipString = `В наличии ${count} шт.`;
    let text = <div className="d-flex flex-column gap-2">
        <span>Значение - {value}</span>
        <span>{tooltipString}</span>
    </div>;

    return <>
        {!isWaiting ?
            <Tooltip placement="topLeft" title={text}>

                <div data-tooltip-id={`graph-scale-${index}`}
                     className={`pe-auto graph-scale ` + (isActive && 'active')}
                     style={{height: calculatedHeight, width: '100%'}}/>

            </Tooltip> :
            <div data-tooltip-id={`graph-scale-${index}`} className={`pe-auto graph-scale ` + (isActive && 'active')}
                 style={{height: calculatedHeight, width: '100%'}}/>
        }
    </>
}

export default GraphScale;


