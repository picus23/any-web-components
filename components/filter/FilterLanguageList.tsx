import { Children, FC, ReactNode } from "react";

interface FilterLaungageListProps {
    children?:ReactNode
}

const FilterLaungageList: FC<FilterLaungageListProps> = ({children}) => {
    return <ul className="filter-language-list">
        {children}
    </ul>
}

export default FilterLaungageList;