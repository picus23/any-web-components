import Image from 'next/image';
import ButtonGrayArrow from '../../buttons/ButtonGrayArrow';
import { FC, ReactNode } from 'react'


interface FieldPagetitleProps {
    pagetitle: ReactNode,
    imageUrl: string,
    basketButton: ReactNode,
    handleArrowClick?: () => void,
}


const FieldPagetitle: FC<FieldPagetitleProps> = ({ pagetitle, imageUrl, basketButton, handleArrowClick }) => {

    return <div className="d-flex gap-2 align-items-center">
        <Image src={imageUrl} width={64} height={64} alt='product' />
        <div role='button' onClick={handleArrowClick} className="d-flex align-items-center justify-content-between flex-grow-1">
            {pagetitle}
            {basketButton}
        </div>
        {/* <div>
            <ButtonGrayArrow onClick={handleArrowClick} />
        </div> */}
    </div>
}
export default FieldPagetitle;

