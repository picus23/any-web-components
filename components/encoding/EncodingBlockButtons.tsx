import { ReactNode, FC } from 'react'
import ButtonGrayAddRemove from '../buttons/ButtonGrayAddRemove';
import ButtonBuy from '../buttons/ButtonBuy';
import { MdShoppingCart } from 'react-icons/md';

interface encoding {
    key: string,
    title: string,
}

interface EncodingBlockButtonsProps {
    price: number,
    amount: number,
    onClickRemove: () => void,
    onClickAdd: () => void,
    onClickBuy: () => void,
    buttonCount: ReactNode,
    buttonBuy: ReactNode,
}

const EncodingBlockButtons: FC<EncodingBlockButtonsProps> = ({ price, amount, onClickBuy, buttonCount, buttonBuy }) => {
    return <>
        <div className="col d-flex justify-content-end">
            <div className='d-flex flex-column justify-content-center h-75'>
                <strong style={{ fontWeight: '500', fontSize: '24px' }}>${price ?? 0}</strong>
                <span className='mt-2 mb-3' style={{ fontWeight: '400', fontSize: '13px', color: '#969696' }}>Осталось {amount ?? 0} шт.</span>
                <div className='d-flex gap-3'>

                    {buttonCount}
                    {buttonBuy}

                </div>
            </div>



        </div>
    </>;
}

export default EncodingBlockButtons;