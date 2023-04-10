import { FC, ReactNode } from "react";
import { MdCancel, MdChevronRight, MdOutlineSegment, MdUnfoldMore } from "react-icons/md";

interface FilterFieldProps {
    children?: ReactNode,
    title?: string,
    field_style?: string,
}

const FilterField: FC<FilterFieldProps> = ({ children, title, field_style }) => {
    return <div className={field_style ? field_style : 'filter-field-white'}>
        {children}
    </div>;
}

export default FilterField;