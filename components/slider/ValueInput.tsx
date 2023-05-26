import { Dispatch, FC, SetStateAction } from "react";

interface ValueInputProps {
    value : any,
    unit?: string,
}

const ValueInput: FC<ValueInputProps> = ({ value,unit }) => {
    return <>
        <div className="d-flex justify-content-center align-items-center py-1 px-2 rounded-2" style={{ width: '100px', background: '#BEBEBE', color: '#000' }}>
            <span className="text-end w-50">{value}</span>
            <span className="text-end w-50">{unit}</span>
        </div>
    </>
}

export default ValueInput;