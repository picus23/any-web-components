import { FC, ReactNode } from 'react'
import { MdArrowForward } from 'react-icons/md'
import ButtonGrayArrow from '../../buttons/ButtonGrayArrow'

interface FieldEncodingProps {
    imgUrl?: string,
    pagetitle: string,
    price?: number,
    amount?: number,
    icon?: ReactNode,
    basketButtons?: ReactNode,
    btnGrayArrow?: ReactNode,
    handleArrowClick?: () => void,
    isDelete?: boolean,
}


const FieldEncoding: FC<FieldEncodingProps> = ({ imgUrl, pagetitle, price, amount, basketButtons, btnGrayArrow, handleArrowClick }) => {
    return <div className="search-field my-2">
        <div className='d-flex justify-content-between align-items-center w-100 gap-2'>
            <div className='d-flex gap-2'>
                <img style={{ aspectRatio: '1/1', width: '64px', height: '64px' }} src={imgUrl} alt="logo" />
                <div className="d-flex flex-column justify-content-center">
                    <span className="font-size-20 fw-500">{pagetitle}</span>
                    <div className='d-flex gap-2'>
                        {price ? <span className="font-size-16-gray fw-500">{price}$ за шт.</span> : false}
                        {amount ? <span className="font-size-16-gray fw-500">Осталось {amount} шт.</span> : false}
                    </div>
                </div>
            </div>
            <div className='d-flex gap-2'>
                {basketButtons ?? false}
            </div>
        </div>

        {btnGrayArrow ? <div className=''><ButtonGrayArrow onClick={handleArrowClick} /></div> : false}

    </div>

}
export default FieldEncoding;

