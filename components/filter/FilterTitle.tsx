import { FC } from "react";

interface FilterTitleProps {
    title?: string,
}

const FilterTitle: FC<FilterTitleProps> = ({ title }) => {
    return <h4 className="font-size-20 fw-400 bg-white mb-2">{title}</h4>
}

export default FilterTitle;