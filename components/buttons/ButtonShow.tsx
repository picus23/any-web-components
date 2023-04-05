import { FC, ReactNode } from "react";


interface ButtonShowProps {
    children?: ReactNode,
    icon?: ReactNode,
    icon2?: ReactNode
    counter?: number,
    btn_style: string,
    text_style?: string,
    counter_style?: string,
    text?: string,
}

function ButtonShow(props: ButtonShowProps) {
    // const ButtonShow: FC<ButtonShowProps> = ({ children, icon, icon2, counter, btn_style, type_counter, class_name }) => {
    return <button className={'my-btn-' + props.btn_style}>
        <span className={props.text_style}>{props.text}</span>
        <span className="counter-show">{props.counter ?? 0}</span>
    </button>
}

export default ButtonShow;


// {`${btn_style ? 'my-btn-' + btn_style : 'btn-primary'}`} 