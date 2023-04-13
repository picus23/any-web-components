import { FC } from "react";
import Button from "../buttons/Button";
import { FormEventHandler } from "react";
import { MdClose } from "react-icons/md";

interface FilterSearchInputProps {
    handleUserType: FormEventHandler<HTMLInputElement>,
    handleSearch: FormEventHandler<HTMLFormElement>,
    title?: string,
}

const FilterSearchInput: FC<FilterSearchInputProps> = ({ handleSearch, handleUserType, title }) => {

    return <div className="filter-search-input">
        <div className="d-flex justify-content-between w-100">
            <span className="filter-search-title">{title}</span>
            <MdClose className="d-flex align-items-start" size={24} fill="#969696" />
        </div>
        <form className=" d-flex my-2" onSubmit={handleSearch}>
            <input
                onInput={handleUserType}
                className="filter-search-field"
                type="search"
                placeholder="Поиск фильтров"
                aria-label="Search"
            />
            <button className="filter-search-btn-find">Найти</button>
        </form>
    </div >
}

export default FilterSearchInput;