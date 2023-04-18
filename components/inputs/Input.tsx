import { FC, ReactNode } from "react"


interface InputProps {
    title_style?: string,
    icon?: ReactNode,
    children?: ReactNode,
    style?: string,
    isActive?: boolean,
    isGray?: boolean,
}

const Input: FC<InputProps> = ({ children, isActive = false, isGray = false }) => {
    return <>
        <input className={'square-gray ' + (isActive ? 'input-active' : '') + (isGray ? ' bg-gray' : '')} type="checkbox" />
    </>
    // return (
    //     <div className="d-flex justify-content-center align-items-center p-1">
    //         <div className={'input-' + props.button_style +" text-light " + props.title_style}>
    //             <input className={`${props.type_input ? 'm-1 input-' + props.type_input : 'm-1 input-square'}`} type="checkbox" />
    //             {props.title ? <span className={''}>{props.title}</span> : false}
    //             <div className="">{props.icon}</div>
    //         </div>
    //     </div>
    // )
}

export default Input;