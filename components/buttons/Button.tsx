import { FC, ReactNode } from "react";


interface ButtonProps {
    children?: ReactNode,
    icon?: ReactNode,
    icon2?: ReactNode
    counter?: number,
    type_btn?: string,
    type_counter?: string,
    class_name?: string,
}

const Button: FC<ButtonProps> = ({ children, icon, icon2, counter, type_btn, type_counter,class_name }) => {
    return <button className={`${type_btn ? 'my-btn-' + type_btn : 'btn-primary'}`}>

        {icon ?? false}
        {children}

        <span className={`${class_name} ${type_counter ? ' counter-' + type_counter : false}`}>{counter}</span>
        {icon2 ?? false}
    </button>
}

export default Button;


// {`${type_btn ? 'my-btn-' + type_btn : 'btn-primary'}`} 