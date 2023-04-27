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

        {counter_style ? <span className={'counter-' + counter_style}>{counter}</span> : false}
        {/* {counter_style ? <span className='d-flex align-items-center justify-content-center position-absolute top-0 end-0 px-1 text-white border rounded-circle'
            style={{ fontSize: '13px', background: '#0085FF' }}>{counter ?? 0}</span> : false} */}
        {icon2 ?? false}
    </button>
}

export default Button;


// {`${btn_style ? 'my-btn-' + btn_style : 'btn-primary'}`} 