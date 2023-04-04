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
    type_btn?: string,
    type_counter?: string,
}

const TableRow: FC<TableRowProps> = ({ }) => {
    return (
        <div className="d-flex">
            <div className="d-flex position-relative ">
            
                <Card icon={<img src="/kit/image_table_row.png" alt="" />}
                    title={'Проходной 2-х ходовой'}
                    type_input={'active'} input_name={'card'}>
                </Card>
                <Card icon={<img src="/kit/image_table_row.png" alt="" />}
                    title={'Проходной 2-х ходовой'}
                    type_input={'unactive'} input_name={'card'}>
                </Card>
                <Card icon={<img src="/kit/image_table_row.png" alt="" />}
                    title={'Проходной 2-х ходовой'}
                    type_input={'unactive'} input_name={'card'}>
                </Card>
                <Card icon={<img src="/kit/image_table_row.png" alt="" />}
                    title={'Проходной 2-х ходовой'}
                    type_input={'unactive'} input_name={'card'}>
                </Card>
                <Card icon={<img src="/kit/image_table_row.png" alt="" />}
                    title={'Проходной 2-х ходовой'}
                    type_input={'unactive'} input_name={'card'}>
                </Card>
                <Card icon={<img src="/kit/image_table_row.png" alt="" />}
                    title={'Проходной 2-х ходовой'}
                    type_input={'unactive'} input_name={'card'}>
                </Card>
                <Card icon={<img src="/kit/image_table_row.png" alt="" />}
                    title={'Проходной 2-х ходовой'}
                    type_input={'unactive'} input_name={'card'}>
                </Card>
                <Card icon={<img src="/kit/image_table_row.png" alt="" />}
                    title={'Проходной 2-х ходовой'}
                    type_input={'unactive'} input_name={'card'}>
                </Card>
                <Card icon={<img src="/kit/image_table_row.png" alt="" />}
                    title={'Проходной 2-х ходовой'}
                    type_input={'unactive'} input_name={'card'}>
                </Card>
                <div className="position-absolute right-0 h-100">
                    <TableCell direction={'two-buttons-vertical'} oneButton={<Button type_btn="small-gray" icon={<MdChevronLeft />}></Button>}
                        twoButton={<Button type_btn="small-gray" icon={<MdChevronRight />}></Button>}></TableCell>
                </div>
            </div>
        </div>

    )
}

export default TableRow;


// {`${type_btn ? 'my-btn-' + type_btn : 'btn-primary'}`} 