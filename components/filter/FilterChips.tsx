import { FC, ReactNode } from "react";
import { MdCancel, MdOutlineSegment, MdUnfoldMore } from "react-icons/md";

interface FilterChipsProps {
    children?: ReactNode,
    title?: string | ReactNode,
    filter_style?: string,
    onClick: () => void,

}

const FilterChips: FC<FilterChipsProps> = ({ children, title, onClick }) => {
    return <div className='filter-chips'>
        <span className="font-size-16-gray text-overflow">{title}</span>
        <button style={{ border: 'none', background: 'none' }}
            onClick={onClick}><MdCancel size={20} fill="gray" /></button>
    </div>;
}

export default FilterChips;
