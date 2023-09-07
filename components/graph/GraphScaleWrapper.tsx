import {FC, ReactNode} from "react";
import getValuesPos from "@/components/graph/functions/getValuesPos";
import getRanks from "@/components/graph/functions/getRanks";


interface GraphScaleWrapperProps {
    children: ReactNode,
}

const GraphScaleWrapper: FC<GraphScaleWrapperProps> = ({children}) => {

    return <>
        <div className="">
        <div className="d-flex gap-1 position-relative">
                {children}

        </div>
        </div>
    </>
}

export default GraphScaleWrapper;


