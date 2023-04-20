import { FC, FormEventHandler, ReactNode } from "react";
import { MdOutlineSegment, MdUnfoldMore } from "react-icons/md";

interface FilterCategoryProps {
    children?: ReactNode,
    title?: string,
    filter_style?: string,
    onClick: () => void,
    // handleSearch: FormEventHandler<HTMLFormElement>,

}

const FilterCategory: FC<FilterCategoryProps> = ({ children, title, filter_style, onClick }) => {
    return <div className={filter_style ? filter_style : 'filter-category'}>
        <div className="d-flex gap-2 align-items-center">
            <button
                style={{ border: 'none', background: 'none' }}
                onClick={onClick}
            >
                <MdOutlineSegment size={20} fill="gray" />
            </button>
            <span className="font-size-16-gray">{title}</span>
        </div>
        <MdUnfoldMore size={20} fill="gray" />
    </div>;
}

export default FilterCategory;

