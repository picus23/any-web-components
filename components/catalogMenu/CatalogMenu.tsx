import { FC, ReactNode } from "react";
import { Button } from "react-bootstrap";
import { MdArrowForward } from 'react-icons/md';
import { MdChevronRight } from 'react-icons/md';
import SearchField from "../searchElement/SearchField";
import ButtonGrayArrow from "../buttons/ButtonGrayArrow";


interface CatalogMenuProps {
    children?: ReactNode,
    icon?: ReactNode,
    img_path?: string,
    title?: string,
    series?: string,
    categories: string[],
}

const CatalogMenu: FC<CatalogMenuProps> = ({ children, icon, img_path, series, title, categories }) => {
    return <div className="catalog-menu-item mx-auto">
        <div className="w-100">
            <SearchField title={'Фитинги для труб'} category={'45 серия'} icon={<img src="/kit/empty_square.png" alt="" />}></SearchField>
        </div>

        {/* <div className="catalog-menu-item-header">
            <img src="/kit/empty_square.png" alt="" />
            <div className="catalog-menu-item-img-text">
                <span className="font-size-20">{title}</span>
                <span className="font-size-16 series">{series}</span>
            </div>
                <ButtonGrayArrow />
        </div> */}
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