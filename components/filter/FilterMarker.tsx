import { FC, ReactNode } from "react";
import { MdCancel, MdOutlineSegment, MdUnfoldMore } from "react-icons/md";
import { Input } from "../inputs/Input";

interface FilterMarkerProps {
    children?: ReactNode,
    title?: string,
    filter_style?: string,
}

const FilterMarker: FC<FilterMarkerProps> = ({ children, title, filter_style }) => {
    return <div className='filter-marker'>
        <Input style="square-gray" />
        <span className="font-size-16-gray text-overflow">1/4’’</span>
    </div>;
}

export default FilterMarker;