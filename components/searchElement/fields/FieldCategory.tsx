import { MdSearch } from 'react-icons/md'
import ButtonGrayArrow from '../../buttons/ButtonGrayArrow'
import { ReactNode } from 'react'

interface FieldCategoryProps {
    title: string,
    handleArrowClick?: () => void,
}


function FieldCategory(props: FieldCategoryProps) {
    
    return (
        <div className="search-field p-1">
            <div className="me-2">
                <MdSearch size={24} fill={'gray'} />
                <span className="font-size-20 ms-3 fw-500">{props.title}</span>
            </div>
            <ButtonGrayArrow onClick={props.handleArrowClick} />
        </div>
    )
}

export default FieldCategory;