import { FC, ReactNode } from "react";

interface FilterHeadProps {
    icon?: ReactNode,
    title?: string | ReactNode,
    filter_style?: string,
}

const FilterHead: FC<FilterHeadProps> = ({ title, icon }) => {
    return <div className="d-flex align-items-center mb-2 mt-3">
        {icon}
        <strong className="font-size-16-black fw-500 ms-2">{title}</strong>
    </div>
}

export default FilterHead;
