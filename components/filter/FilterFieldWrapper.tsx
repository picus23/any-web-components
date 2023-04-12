import React, { FC, ReactNode } from "react";

interface FilterFieldWrapperProps {
    children: ReactNode;
    height?: number, 
}
 
const FilterFieldWrapper: FC<FilterFieldWrapperProps> = ({children, height = 600}) => {
    return <ul className="list-group list-unstyled p-2 overflow-auto" style={{ maxHeight: height, minHeight: height }}>
        {children}
    </ul>;
}
 
export default FilterFieldWrapper;