import { FC, ReactNode} from "react";
import FilterField from "../filter/FilterField";

interface HeaderItem {
    title: string,
    preview: string,
}

interface HeaderCatalogTabsProps {
    active?: number,
    titles: HeaderItem[],
    children: ReactNode,
    widthColl: number,
    onClick: (index: number) => void,
}



const HeaderCatalogTabs: FC<HeaderCatalogTabsProps> = ({ active = 0, titles, children, widthColl, onClick}) => {

    return <div className="row h-100 align-items-stretch ">
        <div className={`col-${widthColl} h-100` }>

            <ul className="sticky-top list-group list-group-flush py-2 pe-2 h-100 overflow-auto">
                {
                    titles.map((item: HeaderItem, index: number) => {

                        const isActive = index == active

                        return <FilterField
                            key={item.title + '_' + index}
                            title={item.title}
                            onClick={() => onClick(index)}
                            isActive={isActive}
                            imgUrl={item.preview}
                        />
                    })
                }
            </ul>

        </div>
        <div className="col border-start h-100 overflow-auto ">
            {
                children
            }
        </div>
    </div>

}

export default HeaderCatalogTabs;