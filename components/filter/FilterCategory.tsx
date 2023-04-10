import { FC, ReactNode } from "react";
import { MdOutlineSegment, MdUnfoldMore } from "react-icons/md";

interface FilterCategoryProps {
    children?: ReactNode,
    title?: string,
    filter_style?: string,
}

const FilterCategory: FC<FilterCategoryProps> = ({ children,title,filter_style }) => {
    return <div className={filter_style ? filter_style : 'filter-category'}>
        <div className="d-flex gap-2 align-items-center">
            <MdOutlineSegment size={20} fill="gray" />
            {children}
        </div>
        <MdUnfoldMore size={20} fill="gray" />
        
    </div>;
}

export default FilterCategory;