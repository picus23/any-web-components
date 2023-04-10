import { FC } from "react";
import Button from "../buttons/Button";
import { FormEventHandler } from "react";

interface SearchInputProps {
    handleUserType: FormEventHandler<HTMLInputElement>,
    handleSearch: FormEventHandler<HTMLFormElement>,
}
 
const SearchInput: FC<SearchInputProps> = ({handleSearch, handleUserType}) => {
    
    return (
        <form className=" d-flex my-2" onSubmit={handleSearch}>
            <input 
                onInput={handleUserType}
                className="input-find" 
                type="search" 
                placeholder="Поиск" 
                aria-label="Search"
            />
            <Button btn_style="find-blue">Найти</Button>
        </form>
    );
}
 
export default SearchInput;