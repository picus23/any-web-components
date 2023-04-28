import { CSSProperties, FC, ReactNode } from "react";
import Button from "../buttons/Button";
import { MdInfo } from "react-icons/md";


interface TableCellProps {
    children?: ReactNode,
    icon?: ReactNode,
    contentPosition?: 'center' | 'start' | 'end' | 'between'
    isTextDashed?: boolean,
    title?: string,
    describe?: string,
    style?: CSSProperties,
}

const TableCell: FC<TableCellProps> = ({ children, icon, title, describe, isTextDashed = false, contentPosition = 'start', style }) => {
    return <div className={'d-flex gap-2 p-1 align-items-center justify-content-' + contentPosition + ' '}
        style={{ border: '1px solid #E8E8E8' }}>

        <div className={'d-flex flex-column'}>
            {title ? <span style={{ color: '#000', fontSize: '16px' }}>{title}</span> : false}
            {describe ? <span className="font-size-13 mt-1 "
                style={{ color: '#969696', fontWeight: '400' }}>{describe}</span> : false}
        </div>

        {children}

        {icon ?? false}

    </div>
}

export default TableCell;


// ${type_btn ? 'btn-' + type_btn : 'btn-primary'} 