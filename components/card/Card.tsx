import { Radio } from "antd";
import { FC, ReactNode, useState } from "react";


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
    // function changeRadio(event: any) {
    //     if (event.target.checked == true) {
    //         const cardItems = document.querySelectorAll('.card-item .ant-radio');
    //         console.log(cardItems)
    //         console.log(event.target.value - 1)
    //     }

    // }

    return <div id="card-item" className={class_name + ' d-flex flex-column align-items-start p-2 gap-1 card-item'} style={{ border: '1px solid #E8E8E8' }}>
        <Radio name={input_name ?? ''} value={value ?? 1} />
        {/* <Radio onChange={changeRadio} name={input_name ?? ''} value={value ?? 1} /> */}
        {icon ?? false}
        <span style={{ fontSize: '16px', color: '#585757' }}>{title ?? false}</span>
    </div>

    // return <Radio
    //     className={class_name + ' d-flex flex-column align-items-start p-2 gap-1 card-item'}
    //     style={{ border: '1px solid #E8E8E8' }}
    //     name={input_name ?? ''}
    //     value={value ?? 1} >
    //     {icon ?? false}
    //     <span style={{ fontSize: '16px', color: '#585757' }}>{title ?? false}</span>
    // </Radio >
}

export default Card;

// return <div className={'d-flex flex-column align-items-start p-3 gap-1 ' + `${isActive ? 'card-active' : 'card-unactive'}`}>

// {`${type_btn ? 'my-btn-' + type_btn : 'btn-primary'}`} 