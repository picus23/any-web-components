import { FC, ReactNode } from "react";
import { Button } from "react-bootstrap";
import { MdArrowForward } from 'react-icons/md';
import { MdChevronRight } from 'react-icons/md';
import SearchField from "../searchElement/SearchField";


interface CatalogMenuProps {
    children?: ReactNode,
    icon?: ReactNode,
    img_path?: string,
    title?: string,
    series?: string,
    categories: string[],
}

const CatalogMenu: FC<CatalogMenuProps> = ({ children, icon, img_path, series, title, categories }) => {
    return <div className="catalog-menu-item">
        <div className="catalog-menu-item-header">
            <svg width="64" height="64" viewBox="0 0  64" fill="#585757" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 20H20V13.3334H0V20Z" fill="#E53B35" /></svg>
            <div className="catalog-menu-item-img-text">
                <span className="font-size-20">{title}</span>
                <span className="font-size-16 series">{series}</span>
            </div>
            <div>
                <button className="catalog-menu-item-button rounded-circle"><MdArrowForward /></button>
                {/* <Button type_btn={'item-button-circle'}><MdArrowForward /></Button> */}
                {/* <button className="catalog-menu-item-button rounded-circle"><MdArrowForward /></button> */}
            </div>
        </div>
        <div className="catalog-menu-categories-list">
            {
                categories.map(category => {
                    return <div className="catalog-menu-categories-item">
                        <span>{category}</span>
                        <button className="catalog-menu-categories-item-button"><MdChevronRight /></button>
                    </div>
                })
            }
        </div>
    </div>
}

export default CatalogMenu;


// {`${type_btn ? 'my-btn-' + type_btn : 'btn-primary'}`} 