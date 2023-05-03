import { Radio } from 'antd';
import { FC } from 'react'

interface EncodingOrderProps {
    title?: string,
    subtitle?: string,
    value?: number,
}

<<<<<<< HEAD
const EncodingOrder: FC<EncodingOrderProps> = ({ title, subtitle, value }) => {
=======
const EncodingOrder: FC<EncodingOrderProps> = ({ title, subtitle, value, checked = false }) => {
>>>>>>> 57a59e5e3c91ef01670f985529a923fd580c906c
    return <>
        <Radio className='d-flex gap-2 rounded-2 p-2 my-1 order '
            value={value} name='1' defaultChecked={checked}>
            <div className="d-flex flex-column justify-content-center align-items-start">
                <h6 style={{ fontSize: '16px', fontWeight: '500' }}>{title}</h6>
                <span style={{ fontSize: '13px', color: '#969696' }}>{subtitle}</span>
            </div>
        </Radio>
    </>
}

export default EncodingOrder;
