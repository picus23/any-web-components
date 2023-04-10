import { ReactNode } from "react"


interface InputProps {
    title_style?: string,
    icon?: ReactNode,
    children?: ReactNode,
    style: string,

}

export function Input(props: InputProps) {
    return <>
        <input className={props.style} type="checkbox" />
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