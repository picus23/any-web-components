import { FC } from "react";
import Button from "../buttons/Button";

interface SearchInputProps {
    
}
 
const SearchInput: FC<SearchInputProps> = () => {
    return <>
            <form className=" d-flex my-2">
                <input className="input-find" type="search" placeholder="Поиск" aria-label="Search" />
                <Button btn_style="find-blue">Найти</Button>
            </form>
    </>;
}
 
export default SearchInput;