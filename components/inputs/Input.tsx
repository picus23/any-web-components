import { ReactNode } from "react"


interface InputProps {
    type_input: string,
    title?: string,
    title_style?: string,
    button_style: string,
    icon?: ReactNode,

}

export function Input(props: InputProps) {
    return (
        <div className="d-flex justify-content-center align-items-center p-1">
            <div className={'input-' + props.button_style +" text-light " + props.title_style}>
                <input className={`${props.type_input ? 'm-1 input-' + props.type_input : 'm-1 input-square'}`} type="checkbox" />
                {props.title ? <span className={''}>{props.title}</span> : false}
                <div className="">{props.icon}</div>
            </div>
        </div>
    )
}