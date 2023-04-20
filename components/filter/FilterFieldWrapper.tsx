import { filterHeight } from "@/components/filter/varibles";
import React, { FC, ReactNode } from "react";

interface FilterFieldWrapperProps {
    children: ReactNode;
    height?: number, 
}
 
const FilterFieldWrapper: FC<FilterFieldWrapperProps> = ({children}) => {
    const height = filterHeight
    return <ul className="list-group list-unstyled p-2 overflow-auto" style={{ maxHeight: height, minHeight: height }}>
        {children}
    </ul>;
}
 
export default FilterFieldWrapper;