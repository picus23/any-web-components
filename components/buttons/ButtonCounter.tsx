import { FC, ReactNode } from "react";
import { MdRemove } from "react-icons/md";
import { MdAdd } from "react-icons/md";


interface ButtonCounterProps {
    children?: ReactNode,
    icon?: ReactNode,
    icon2?: ReactNode,
    counter?: number,
    btn_style: string,
    text_style: string,
    counter_style?: string,
}


function ButtonCounter( props:ButtonCounterProps ) {
    return <button className={'my-btn-' + props.btn_style}>

        {props.icon ?? <MdRemove size={20} fill={'gray'} />}
        
        <span className={'counter-' + props.counter_style}>{props.counter ?? 0}</span>
        
        {props.icon2 ??<MdAdd size={20} fill={'gray'} />}
    </button>
}

export default ButtonCounter;


// {`${btn_style ? 'my-btn-' + btn_style : 'btn-primary'}`} 