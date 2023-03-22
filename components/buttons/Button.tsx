import { FC, ReactNode } from "react";


interface ButtonProps {
    children: ReactNode, 
    icon?: ReactNode
}
 
const Button: FC<ButtonProps> = ({children, icon}) => {
    return <button style={{color: '#f00'}}>
            { icon ?? false }
            {children}
        </button>;
}
 
export default Button;