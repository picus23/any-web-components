import { FC, ReactNode } from "react";
import { MdChevronRight } from "react-icons/md";
import { MdChevronLeft } from "react-icons/md";
import Card from '../card/Card';
import Button from '../buttons/Button';
import TableCell from '../tableCell/TableCell';


interface TableRowProps {
    children?: ReactNode,
    icon?: ReactNode,
    icon2?: ReactNode
    counter?: number,
    btn_style?: string,
    type_counter?: string,
}

const TableRow: FC<TableRowProps> = ({ children }) => {
    return <>
        {children}
    </>
}
export default TableRow;