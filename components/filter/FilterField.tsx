import { FC, ReactNode } from "react";
import { MdCancel, MdChevronRight, MdOutlineSegment, MdUnfoldMore } from "react-icons/md";
import { Input } from "../inputs/Input";

interface FilterFieldProps {
    children?: ReactNode,
    title?: string,
    field_style?: string,
    flag?: string,
    onClick?: () => void,
    isActive?: boolean,

}

const FilterField: FC<FilterFieldProps> = ({ children, title, onClick, isActive = false, flag }) => {
    return <button className={'filter-field justify-content-between ' + (isActive ? 'active' : '')} onClick={onClick}>
        <div className="d-flex align-items-center">
            {isActive ? <img src="/kit/white_square.png" alt="" /> : <img src="/kit/gray_square.png" alt="" />}
            <span className="fw-500 ms-2">{title}</span>
        </div>
        {isActive ? <MdChevronRight size={24} fill="white" /> : <MdChevronRight size={24} fill="gray" />}
    </button >
}

export default FilterField;