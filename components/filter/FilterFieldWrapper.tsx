
import React, { FC, ReactNode } from "react";
import { filterHeight } from "../varibles";

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