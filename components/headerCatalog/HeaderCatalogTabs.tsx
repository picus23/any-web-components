import { FC, ReactNode} from "react";
import { MdKeyboardArrowRight, MdOutlineCheckBoxOutlineBlank } from "react-icons/md";


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
                        const classli = "list-group-item border-0 rounded-3 d-flex gap-2 mb-2" + (isActive ? ' active' : '')

                        return <li key={title + '_' + index} className={classli} role='button' onClick={() => onClick(index)}>
                            <MdOutlineCheckBoxOutlineBlank size={24} color={isActive ? '#fff3' : '#aaa3'} />
                            <div className="flex-grow-1">{title}</div>
                            <MdKeyboardArrowRight size={24} color={isActive ? '#fff' : '#aaa'} />
                        </li>
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