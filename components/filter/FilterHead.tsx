import { FC, ReactNode } from "react";
import { MdCancel, MdOutlineSegment, MdUnfoldMore } from "react-icons/md";

interface FilterHeadProps {
    children?: ReactNode,
    title?: string,
    filter_style?: string,
}

const FilterHead: FC<FilterHeadProps> = ({ children, title, filter_style }) => {
    return <>
        {children}
    </>
}

export default FilterHead;