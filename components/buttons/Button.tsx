import { CSSProperties, FC, ReactNode } from "react";


interface ButtonProps {
    children?: ReactNode,
    icon?: ReactNode,
    iconRightContent?: ReactNode
    counter?: number,
    padding?: number,
    class_name?: string,
    counterNearText?: boolean,
    style?: CSSProperties,
    isCounterUp?: boolean,
    counterPosition?: 'left' | 'right'
    contentPosition?: 'center' | 'start'
    btn_style?: 'btn-primary' | 'btn-secondary' | 'btn-outline-secondary' | 'btn-success' | 'btn-outline-primary',
    onClick?: () => void,
    htmlType?: 'submit' | 'reset',
    fontSize?: string,
}


const Button: FC<ButtonProps> = ({ children, icon, iconRightContent, onClick, counter, style, btn_style, class_name, contentPosition = 'center', counterPosition, htmlType = 'submit', fontSize, counterNearText, padding = 2}) => {
    return <button 
        onClick={onClick}
        type={htmlType}
        className={
            `
                d-flex 
                justify-content-${contentPosition} 
                ${class_name} 
                position-relative 
                align-items-center 
                btn 
                ${btn_style ? btn_style : 'btn-primary'}
                p-${padding}
            `
        }
        style={style}>

        {icon ?? false}
        <div className="d-flex justify-content-center align-items-center gap-1">
            {children ?
                <span className="mx-2" style={{ fontWeight: '500', fontSize: fontSize }}>{children}</span> :
                <span style={{ fontWeight: '500', fontSize: fontSize }}></span>}
            {counterNearText ?
                <span className="bg-white rounded-3 text-black d-flex align-items-center justify-content-center" style={{ fontSize: '10px', fontWeight: 700, width: '', height: '20px',padding:'0 2px'}}>{counter}</span> :
                false}
        </div>

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