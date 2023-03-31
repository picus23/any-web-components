import { FC, ReactNode } from "react";


interface SearchHintProps {
    children?: ReactNode,
    icon?: ReactNode,
    icon2?: ReactNode
    counter?: number,
    type_btn?: string,
    type_counter?: string,
}

const SearchHint: FC<SearchHintProps> = ({ children, icon, icon2, counter, type_btn, type_counter }) => {
    return <div className="search-hint">



    </div>
}

export default SearchHint;


// {`${type_btn ? 'my-btn-' + type_btn : 'btn-primary'}`} 