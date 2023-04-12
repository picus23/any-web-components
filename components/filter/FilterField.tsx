import { FC, ReactNode } from "react";
import { MdChevronRight } from "react-icons/md";


interface FilterFieldProps {
    children?: ReactNode,
    title?: string | ReactNode,
    onClick?: () => void,

    isActive?: boolean,
    isSelected?: boolean,
    isOpen?: boolean,
    isEmbedded?: boolean,

}

const FilterField: FC<FilterFieldProps> = ({ children, title, onClick, isActive = false, isSelected = false, isOpen = false, isEmbedded = false }) => {
 
    return <li><button role='button' tabIndex={0}
    
            className={
                'filter-field my-1 ' +
                (isSelected ? 'selected ' : '') +
                (isActive ? 'active ' : '') +
                (isOpen ? ' filter-field-child ' : '')
            }
            onClick={onClick}>
            <div className="d-flex align-items-center">
                {isActive ? <img src="/kit/white_square.png" alt="" /> : <img src="/kit/gray_square.png" alt="" />}
                <span className="fw-500 ms-2 d-flex text-left">{title}</span>
            </div>
            <MdChevronRight size={24} fill={isActive ? 'white' : 'gray'} />
            </button>
    </li >
}

export default FilterField;