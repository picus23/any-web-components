import Link from "next/link";
import TableRow from "../../components/tableRow/TableRow";
import TableCell from "../../components/tableCell/TableCell";
import Button from '../../components/buttons/Button';
import { MdChevronRight } from "react-icons/md";
import { MdChevronLeft } from "react-icons/md";




export default function () {

    return <>
        <h1>
            TableRow
        </h1>
        <Link href='/'>Back</Link>
        <hr />
        <div className="d-flex flex-column container-fluid">
            <TableRow counter={0} btn_style='gray' type_counter="gray">Button</TableRow>
            <div className="d-flex my-3">
                <div className="d-flex position-relative">
                    <TableCell direction={'row'} title={'Кодировка'} chevron></TableCell>
                    <TableCell direction={'row'} title={'Действия'}></TableCell>
                    <TableCell direction={'row'} title={'Кол-во'} chevron></TableCell>
                    <TableCell direction={'row'} title={'Цена'} describe={'Без НДС'} chevron></TableCell>
                    <TableCell direction={'row'} title={'Купить'}></TableCell>
                    <TableCell direction={'row'} title={'Подсоединение'} chevron></TableCell>
                    <TableCell direction={'row'} title={'CV/ДУ'} describe={'мм.'} chevron></TableCell>
                    <TableCell direction={'row'} title={'Давление'} describe={'бар.'} chevron></TableCell>
                    <TableCell direction={'row'} title={'Температура'} describe={'℃'} chevron></TableCell>
                    <div className="position-absolute right-0 h-100">
                        <TableCell direction={'two-buttons-horizontal'} oneButton={<Button btn_style="small-gray" icon={<MdChevronLeft />}></Button>}
                            twoButton={<Button btn_style="small-gray" icon={<MdChevronRight />}></Button>}></TableCell>
                    </div>
                </div>
            </div>
        </div>
    </>

}