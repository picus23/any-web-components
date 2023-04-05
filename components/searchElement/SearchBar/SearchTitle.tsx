import { FC } from "react";

interface SeatchTitleProps {
    children: string
}
 
const SearchTitle: FC<SeatchTitleProps> = ({children}) => {
    return <span className="font-size-16-gray fw-500 my-2">{children}</span>;
}
 
export default SearchTitle;