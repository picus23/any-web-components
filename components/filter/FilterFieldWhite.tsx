import { FC, ReactNode } from "react";
import { MdCancel, MdChevronRight, MdOutlineSegment, MdUnfoldMore } from "react-icons/md";
import { Input } from "../inputs/Input";

interface FilterFieldWhiteProps {
    children?: ReactNode,
    title?: string,
    field_style?: string,
}

const FilterFieldWhite: FC<FilterFieldWhiteProps> = ({ children, title, field_style }) => {
    return <div className="filter-field-white justify-content-between">
        <div className="d-flex align-items-center">
            <Input style="square-gray" />
            <span className="fw-500 ms-2">{title}</span>
        </div>
        <MdChevronRight size={24} fill="gray" />
    </div>;
}

export default FilterFieldWhite;