import { FC, ReactNode} from "react";
import { MdKeyboardArrowRight, MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import FilterField from "../filter/FilterField";


interface HeaderCatalogTabsProps {
    active?: number,
    titles: string[],
    children: ReactNode,
    widthColl: number,
    onClick: (index: number) => void,
}



const HeaderCatalogTabs: FC<HeaderCatalogTabsProps> = ({ active = 0, titles, children, widthColl, onClick}) => {

    return <div className="row h-100 align-items-stretch">
        <div className={`col-${widthColl}`}>

            <ul className="sticky-top list-group list-group-flush py-2 overflow-auto ">
                {
                    titles.map((title: string, index: number) => {

                        const isActive = index == active

                        return <FilterField
                            key={title + '_' + index}
                            title={title}
                            onClick={() => onClick(index)}
                            isActive={isActive}
                        />
                    })
                }
            </ul>

        </div>
        <div className="col border-start ">
            {
                children
            }
        </div>
    </div>

}

export default HeaderCatalogTabs;