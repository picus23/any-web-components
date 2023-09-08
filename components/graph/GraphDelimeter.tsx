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
        <div className="graph-delimeter position-relative" style={{width: 1, height: height}}>
        <span className="d-flex justify-content-center px-3">{rank}</span>
        </div>
    </div>
}

export default GraphDelimeter;


