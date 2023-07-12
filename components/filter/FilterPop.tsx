import { FC, ReactNode } from "react";

interface FilterPopProps {
    children: ReactNode
}

const FilterPop: FC<FilterPopProps> = ({ children }) => {
    return <div className="filter-category">{children}</div>
}

export default FilterPop;