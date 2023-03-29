import { FC, ReactNode } from "react";


interface ButtonProps {
    children?: ReactNode,
    icon?: ReactNode,
    counter?: number,
    type_btn?: string,
    type_counter?: string,
}

const Button: FC<ButtonProps> = ({ children, icon, counter, type_btn, type_counter }) => {
    return <button className={`${type_btn ? 'my-btn-' + type_btn : 'btn-primary'}`}>

        {icon ?? false}
        {children}

        <span className={`${type_counter ? 'counter-' + type_counter : false}`}>{counter}</span>
    </button>
}

export default Button;


// ${type_btn ? 'btn-' + type_btn : 'btn-primary'} 