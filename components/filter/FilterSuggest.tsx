import { FC, ReactNode } from "react";
import { MdCancel, MdOutlineSegment, MdUnfoldMore } from "react-icons/md";

interface FilterSuggestProps {
    title: string,
    icon: ReactNode,
    isSuggest?: boolean,
    onClick: () => void,

}

const FilterSuggest: FC<FilterSuggestProps> = ({ title, icon, isSuggest = false, onClick }) => {
    return <button className='d-flex align-items-center justify-content-center rounded-pill gap-1 px-2 py-1 position-relative border border-secondary-subtle me-1'
        style={{ background: '#fff' }} onClick={onClick}>
        {icon}
        <span className="font-size-16-gray text-overflow">{title}</span>
        {
            isSuggest ?
                <span className="position-absolute top-0 start-100 translate-middle p-2 bg-primary border border-primary rounded-circle">
                    <span className="visually-hidden">New alerts</span>
                </span>
                : false
        }
    </button>;
}

export default FilterSuggest;
