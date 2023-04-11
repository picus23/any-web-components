import { FC, ReactNode } from "react";
import { MdCancel, MdOutlineSegment, MdUnfoldMore } from "react-icons/md";

interface FilterChipsProps {
    children?: ReactNode,
    title?: string,
    filter_style?: string,
}

const FilterChips: FC<FilterChipsProps> = ({ children,title,filter_style }) => {
    return <div className={filter_style ? filter_style : 'filter-chips'}>
            <span className="font-size-16-gray text-overflow">{title}</span>
        <MdCancel size={20} fill="gray" />
    </div>;
}

export default FilterChips;
