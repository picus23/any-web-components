import { FC, ReactNode } from "react";

interface FilterMarkerWrapperProps {
    children?: ReactNode
}

const FilterMarkerWrapper: FC<FilterMarkerWrapperProps> = ({ children }) => {
    return <div className="filter-chips-block">
        {children}
    </div>
}

export default FilterMarkerWrapper;