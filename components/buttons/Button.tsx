import { CSSProperties, FC, ReactNode } from "react";


interface ButtonProps {
    children?: ReactNode,
    icon?: ReactNode,
    iconRightContent?: ReactNode
    counter?: number,
    class_name?: string,
    style?: CSSProperties,
    isCounterUp?: boolean,
    counterPosition?: 'left' | 'right'
    contentPosition?: 'center' | 'start'
    btn_style?: 'btn-primary' | 'btn-secondary' | 'btn-outline-secondary' | 'btn-success' | 'btn-outline-primary',
    onClick?: () => void,
    onBasket?: () => void,
    onLogin?: () => void,
    onFavorite?: () => void,
    htmlType?: 'submit' | 'reset',
    fontSize?: string,
}

const Button: FC<ButtonProps> = ({ children, icon, iconRightContent, onClick, onBasket, onLogin, onFavorite, counter, style, btn_style, class_name, contentPosition = 'center', counterPosition, htmlType = 'submit', fontSize }) => {
    return <button
        onClick={onClick || onBasket || onLogin || onFavorite}
        type={htmlType}
        className={btn_style
            ? 'd-flex justify-content-' + contentPosition + ' ' + class_name + ' position-relative align-items-center btn ' + btn_style
            : 'd-flex justify-content-' + contentPosition + ' ' + class_name + ' position-relative align-items-center btn btn-primary'}
        style={style}>

        {icon ?? false}
        {children ?
            <span className="mx-2" style={{ fontWeight: '500', fontSize: fontSize }}>{children}</span> :
            <span style={{ fontWeight: '500', fontSize: fontSize }}></span>}

        {counterPosition == 'left' ?
            <span className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-primary">{counter}
                <span className="visually-hidden">unread messages</span>
            </span> :
            false}
        {counterPosition == 'right' ?
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">{counter}
                <span className="visually-hidden">unread messages</span>
            </span> :
            false}

        {iconRightContent ?? false}

    </button>

}

export default Button;


// {`${btn_style ? 'my-btn-' + btn_style : 'btn-primary'}`} 