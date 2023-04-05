import { ReactNode } from 'react'
import { MdArrowForward } from 'react-icons/md'
import ButtonGrayArrow from '@/components/buttons/ButtonGrayArrow'

interface SearchSeriesProps {
    title: string,
    subtitle?: string,
    icon?: ReactNode,
    button?: ReactNode,
    button2?: ReactNode
}


function SearchSeries(props: SearchSeriesProps) {
    return (
        <div className="search-field px-2">
            <div className='d-flex'>
                {props.icon ?? false}
                <div className="d-flex flex-column mx-2 justify-content-start">
                    <span className="font-size-20 fw-500">{props.title}</span>
                    {props.subtitle ? <span className="font-size-16-gray fw-500">{props.subtitle}</span> : false}
                </div>
                {props.button ?? false}
                {props.button2 ?? false}
            </div>
            <ButtonGrayArrow />
        </div>
    )
}

export default SearchSeries;