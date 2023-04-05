import TableCell from "../../components/tableCell/TableCell";
import Button from "../../components/buttons/Button";
import Link from "next/link";
import { MdChevronLeft } from 'react-icons/md';
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

            <TableCell direction={'row'} title={'Кодировка'} chevron></TableCell>

            <TableCell direction={'row'} title={'Кодировка'} describe={'Кодировка'} chevron></TableCell>

            <TableCell direction={'two-buttons-vertical'} oneButton={<Button btn_style="small-gray" icon={<MdChevronLeft />}></Button>}
                twoButton={<Button btn_style="small-gray" icon={<MdChevronRight />}></Button>}></TableCell>

            <TableCell direction={'two-buttons-horizont'} oneButton={<Button btn_style="small-gray" icon={<MdChevronLeft />}></Button>}
                twoButton={<Button btn_style="small-gray" icon={<MdChevronRight />}></Button>}></TableCell>

            <TableCell direction={'row'} title={'Ячейка'}></TableCell>

            <TableCell direction={'img-right'} title={'Кодировка'} imgRight></TableCell>

            <TableCell direction={'two-buttons-horizont'} oneButton={<Button btn_style="gray" counter={0} icon={<MdRemove />} icon2={<MdAdd />}></Button>}
                twoButton={<Button btn_style="blue" icon={<MdOutlineShoppingCart />}></Button>}></TableCell>

            <TableCell direction={'two-buttons-horizont'} oneButton={<Button btn_style="gray" icon={<MdPictureAsPdf />}></Button>}
                twoButton={<Button btn_style="gray" icon={<Md3DRotation />}></Button>}></TableCell>

            <TableCell direction={'img-center'} imgCenter></TableCell>





        </div>
    </>

}
<img src="./navbar.png" alt="" />