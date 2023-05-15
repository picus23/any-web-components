import Image from 'next/image';
import { ReactNode } from 'react'
import { MdArrowForward } from 'react-icons/md'
import ButtonGrayArrow from '../../buttons/ButtonGrayArrow'

interface FieldSeriesProps {
    title: string,
    subtitle?: string,
    icon?: ReactNode,
    characteristics?: ReactNode[],
    handleArrowClick?: () => void,
}


function FieldSeries(props: FieldSeriesProps) {
    return (
        <div className="search-field my-2">
            <div className='d-flex align-items-center'>
                {props.icon ?? <Image width={100} height={100} src="/kit/empty_square.png" alt="" />}
                <div className="d-flex flex-column mx-2 justify-content-start">
                    <span className="font-size-20 fw-500">{props.title}</span>
                    {props.subtitle ? <span className="font-size-16-gray fw-500">{props.subtitle}</span> : false}
                </div>
            </div>
            <ButtonGrayArrow onClick={props.handleArrowClick} />
        </div>
    )
}

export default FieldSeries;
