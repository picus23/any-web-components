import Image from 'next/image';
import { ReactNode } from 'react'
import { MdArrowForward } from 'react-icons/md'
import ButtonGrayArrow from '../../buttons/ButtonGrayArrow'

interface FieldSeriesProps {
    title: ReactNode,
    subtitle?: string,
    icon?: string,
    characteristics?: ReactNode[],
    handleArrowClick?: () => void,
}


function FieldSeries({ title, subtitle, icon, characteristics, handleArrowClick }: FieldSeriesProps) {
    return (
            <div role='button' onClick={handleArrowClick} className='d-flex align-items-center' >
                {!!icon && <Image width={64} height={64} src={icon} alt="" />}
                <div className="d-flex flex-column mx-2 justify-content-start">
                    <span className="font-size-20 fw-500">{title}</span>
                    {!!subtitle && <span className="font-size-16-gray fw-500">{subtitle}</span>}
                </div>
            </div>
    )
}

export default FieldSeries;
