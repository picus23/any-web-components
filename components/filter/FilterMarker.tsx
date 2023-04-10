import { FC, ReactNode } from "react";
import { MdCancel, MdOutlineSegment, MdUnfoldMore } from "react-icons/md";
import { Input } from "../inputs/Input";

interface FilterMarkerProps {
    children?: ReactNode,
    title?: string,
    filter_style?: string,
}

const FilterMarker: FC<FilterMarkerProps> = ({ children, title, filter_style }) => {
    return <div className={filter_style ? filter_style : 'filter-marker'}>
        {children}
    </div>;
}

export default FilterMarker;