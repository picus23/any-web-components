import { FC, ReactNode } from "react";


interface Button_with_imgsProps {
    children?: ReactNode,
    icon?: ReactNode,
    icon2?: ReactNode
    counter?: number,
    type_btn?: string,
    type_counter?: string,
    class_name?: string,
    isCounter?:string
}

const Button_with_imgs: FC<Button_with_imgsProps> = ({ children, icon, icon2, counter, type_btn, type_counter,class_name }) => {
    return <button className={`${type_btn ? 'my-btn-' + type_btn : 'btn-primary'}`}>

        {icon ?? false}
        
        {counter ? <span className={`${class_name} ${type_counter ? ' counter-' + type_counter : false}`}>{counter}</span> : false}
        
        {icon2 ?? false}
    </button>
}

export default Button_with_imgs;


// {`${type_btn ? 'my-btn-' + type_btn : 'btn-primary'}`} 