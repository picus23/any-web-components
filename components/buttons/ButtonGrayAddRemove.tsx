import { FC, ReactNode } from "react";
import { MdRemove } from "react-icons/md";
import { MdAdd } from "react-icons/md";

interface ButtonGrayAddRemoveProps {
    counter: number,
    btn_class?: string,
    btn_style?: string,
    onClickRemove: () => void,
    onClickAdd: () => void,
}


function ButtonGrayAddRemove(props: ButtonGrayAddRemoveProps) {
    return <div className={'d-flex justify-content-between align-items-center gap-2 px-2 py-1 bg-white ' + props.btn_class}
        style={{ borderRadius: '8px', border: '1px solid #E8E8E8'}}>

        <button onClick={props.onClickRemove} style={{ border: 'none', background: 'none' }}><MdRemove size={20} fill={'#969696'} /></button>

        <span style={{ color: '#969696' }} className=''>{props.counter ?? 0}</span>
       
        <button onClick={props.onClickAdd} style={{ border: 'none', background: 'none' }}><MdAdd size={20} fill={'#969696'} /></button>

       
    </div>
}

export default ButtonGrayAddRemove;


// {`${btn_style ? 'my-btn-' + btn_style : 'btn-primary'}`} 