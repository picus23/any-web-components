import { CSSProperties, FC, ReactNode } from "react";


interface ButtonProps {
    children?: ReactNode,
    icon?: ReactNode,
    icon2?: ReactNode
    counter?: number,
    class_name?: string,
    counter_style?: string,
    style?: CSSProperties,
    isCounterUp?: boolean,
    isGray?: boolean,
}

const Button: FC<ButtonProps> = ({ children, icon, icon2, counter, class_name, isCounterUp = false, isGray,style }) => {
    return <button className={isGray ?
        'position-relative d-flex align-items-center px-2 py-1 border rounded-2 text-black gap-1 bg-white ' + class_name :
        'position-relative d-flex align-items-center px-2 py-1 border-0 text-white gap-1 bg-primary ' + class_name}
        style={style}>
        {/* return <button className={btn_style ? 'position-relative my-btn-' + btn_style : 'btn-primary'}> */}

        {icon ?? false}
        {children}

        {isCounterUp ?
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">{counter}
                <span className="visually-hidden">unread messages</span>
            </span> : false}

        {icon2 ?? false}

    </button>

}

export default Button;


// {`${btn_style ? 'my-btn-' + btn_style : 'btn-primary'}`} 