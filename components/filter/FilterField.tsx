import { FC, ReactNode } from "react";
import { MdChevronRight } from "react-icons/md";


interface FilterFieldProps {
    children?: ReactNode,
    title?: string | ReactNode,
    onClick?: () => void,

    isActive?: boolean,
    isSelected?: boolean,
    isOpen?: false | 'open' | 'close',
    isEmbedded?: boolean,

}

const FilterField: FC<FilterFieldProps> = ({ children, title, onClick, isActive = false, isSelected = false, isOpen = false, isEmbedded = false }) => {
 
    return <li><button role='button' tabIndex={0}
    
            className={
                'filter-field my-1 ' +
                (isSelected ? 'selected ' : '') +
                (isActive ? 'active ' : '') + 
                (isOpen=='open' ? 'isOpen ' : '')
            }
            onClick={onClick}>
            <div className="d-flex align-items-center">
                {isActive ? <img src="/kit/white_square.png" alt="" /> : <img src="/kit/gray_square.png" alt="" />}
                <span className="fw-500 ms-2 d-flex text-left">{title}</span>
            </div>
                <div className={` ${isOpen=='close' ? 'filter-field-up':''} ${isOpen=='open' ? 'filter-field-down':''} `}>
                    <MdChevronRight size={24} fill={isActive ? 'white' : 'gray'} />
                </div>
            </button>
    </li >
}

export default FilterField;