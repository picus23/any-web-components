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
    function onRadio(element: any) {
        const cardItems = document.querySelectorAll('.card-item .ant-radio');
        if (element.target.checked == true) {
            const currentCardItem = cardItems[element.target.value - 1]
            currentCardItem.parentElement.parentElement.classList.add('card-item-active')
        }
    }

    return <div id="card-item" className={class_name + ' d-flex flex-column align-items-start p-2 gap-1 card-item'} style={{ border: '1px solid #E8E8E8' }}>
        <Radio onChange={onRadio} name={input_name ?? ''} value={value ?? 1} />
        {icon ?? false}
        <span style={{ fontSize: '16px', color: '#585757' }}>{title ?? false}</span>
    </div>
}

export default Card;

// return <div className={'d-flex flex-column align-items-start p-3 gap-1 ' + `${isActive ? 'card-active' : 'card-unactive'}`}>

// {`${type_btn ? 'my-btn-' + type_btn : 'btn-primary'}`} 