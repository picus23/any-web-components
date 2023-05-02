import { Radio } from 'antd';
import { ReactNode, FC } from 'react'

interface EncodingOrderProps {
    children?: ReactNode,
    title?: string,
    subtitle?: string,
    onClick?: () => void,
    isActive?: boolean,
}

const EncodingOrder: FC<EncodingOrderProps> = ({ children, title, subtitle, onClick, isActive = false }) => {
    return <>
        <div className={isActive ?
            'd-flex gap-2 rounded-2 p-2 my-1 order-active' :
            'd-flex gap-2 border rounded-2 p-2 my-1'}>
            <Radio onClick={onClick} value={1} checked={true} />
            <div className="d-flex flex-column justify-content-center align-items-start">
                <h6 style={{ fontSize: '16px', fontWeight: '500' }}>{title}</h6>
                <span style={{ fontSize: '13px', color: '#969696' }}>{subtitle}</span>
            </div>
        </div>
    </>
}

export default EncodingOrder;
