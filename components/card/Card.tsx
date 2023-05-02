import { Radio } from "antd";
import { FC, ReactNode } from "react";


interface CardProps {
    children?: ReactNode,
    icon?: ReactNode,
    title?: string,
    isActive?: boolean,
    input_name?: string,
    class_name?: string,
    value?: number,
}

const Card: FC<CardProps> = ({ icon, title, class_name, input_name, value }) => {
    return <div className={class_name + 'd-flex flex-column align-items-start p-2 gap-1 card-item'} style={{border:'1px solid #E8E8E8' }}>
    {/* return <div className={'d-flex flex-column align-items-start p-2 gap-1 card-item'} style={{ width: '160px',border:'1px solid #E8E8E8' }}> */}
        <Radio name={input_name ?? ''} value={value ?? 1} />
        {icon ?? false}
        <span style={{fontSize:'16px',color:'#585757'}}>{title ?? false}</span>
    </div>

    // return <Radio
    //     className="d-flex flex-column align-items-start p-3 gap-1 card-item"
    //     style={{ width: '160px' }}
    //     name={input_name ?? ''}
    //     value={value ?? 1} >
    //     {icon ?? false}
    //     <span>{title ?? false}</span>
    // </Radio>
}

export default Card;

// return <div className={'d-flex flex-column align-items-start p-3 gap-1 ' + `${isActive ? 'card-active' : 'card-unactive'}`}>

// {`${type_btn ? 'my-btn-' + type_btn : 'btn-primary'}`} 