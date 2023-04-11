import { FC, ReactNode } from "react";
import { MdCancel, MdChevronRight, MdOutlineSegment, MdUnfoldMore } from "react-icons/md";
import { Input } from "../inputs/Input";

interface FilterFieldBlueProps {
    children?: ReactNode,
    title?: string,
    field_style?: string,
}

const FilterFieldBlue: FC<FilterFieldBlueProps> = ({ children, title, field_style }) => {
    return <div className="filter-field-blue justify-content-between">
        <div className="d-flex align-items-center">
            <Input style="square-white" />
            <span className="fw-500 ms-2">{title}</span>
        </div>
        <MdChevronRight size={24} fill="white" />
    </div>;
}

export default FilterFieldBlue;