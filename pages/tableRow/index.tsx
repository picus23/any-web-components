import Link from "next/link";
import TableRow from "../../components/tableRow/TableRow";
import TableCell from "../../components/tableCell/TableCell";
import Button from '../../components/buttons/Button';
import { Md3DRotation, MdArrowDropDown, MdChevronRight, MdClose, MdInfo, MdOutlineShoppingCart, MdPictureAsPdf, MdShoppingCart, MdUnfoldMore } from "react-icons/md";
import { MdChevronLeft } from "react-icons/md";
import reference from "./ref.png";
import Image from "next/image";
import CollapseAntd from "@/components/collapse/CollapseAntd";
import Card from "@/components/card/Card";
import ButtonCounter from "@/components/buttons/ButtonCounter";




export default function () {

    return <>

        <h1>
            TableRow
        </h1>
        <Link href='/'>Back</Link>
        <hr />

        <h1>Образец</h1>
        <div className="container-xxl p-0" style={{ outline: '1px solid #000;background: rgb(238, 238, 238);' }}>
            <Image src={reference} alt="" />
        </div>

        <hr />

        <h1>Мой</h1>
        <div className="container-xxl p-0 d-flex justify-content-center" style={{ outline: '1px solid #000;background: rgb(238, 238, 238);' }}>

            <hr />

            <div className="d-flex flex-column p-3">

                <TableRow>
                    <div className="d-flex">
                        <div className="d-flex position-relative ">
                            <Card icon={<img src="/kit/card.png" alt="" />}
                                title={'Проходной 2-х ходовой'}
                                isActive
                                input_name={'card'}>
                            </Card>
                            <Card icon={<img src="/kit/card.png" alt="" />}
                                title={'Проходной 2-х ходовой'}
                                input_name={'card'}>
                            </Card>
                            <Card icon={<img src="/kit/card.png" alt="" />}
                                title={'Проходной 2-х ходовой'}
                                input_name={'card'}>
                            </Card>
                            <Card icon={<img src="/kit/card.png" alt="" />}
                                title={'Проходной 2-х ходовой'}
                                input_name={'card'}>
                            </Card>
                            <Card icon={<img src="/kit/card.png" alt="" />}
                                title={'Проходной 2-х ходовой'}
                                input_name={'card'}>
                            </Card>
                            <Card icon={<img src="/kit/card.png" alt="" />}
                                title={'Проходной 2-х ходовой'}
                                input_name={'card'}>
                            </Card>
                            <Card icon={<img src="/kit/card.png" alt="" />}
                                title={'Проходной 2-х ходовой'}
                                input_name={'card'}>
                            </Card>
                            <Card icon={<img src="/kit/card.png" alt="" />}
                                title={'Проходной 2-х ходовой'}
                                input_name={'card'}>
                            </Card>
                            <Card icon={<img src="/kit/card.png" alt="" />}
                                title={'Проходной 2-х ходовой'}
                                input_name={'card'}>
                            </Card>
                            <div className="btn-upper">
                                <TableCell style={'table-cell-two-buttons-vertical'} oneButton={<Button btn_style="small-gray my-btn-40x40" icon={<MdChevronLeft size={24} fill="gray" />}></Button>}
                                    twoButton={<Button btn_style="small-gray my-btn-40x40" icon={<MdChevronRight size={24} fill="gray" />}></Button>}></TableCell>
                            </div>
                        </div>
                    </div>
                </TableRow>

                <div className="d-flex my-3">
                    <div className="d-flex position-relative w-100">
                        <TableCell style={'table-cell-row'} title={'Кодировка'} icon={<MdUnfoldMore size={20} fill="#0085FF" />}></TableCell>
                        <TableCell style={'table-cell-row'} title={'Действия'}></TableCell>
                        <TableCell style={'table-cell-row'} title={'Кол-во'} chevron></TableCell>
                        <TableCell style={'table-cell-row'} title={'Цена'} describe={'Без НДС'} icon={<MdUnfoldMore size={20} fill="#0085FF" />}></TableCell>
                        <TableCell style={'table-cell-row'} title={'Купить'}></TableCell>
                        <TableCell style={'table-cell-row'} title={'Подсоединение'} icon={<MdUnfoldMore size={20} fill="#0085FF" />}></TableCell>
                        <TableCell style={'table-cell-row'} title={'CV/ДУ'} describe={'мм.'} icon={<MdUnfoldMore size={20} fill="#0085FF" />}></TableCell>
                        <TableCell style={'table-cell-row'} title={'Давление'} describe={'бар.'} icon={<MdUnfoldMore size={20} fill="#0085FF" />}></TableCell>
                        <TableCell style={'table-cell-row'} title={'Температура'} describe={'℃'} icon={<MdUnfoldMore size={20} fill="#0085FF" />}></TableCell>
                        <div className="btn-upper">
                            <TableCell style={'table-cell-two-buttons-horizont'} oneButton={<Button btn_style="small-gray my-btn-40x40" icon={<MdChevronLeft />}></Button>}
                                twoButton={<Button btn_style="small-gray my-btn-40x40" icon={<MdChevronRight />}></Button>}></TableCell>
                        </div>
                    </div>
                </div>
                <div className="d-flex my-3">
                    <div className="d-flex position-relative w-100">
                        <TableCell style={'table-cell-row d-flex align-items-center'} text_style="underline-dashed" title={'H1B-H-6M'} icon={<MdInfo size={20} fill="#0085FF" />}></TableCell>
                        <TableCell style={'table-cell-two-buttons-horizont'} oneButton={<Button btn_style="gray" icon={<MdPictureAsPdf fill="gray" />}></Button>}
                            twoButton={<Button btn_style="gray" icon={<Md3DRotation fill="gray" />}></Button>}></TableCell>
                        <TableCell style={'table-cell-row'} title={'17 шт.'}></TableCell>
                        <TableCell style={'table-cell-row'} title={'7685 ₽'}></TableCell>
                        <TableCell style={'table-cell-row'}>
                            <ButtonCounter text_style={'font-size-16-gray'} counter={1} btn_style="counter-h40"></ButtonCounter>
                            <Button btn_style="blue d-flex my-btn-40x40" icon={<MdShoppingCart size={20} />}></Button>
                        </TableCell>
                        <TableCell style={'table-cell-row'} title={'Подсоединение'}></TableCell>
                        <TableCell style={'table-cell-row'} title={'CV/ДУ'}></TableCell>
                        <TableCell style={'table-cell-row'} title={'Давление'}></TableCell>
                        <TableCell style={'table-cell-row'} title={'Температура'}></TableCell>
                    </div>
                </div>
                <div className="d-flex align-items-center gap-2 bg-white p-3">
                    <span className="font-size-16-black">Показать еще</span>
                    <div className="show-more">
                        <select className="font-size-16-black fw-500">
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                        </select>
                        <MdArrowDropDown size={24} fill="gray" />
                    </div>
                    <span className="font-size-16-black">из 24</span>
                </div>
            </div>
        </div>

    </>

}