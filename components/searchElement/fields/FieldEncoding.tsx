import { ReactNode } from 'react'
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
}


function FieldEncoding(props: FieldEncodingProps) {
    return (
        <div className="search-field my-2">
            <div className='d-flex justify-content-between align-items-center w-100 gap-2'>
                <div className='d-flex gap-2'>
                    <img style={{aspectRatio:'1/1',width:'64px',height:'64px'}} src={props.imgUrl} alt="logo" />
                    <div className="d-flex flex-column justify-content-center">
                        <span className="font-size-20 fw-500">{props.pagetitle}</span>
                        <div className='d-flex gap-2'>
                            {props.price ? <span className="font-size-16-gray fw-500">{props.price}$ за шт.</span> : false}
                            {props.amount ? <span className="font-size-16-gray fw-500">Осталось {props.amount} шт.</span> : false}
                        </div>
                    </div>
                </div>
                <div className='d-flex gap-2'>
                    {props.basketButtons ?? false}
                </div>
            </div>
            <div className=''>
                {props.btnGrayArrow ? <ButtonGrayArrow onClick={props.handleArrowClick} /> : false}
            </div>
        </div>
    )
}

export default FieldEncoding;
