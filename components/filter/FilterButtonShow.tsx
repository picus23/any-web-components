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
        <span style={{fontSize:'16px',fontWeight:500,color:'#000'}}>{children}</span>
        { counter && <span className="filter-counter-up">{counter}</span> }
    </button>
}
 
export default FilterButtonShow;
