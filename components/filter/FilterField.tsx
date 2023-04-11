import { FC, ReactNode } from "react";
import { MdCancel, MdChevronRight, MdOutlineSegment, MdUnfoldMore } from "react-icons/md";
import Input from "../inputs/Input";

interface FilterFieldProps {
    children?: ReactNode,
    title?: string | ReactNode,
    field_style?: string,
    flag?: string,
    onClick?: () => void,
    isActive?: boolean,
    isSelected?: boolean,
    isOpen?: boolean,
    isEmbedded?: boolean,

}

const FilterField: FC<FilterFieldProps> = ({ children, title, onClick, isActive = false, isSelected = false, isOpen = false, isEmbedded = false, flag }) => {
    return <li role='button'
        className={'filter-field my-1 ' +
            (isSelected ? 'selected ' : '') +
            (isActive ? 'active' : '') +
            (isOpen ? ' filter-field-child' : '')}
        onClick={onClick}>
        <div className="d-flex align-items-center">
            {isActive ? <img src="/kit/white_square.png" alt="" /> : <img src="/kit/gray_square.png" alt="" />}
            <span className="fw-500 ms-2 d-flex text-left">{title}</span>
        </div>
        {isActive ? <MdChevronRight size={24} fill="white" /> : <MdChevronRight size={24} fill="gray" />}
    </li >
}

export default FilterField;