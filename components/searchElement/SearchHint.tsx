import { FC, ReactNode } from "react";
import { MdSearch } from "react-icons/md";
import { MdArrowForward } from "react-icons/md";
import SearchField from "../searchElement/SearchField";


interface SearchHintProps {
    children?: ReactNode,
    icon?: ReactNode,
    title?: number,
    type_btn?: string,
    type_counter?: string,
}

const SearchHint: FC<SearchHintProps> = ({ children, icon, title }) => {
    return <div className="search-hint">
        <div className="search-hint-history">
            <span className="font-size-16-gray">Вы искали</span>
            <div className="d-flex">
                <div className="search-hint-img-text">
                    <MdSearch />
                    <span className="font-size-20 mx-2">Hy-Lok- 3мм</span>
                </div>
                <div className="search-hint-img-text mx-3">
                    <MdSearch />
                    <span className="font-size-20 mx-2">Hy-Lok- 3мм</span>
                </div>
                <div className="search-hint-img-text mx-3">
                    <MdSearch />
                    <span className="font-size-20 mx-2">Hy-Lok- 3мм</span>
                </div>
            </div>
        </div>
        <div className="search-hint-search-often">
            <span className="font-size-16-gray">Часто ищут</span>
            <SearchField title={'Hy-Lok- 3мм'} icon={<MdSearch />}></SearchField>
            <SearchField title={'Шаровые краны'} icon={<MdSearch />}></SearchField>
            <SearchField title={'Микронные фильтры'} icon={<MdSearch />}></SearchField>
        </div>
        <div className="search-hint-search-often"> 
            <span className="font-size-16-gray">Популярные категории</span>
            <SearchField title={'Фитинги для труб'} category={'45 серия'} icon={<svg width="64" height="64" viewBox="0 0  64" fill="#585757" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 20H20V13.3334H0V20Z" fill="#E53B35" /></svg>}></SearchField>
            <SearchField title={'Фитинги для труб'} category={'45 серия'} icon={<svg width="64" height="64" viewBox="0 0  64" fill="#585757" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 20H20V13.3334H0V20Z" fill="#E53B35" /></svg>}></SearchField>
            <SearchField title={'Фитинги для труб'} category={'45 серия'} icon={<svg width="64" height="64" viewBox="0 0  64" fill="#585757" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 20H20V13.3334H0V20Z" fill="#E53B35" /></svg>}></SearchField>
        </div>



    </div>
}

export default SearchHint;


// {`${type_btn ? 'my-btn-' + type_btn : 'btn-primary'}`} 