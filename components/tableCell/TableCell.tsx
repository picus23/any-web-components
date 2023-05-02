import { CSSProperties, FC, ReactNode } from "react";
import Button from "../buttons/Button";
import { MdInfo } from "react-icons/md";
import style from "react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark";


interface TableCellProps {
    children?: ReactNode,
    icon?: ReactNode,
    contentPosition?: 'center' | 'start' | 'end' | 'between',
    isBorder?: boolean,
    isTextDashed?: boolean,
    title?: string,
    describe?: string,
    style?: CSSProperties,
    class_name?: string,
}

const TableCell: FC<TableCellProps> = ({ children, icon, title, describe, isTextDashed = false, contentPosition = 'start', isBorder = false, class_name }) => {
    return <div className={class_name + ' d-flex gap-2 p-1 align-items-center justify-content-' + contentPosition + ' '}
        style={{ border: isBorder ? '1px solid #E8E8E8' : 'none' }}>

        <div className={'d-flex flex-column'}>
            {title ? <span style={{ color: '#000', fontSize: '16px', borderBottom: isTextDashed ? '2px dashed #969696' : 'none' }}>{title}</span> : false}
            {describe ? <span className="font-size-13 mt-1 "
                style={{ color: '#969696', fontWeight: '400' }}>{describe}</span> : false}
        </div>

        {children}

        {icon ?? false}

    </div>
}

export default TableCell;

// return <div className={'d-flex flex-column align-items-start p-3 gap-1 ' + `${isActive ? 'card-active' : 'card-unactive'}`}>

// ${type_btn ? 'btn-' + type_btn : 'btn-primary'} 