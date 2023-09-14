import Image from "next/image";
import {FC, ReactNode} from "react";
import {MdChevronRight} from 'react-icons/md';
import SearchSeries from "../searchElement/fields/FieldSeries";


interface CatalogMenuProps {
    children?: ReactNode,
    icon?: ReactNode,
    img_path?: string,
    title?: string,
    series?: string,
    categories: string[],
}

const CatalogMenu: FC<CatalogMenuProps> = ({children, icon, img_path, series, title, categories}) => {
    return <div className="catalog-menu-item mx-auto">
        <div className="w-100">
            <SearchSeries title={'Фитинги для труб'} subtitle={'45 серия'}
                          // icon={<Image width={100} height={100} src="/kit/empty_square.png" alt=""/>}
            />

            {/*</SearchSeries>*/}
        </div>

        <div className="catalog-menu-categories-list">
            {
                categories.map(category => {
                    return <div key={category} className="catalog-menu-categories-item">
                        <span>{category}</span>
                        <button className="catalog-menu-categories-item-button"><MdChevronRight/></button>
                    </div>
                })
            }
        </div>
    </div>
}

export default CatalogMenu;


// {`${btn_style ? 'my-btn-' + btn_style : 'btn-primary'}`} 