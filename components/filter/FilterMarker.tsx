import { FC, ReactNode } from "react";
import { MdCancel, MdOutlineSegment, MdUnfoldMore } from "react-icons/md";
import Input from "../inputs/Input";
import { Checkbox } from "antd";

interface FilterMarkerProps {
    title: string | ReactNode,
    isActive?: boolean,
    isGray?: boolean,
    isSelected?: boolean,
    color?: string,
    onChange?: (isChecked: boolean) => void,
    onHover?: (isOver: boolean) => void,
}

const FilterMarker: FC<FilterMarkerProps> = ({ title, isGray = false, isActive = false, isSelected = false, onChange, onHover, color }) => {
    return <label 
        className={'filter-marker ' + 
        (isActive ? 'filter-input-active ' : '') 
        + (isGray ? 'input-bg-gray ' : '')
        + (isSelected ? 'bg-primary bg-opacity-10 ' : '')
        + (!isActive && isSelected ? 'border border-success ' : '')
        }
        onMouseLeave={() => onHover && onHover(false)}
        onMouseOver={() => onHover && onHover(true)}
    >
            <Checkbox checked={isActive} onChange={e => onChange && onChange(e.target.checked)} />
        <span className="font-size-16-gray text-overflow" style={{ color }}>{title}</span>
    </label>;
}

export default FilterMarker;