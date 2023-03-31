import { ReactNode } from 'react'
import { MdArrowForward } from 'react-icons/md'

interface SearchFieldProps {
    title: string,
    category?: string,
    icon?: ReactNode
}


function SearchField(props: SearchFieldProps) {
    return (
        <div className="d-flex">
            {props.icon ?? false}
            <div className="d-flex flex-column mx-2">
                <span className="font-size-20">{props.title}</span>
                <span className="font-size-16-gray">{props.category}</span>
            </div>
            <div>
                <button className="catalog-menu-item-button rounded-circle"><MdArrowForward /></button>
            </div>
        </div>
    )
}

export default SearchField;