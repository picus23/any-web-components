import { ReactNode } from "react"


interface InputSwitchProps {
    title_style?: string,
    icon?: ReactNode,
    children?: ReactNode,
    style?: string,

}

export function InputSwitch(props: InputSwitchProps) {
    return <label className="switch">
    <input type="checkbox" />
    <span className="slider round"></span>
  </label>
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