import { FC, ReactNode } from "react";


interface ButtonProps {
    children?: ReactNode,
    icon?: ReactNode,
    counter?: number,
    // style?: string

}

const Button: FC<ButtonProps> = ({ children, icon, counter }) => {
    return <button className="btn-counter">

        {icon ?? false}
        {children}
        
       <span className="counter">{counter}</span>
    </button>
}

export default Button;