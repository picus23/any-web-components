import { Radio } from 'antd';
import { FC } from 'react'

interface EncodingOrderProps {
    title?: string,
    subtitle?: string,
    value?: number,
    checked?: boolean,
}

<<<<<<< HEAD
const EncodingOrder: FC<EncodingOrderProps> = ({ title, subtitle, value }) => {
=======
const EncodingOrder: FC<EncodingOrderProps> = ({ title, subtitle, value, checked = false }) => {
>>>>>>> c3ed907c7a15a709ca9fe0be947ba768e49333eb
    return <>
        <Radio className='d-flex gap-2 rounded-2 p-2 my-1 order '
            value={value} name='1'>
            <div className="d-flex flex-column justify-content-center align-items-start">
                <h6 style={{ fontSize: '16px', fontWeight: '500' }}>{title}</h6>
                <span style={{ fontSize: '13px', color: '#969696' }}>{subtitle}</span>
            </div>
        </Radio>
    </>
}

export default EncodingOrder;
