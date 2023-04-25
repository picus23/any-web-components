import { FC, ReactNode } from "react";

interface ButtonBuyProps {
    counter?: number,
    icon: ReactNode,
    children: ReactNode,
    btn_style: string,
    onClick?: () => void,
}

function ButtonBuy(props: ButtonBuyProps) {
    return <button className={'d-flex justify-content-center align-items-center gap-1 px-4 py-2 btn_shop_' + props.btn_style} onClick={props.onClick}>
        {props.icon}
        <span>{props.children}</span>
    </button>
}

export default ButtonBuy;


// {`${btn_style ? 'my-btn-' + btn_style : 'btn-primary'}`} 