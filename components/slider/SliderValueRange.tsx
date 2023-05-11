import { FC } from "react";

interface SliderValueRangeProps {
    value?: number
    unit?: string,
    values?: ()=>void
}

const SliderValueRange: FC<SliderValueRangeProps> = ({ value,unit,values }) => {
    return <>
        <div className="d-flex justify-content-center align-items-center py-1 px-2 rounded-2" style={{ width: '100px', background: '#BEBEBE', color: '#000' }}>
            <span className="text-end w-50">{value}</span>
            <span className="text-end w-50">{unit}</span>
        </div>
    </>
}

export default SliderValueRange;