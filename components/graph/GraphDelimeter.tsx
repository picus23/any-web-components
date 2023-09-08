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
        <b><span className="text-decoration-underline position-absolute d-flex justify-content-center" style={{width:10,top:'-20px',right:'-5px'}}>{rank}</span></b>
        </div>
    </div>
}

export default GraphDelimeter;


