import { FC, ReactNode } from "react";
import { MdCancel, MdOutlineSegment, MdUnfoldMore } from "react-icons/md";
import Input from "../inputs/Input";

interface FilterMarkerProps {
    title?: string,
    isActive?: boolean,
    isGray?: boolean,
    onClick?: () => void,
}

const FilterMarker: FC<FilterMarkerProps> = ({ title, isGray = false, isActive = false, onClick }) => {
    return <label className={'filter-marker ' + (isActive ? 'filter-input-active ' : '') + (isGray ? 'input-bg-gray' : '')}>
        <input className='square-gray ' type="checkbox" onClick={onClick}/>
        {/* <input className='square-gray ' type="checkbox" (isActive ? checked : false) /> */}
        <span className="font-size-16-gray text-overflow">{title}</span>
    </label>;
}

export default FilterMarker;