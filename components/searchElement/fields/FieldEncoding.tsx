import { ReactNode } from 'react'
import { MdArrowForward } from 'react-icons/md'
import ButtonGrayArrow from '../../buttons/ButtonGrayArrow'

interface FieldEncodingProps {
    title: string,
    price?: number,
    amount?: number,
    icon?: ReactNode,
    button?: ReactNode,
    button2?: ReactNode,
    btnGrayArrow: boolean,
    handleArrowClick?: () => void,
}


function FieldEncoding(props: FieldEncodingProps) {
    return (
        <div className="search-field my-2">
            <div className='d-flex justify-content-between align-items-center w-100 gap-2'>
                <div className='d-flex gap-2'>
                    {props.icon ?? false}
                    <div className="d-flex flex-column">
                        <span className="font-size-20 fw-500">{props.title}</span>
                        <div className='d-flex gap-2'>
                            {props.price ? <span className="font-size-16-gray fw-500">{props.price}$ за шт.</span> : false}
                            {props.amount ? <span className="font-size-16-gray fw-500">Осталось {props.amount} шт.</span> : false}
                        </div>
                    </div>
                </div>
                <div className='d-flex gap-2'>
                    {props.button ?? false}
                    {props.button2 ?? false}
                </div>
            </div>
            <div className=''>
                { props.btnGrayArrow ? <ButtonGrayArrow onClick={props.handleArrowClick} /> : false}
            </div>
        </div>
    )
}

export default FieldEncoding;
