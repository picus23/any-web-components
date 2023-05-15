import TableCell from "../../components/tableCell/TableCell";
import Button from "../../components/buttons/Button";
import Link from "next/link";
import { MdChevronLeft, MdInfo, MdUnfoldMore } from 'react-icons/md';
import { MdChevronRight } from 'react-icons/md';
import { MdRemoveRedEye } from 'react-icons/md';
import { MdRemove } from 'react-icons/md';
import { MdAdd } from 'react-icons/md';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { MdPictureAsPdf } from 'react-icons/md';
import { Md3DRotation } from 'react-icons/md';




export default function () {

    return <>
        <h1>
            TableCell
        </h1>
        <Link href='/'>Back</Link>
        <hr />
        <div className="d-flex flex-column">

            <TableCell title={'Кодировка'} icon={<MdUnfoldMore />} />

            <TableCell title={'Кодировка'} describe={'Кодировка'} icon={<MdUnfoldMore />} />

            <TableCell>
                <Button btn_style="btn-outline-secondary" icon={<MdChevronLeft />} />
                <Button btn_style="btn-outline-secondary" icon={<MdChevronRight />} />
            </TableCell>

            <TableCell>
                <Button btn_style="btn-outline-secondary" icon={<MdChevronLeft />} />
                <Button btn_style="btn-outline-secondary" icon={<MdChevronRight />} />
            </TableCell>

            <TableCell title={'Ячейка'}></TableCell>

            <TableCell title={'Кодировка'} icon={<MdInfo fill="#0085FF" />}></TableCell>
            <TableCell title={'Кодировка'} icon={<MdInfo fill="#0085FF" />}></TableCell>

            <TableCell>
                <Button btn_style="btn-outline-secondary" counter={0} icon={<MdRemove />} iconRightContent={<MdAdd />}></Button>
                <Button btn_style="btn-primary" icon={<MdOutlineShoppingCart />}></Button>
            </TableCell>

            <TableCell>
                <Button btn_style="btn-outline-secondary" icon={<MdPictureAsPdf />}></Button>
                <Button btn_style="btn-outline-secondary" icon={<Md3DRotation />}></Button>
            </TableCell>

            <TableCell />





        </div >
    </>

}
<img src="./navbar.png" alt="" />