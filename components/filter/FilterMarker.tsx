import { FC, ReactNode } from "react";
import { MdCancel, MdOutlineSegment, MdUnfoldMore } from "react-icons/md";
import Input from "../inputs/Input";
import { Checkbox } from "antd";

interface FilterMarkerProps {
    title: string,
    isActive?: boolean,
    isGray?: boolean,
    onChange?: (isChecked: boolean) => void,
}

const FilterMarker: FC<FilterMarkerProps> = ({ title, isGray = false, isActive = false, onChange }) => {
    return <label className={'filter-marker ' + (isActive ? 'filter-input-active ' : '') + (isGray ? 'input-bg-gray' : '')}>
        <Checkbox checked={isActive} onChange={e => onChange(e.target.checked)} />
        {/* <input className='square-gray ' type="checkbox" checked={isActive} onChange={e => onChange(e.target.checked)}/> */}
        <span className="font-size-16-gray text-overflow">{title}</span>
    </label>;
}

export default FilterMarker;