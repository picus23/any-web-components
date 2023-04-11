import { FC } from "react";
import Button from "../buttons/Button";
import { FormEventHandler } from "react";

interface FilterSearchInputProps {
    handleUserType: FormEventHandler<HTMLInputElement>,
    handleSearch: FormEventHandler<HTMLFormElement>,
}

const FilterSearchInput: FC<FilterSearchInputProps> = ({ handleSearch, handleUserType }) => {

    return <div className="filter-search-input">
        <form className=" d-flex my-2" onSubmit={handleSearch}>
            <input
                onInput={handleUserType}
                className="filter-search-field"
                type="search"
                placeholder="Поиск"
                aria-label="Search"
            />
            <Button btn_style="filter-search-btn-find">Найти</Button>
        </form>
    </div>
}

export default FilterSearchInput;