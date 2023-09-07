import {FC, ReactNode} from "react";


interface GraphDelimeterProps {
    width?: number,
    height: number,
    rank: number,
    position?: number,
}

const GraphDelimeter: FC<GraphDelimeterProps> = ({width, height, rank, position}) => {

    return <div className="d-flex flex-column align-items-center gap-2"
        // style={{left: position}}
    >
        <span>{rank}</span>
        <div className="graph-delimeter" style={{width: 5, height: height}}>
        </div>
    </div>
}

export default GraphDelimeter;


