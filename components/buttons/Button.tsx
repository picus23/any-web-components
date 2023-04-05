import { FC, ReactNode } from "react";


interface ButtonProps {
    children?: ReactNode,
    icon?: ReactNode,
    icon2?: ReactNode
    counter?: number,
    btn_style: string,
    counter_style?: string,
    text_style?: string,
    class_name?: string,
}

const Button: FC<ButtonProps> = ({ children, icon, icon2, counter, btn_style,text_style,counter_style }) => {
    return <button className={'my-btn-' + btn_style}>

        {icon ?? false}
        {children}

        <span className={'counter-' + counter_style}>{counter}</span>
        {icon2 ?? false}
    </button>
}

export default Button;


// {`${btn_style ? 'my-btn-' + btn_style : 'btn-primary'}`} 