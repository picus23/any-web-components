import { CSSProperties, FC, ReactNode } from "react";


interface ButtonProps {
    children?: ReactNode,
    icon?: ReactNode,
    icon2?: ReactNode
    counter?: number,
    class_name?: string,
    style?: CSSProperties,
    isCounterUp?: boolean,
    counterPosition?: 'left' | 'right'
    contentPosition?: 'center' | 'start'
    btn_style?: 'btn-primary' | 'btn-secondary' | 'btn-outline-secondary' | 'btn-success',
}

const Button: FC<ButtonProps> = ({ children, icon, icon2, counter, style, btn_style, class_name, contentPosition = 'center', counterPosition }) => {
    return <button className={btn_style ?
        'd-flex justify-content-' + contentPosition + ' ' + class_name + ' position-relative align-items-center btn ' + btn_style :
        'd-flex justify-content-' + contentPosition + ' ' + class_name + ' position-relative align-items-center btn btn-primary'}
        style={style}>

        {icon ? <div className="me-1">{icon}</div> : false}
        {children}

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

        {/* {isCounterUp ?
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">{counter}
                <span className="visually-hidden">unread messages</span>
            </span> : false} */}

        {icon2 ?? false}

    </button>

}

export default Button;


// {`${btn_style ? 'my-btn-' + btn_style : 'btn-primary'}`} 