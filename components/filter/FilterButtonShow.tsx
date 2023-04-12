import { FC, ReactNode } from "react";


interface FilterButtonShowProps {
    children?: ReactNode,
    icon?: ReactNode,
    icon2?: ReactNode
    counter?: number,
    onClick?: () => void,
}
 
const FilterButtonShow: FC<FilterButtonShowProps> = ({children, icon, icon2, counter, onClick}) => {
    return <button className='filter-btn-show mt-2 mb-2' onClick={onClick}>
        <span className='font-size-16-black fw-500'>{children}</span>
        { counter && <span className="filter-counter-up">{counter}</span> }
    </button>
}
 
export default FilterButtonShow;
