import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Image from "next/image";
import Link from "next/link";
import header from "./header.png";
import PopularFilters from "./PopularFilters.png";
import table from "./table.png";
import EncodingWrapper from "@/components/encoding/EncodingWrapper";
import EncodingPicture from "@/components/encoding/EncodingPicture";
import EncodingBlockText from "@/components/encoding/EncodingBlockText";
import EncodingBlockButtons from "@/components/encoding/EncodingBlockButtons";
import CollapseAntd from "@/components/collapse/CollapseAntd";
import ButtonGrayAddRemove from "@/components/buttons/ButtonGrayAddRemove";
import { Md3DRotation, MdArrowDropDown, MdArrowDropUp, MdCancel, MdChevronLeft, MdChevronRight, MdFilterList, MdInfo, MdPictureAsPdf, MdShoppingCart, MdUnfoldMore } from "react-icons/md";
import ButtonBuy from "@/components/buttons/ButtonBuy";
import { InputSwitch } from "@/components/inputs/InputSwitch";
import FilterChips from "@/components/filter/FilterChips";
import Button from "@/components/buttons/Button";
import Card from "@/components/card/Card";
import TableCell from "@/components/tableCell/TableCell";




const array_picture = ["/kit/small_pic_encoding.svg", "/kit/small_pic_encoding.svg", "/kit/small_pic_encoding.svg"];
const prop_encodings = [
    {
        'key': 'Подсоединение: ',
        'title': 'Hy-Lok 6 мм'
    },
    {
        'key': 'Температура: ',
        'title': 'Hy-Lok 6 мм'
    },
    {
        'key': 'ДУ: ',
        'title': 'Hy-Lok 6 мм'
    },
    {
        'key': 'Давление: ',
        'title': 'Hy-Lok 6 мм'
    },
    {
        'key': 'СV: ',
        'title': 'Hy-Lok 6 мм'
    },
];
const list = [
    {
        'id': 1,
        'title': 'Продукция',
        'url': 'Продукция',
    },
    {
        'id': 1,
        'title': 'Клапаны',
        'url': 'Клапаны',
    },
    {
        'id': 1,
        'title': 'Шаровые краны',
        'url': 'Шаровые краны',
    },
];

export default function () {

    return <>
        <h1>
            Encoding
        </h1>
        <Link href='/'>Back</Link>
        <hr />

        <h1>Образец</h1>
        <div className="container-xxl d-flex justify-content-center p-0" style={{ outline: '1px solid #000;background:#eee' }}>
            <Image src={header} alt="" />
        </div>
        <h1>Мой</h1>
        <div className="container-xxl d-flex p-0" style={{ outline: '1px solid #000;background:#eee' }}>

            <EncodingWrapper>
                <EncodingPicture
                    onClickLeft={() => alert('Click')}
                    onClickRight={() => alert('Click')}
                    list_picture={array_picture}>
                </EncodingPicture>
                <EncodingBlockText prop_encodings={prop_encodings} list={list}></EncodingBlockText>
                <EncodingBlockButtons
                    price={79.99}
                    amount={16}
                    buttonCount={
                        <ButtonGrayAddRemove counter={2} onClickRemove={() => alert('Click')} onClickAdd={() => alert('Click')} />
                    }
                    buttonBuy={
                        <ButtonBuy onClick={() => alert('Click')} icon={<MdShoppingCart size={20} fill={'#fff'} />} btn_style='blue'>Купить</ButtonBuy>
                    }>
                </EncodingBlockButtons>
                <div className="d-flex my-4 gap-4">
                    <a type={'button'} style={{ fontWeight: '500', fontSize: '16px', color: '#0085FF', borderBottom: '2px solid #0085FF' }}
                        onClick={() => alert('Click')}>Таблица конфигураций</a>
                    <a type={'button'} style={{ fontWeight: '500', fontSize: '16px', color: '#1C1C1C' }}
                        onClick={() => alert('Click')}>Конструкционные материалы</a>
                    <a type={'button'} style={{ fontWeight: '500', fontSize: '16px', color: '#1C1C1C' }}
                        onClick={() => alert('Click')}>Вебинары</a>
                    <a type={'button'} style={{ fontWeight: '500', fontSize: '16px', color: '#1C1C1C' }}
                        onClick={() => alert('Click')}>Каталоги</a>
                </div>
            </EncodingWrapper>
        </div >
        <br />
        <CollapseAntd title={'Encoding Header'} text={`
           <EncodingWrapper>
           <EncodingPicture
               onClickLeft={() => alert('Click')}
               onClickRight={() => alert('Click')}
               list_picture={array_picture}>
           </EncodingPicture>
           <EncodingBlockText prop_encodings={prop_encodings} list={list}></EncodingBlockText>
           <EncodingBlockButtons
               price={79.99}
               amount={16}
               buttonCount={
                   <ButtonGrayAddRemove counter={2} onClickRemove={() => alert('Click')} onClickAdd={() => alert('Click')} />
               }
               buttonBuy={
                   <ButtonBuy onClick={() => alert('Click')} icon={<MdShoppingCart size={20} fill={'#fff'} />} btn_style='blue'>Купить</ButtonBuy>
               }>
           </EncodingBlockButtons>
       </EncodingWrapper>
         `}></CollapseAntd>

        <h1>Образец</h1>
        <div className="container-xxl d-flex justify-content-center p-0" style={{ outline: '1px solid #000;background:#eee' }}>
            <Image src={PopularFilters} alt="" />
        </div>
        <h1>Мой</h1>
        <div className="container-xxl d-flex p-0" style={{ outline: '1px solid #000;background:#eee' }}>

            <EncodingWrapper>
                <div className="bg-white">

                    <div className="d-flex">
                        <div className="d-flex w-100 justify-content-between">
                            <div className="d-flex gap-2">
                                <div className="d-flex align-items-center px-2 py-1 border rounded-2 gap-2"
                                    style={{ border: '1px solid #E8E8E8' }}>
                                    <span style={{ fontSize: '16px', fontWeight: '500' }}>Есть в наличии</span>
                                    <InputSwitch></InputSwitch>
                                </div>
                                <div className="d-flex align-items-center px-1 border rounded-2 gap-2"
                                    style={{ border: '1px solid #E8E8E8' }}>
                                    <FilterChips title="A-Flow" onClick={() => alert(111)} />
                                    <FilterChips title="A-Flow" onClick={() => alert(111)} />
                                    <div className="d-flex flex-column ms-3 btn-group-vertical" role="group"
                                        style={{ boxShadow: '0px 11px 15px rgba(0, 0, 0, 0.1), 0px 9px 46px rgba(0, 0, 0, 0.06), 0px 24px 38px rgba(0, 0, 0, 0.04)' }}>
                                        <button style={{ height: '20px' }} onClick={() => alert('Click')} className="bg-transparent border-0 d-flex align-items-end"><MdArrowDropUp fill="#969696" /></button>
                                        <button style={{ height: '20px' }} onClick={() => alert('Click')} className="bg-transparent border-0 d-flex align-items-start"><MdArrowDropDown fill="#969696" /></button>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex gap-2">
                                <Button
                                    onClick={() => alert(111)}
                                    iconRightContent={<MdCancel fill="#969696" />}
                                    btn_style="btn-outline-secondary">Очистить фильтры</Button>
                                <Button onClick={() => alert(111)} icon={<MdFilterList />}>Все фильтры</Button>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex mt-2 gap-2">
                        <FilterChips title="Hy-Lok 3мм" onClick={() => alert(111)} />
                        <FilterChips title="Оранжевый" onClick={() => alert(111)} />
                        <FilterChips title="3-x ходовой" onClick={() => alert(111)} />
                    </div>

                </div>

            </EncodingWrapper >
        </div >
        <br />
        <CollapseAntd title={'Encoding Popular Filter'} text={`
           <EncodingWrapper>
           <div className="bg-white">

               <div className="d-flex">
                   <div className="d-flex w-100 justify-content-between">
                       <div className="d-flex gap-2">
                           <div className="d-flex align-items-center px-2 py-1 border rounded-2 gap-2"
                               style={{ border: '1px solid #E8E8E8' }}>
                               <span style={{ fontSize: '16px', fontWeight: '500' }}>Есть в наличии</span>
                               <InputSwitch></InputSwitch>
                           </div>
                           <div className="d-flex align-items-center px-1 border rounded-2 gap-2"
                               style={{ border: '1px solid #E8E8E8' }}>
                               <FilterChips title="A-Flow" onClick={() => alert(111)} />
                               <FilterChips title="A-Flow" onClick={() => alert(111)} />
                               <div className="d-flex flex-column ms-3 btn-group-vertical" role="group">
                                   <button style={{ height: '20px' }} onClick={() => alert('Click')} className="bg-transparent border-0 d-flex align-items-end"><MdArrowDropUp fill="#969696" /></button>
                                   <button style={{ height: '20px' }} onClick={() => alert('Click')} className="bg-transparent border-0 d-flex align-items-start"><MdArrowDropDown fill="#969696" /></button>
                               </div>
                           </div>
                       </div>
                       <div className="d-flex gap-2">
                           <Button
                               onClick={() => alert(111)}
                               iconRightContent={<MdCancel fill="#969696" />}
                               btn_style="btn-outline-secondary">Очистить фильтры</Button>
                           <Button onClick={() => alert(111)} icon={<MdFilterList />}>Все фильтры</Button>
                       </div>
                   </div>
               </div>

               <div className="d-flex mt-2 gap-2">
                   <FilterChips title="Hy-Lok 3мм" onClick={() => alert(111)} />
                   <FilterChips title="Оранжевый" onClick={() => alert(111)} />
                   <FilterChips title="3-x ходовой" onClick={() => alert(111)} />
               </div>

           </div>

       </EncodingWrapper >
         `}></CollapseAntd>

        <h1>Образец</h1>
        <div className="container-xxl d-flex justify-content-center p-0" style={{ outline: '1px solid #000;background:#eee' }}>
            <Image src={table} alt="" />
        </div>
        <h1>Мой</h1>
        <div className="container-xxl d-flex p-0 w-100" style={{ outline: '1px solid #000;background:#eee' }}>

            <EncodingWrapper>

                <div className="d-flex flex-column bg-white">
                    <div className="d-flex position-relative">
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
                        <div className="d-flex flex-column bg-white position-absolute top-0 end-0 h-100 justify-content-center gap-3 p-2"
                            style={{ boxShadow: '0px 11px 15px rgba(0, 0, 0, 0.1), 0px 9px 46px rgba(0, 0, 0, 0.06), 0px 24px 38px rgba(0, 0, 0, 0.04)' }}>
                            <Button
                                onClick={() => alert('Click')}
                                icon={<MdChevronLeft fill="#969696" />}
                                btn_style="btn-outline-secondary" />
                            <Button
                                onClick={() => alert('Click')}
                                icon={<MdChevronRight fill="#969696" />}
                                btn_style="btn-outline-secondary" />
                        </div>
                    </div>

                    <div className="d-flex my-3">
                        <div className="d-flex position-relative w-100">
                            <TableCell
                                title={'Кодировка'}
                                icon={<MdUnfoldMore size={20} fill="#0085FF" />} />
                            <TableCell title={'Действия'} />
                            <TableCell title={'Кол-во'}></TableCell>
                            <TableCell title={'Цена'} describe={'Без НДС'} icon={<MdUnfoldMore size={20} fill="#0085FF" />}></TableCell>
                            <TableCell title={'Купить'}></TableCell>
                            <TableCell title={'Подсоединение'} icon={<MdUnfoldMore size={20} fill="#0085FF" />}></TableCell>
                            <TableCell title={'CV/ДУ'} describe={'мм.'} icon={<MdUnfoldMore size={20} fill="#0085FF" />}></TableCell>
                            <TableCell title={'Давление'} describe={'бар.'} icon={<MdUnfoldMore size={20} fill="#0085FF" />}></TableCell>
                            <TableCell title={'Температура'} describe={'℃'} icon={<MdUnfoldMore size={20} fill="#0085FF" />}></TableCell>
                            <div className="d-flex bg-white position-absolute top-0 end-0 justify-content-center gap-3 p-2">
                                <Button
                                    onClick={() => alert('Click')}
                                    icon={<MdChevronLeft fill="#969696" />}
                                    btn_style="btn-outline-secondary" />
                                <Button
                                    onClick={() => alert('Click')}
                                    icon={<MdChevronRight fill="#969696" />}
                                    btn_style="btn-outline-secondary" />
                            </div>
                        </div>
                    </div>

                    <div className="d-flex my-3 bg-white">
                        <div className="d-flex position-relative w-100">
                            <TableCell
                                title={'H1B-H-6M'}
                                icon={<MdInfo type="button"
                                    size={24} fill="#0085FF" onClick={() => alert('Click')} />} isTextDashed={true} />

                            <TableCell>
                                <Button
                                    btn_style="btn-outline-secondary"
                                    icon={<MdPictureAsPdf fill="gray" />} />
                                <Button
                                    btn_style="btn-outline-secondary"
                                    icon={<Md3DRotation fill="gray" />} />
                            </TableCell>

                            <TableCell contentPosition="end" title={'17 шт.'} />
                            <TableCell contentPosition="end" title={'7685 ₽'} />
                            <TableCell>
                                <ButtonGrayAddRemove
                                    counter={0}
                                    onClickRemove={() => alert('Click')}
                                    onClickAdd={() => alert('Click')}
                                    onClickBuy={() => alert('Click')} />
                            </TableCell>
                            <TableCell title={'Подсоединение'}></TableCell>
                            <TableCell title={'CV/ДУ'}></TableCell>
                            <TableCell title={'Давление'}></TableCell>
                            <TableCell title={'Температура'}></TableCell>
                        </div>
                    </div>

                </div>

            </EncodingWrapper >
        </div >
        <br />
        <CollapseAntd title={'Encoding Table'} text={`
           <EncodingWrapper>

           <div className="d-flex">
               <div className="d-flex position-relative">
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
                   <div className="d-flex flex-column bg-white position-absolute top-0 end-0 h-100 justify-content-center gap-3">
                       <Button
                           icon={<MdChevronLeft fill="#969696" />}
                           btn_style="btn-outline-secondary" />
                       <Button
                           icon={<MdChevronRight fill="#969696" />}
                           btn_style="btn-outline-secondary" />
                   </div>
               </div>
           </div>

       </EncodingWrapper>
         `}></CollapseAntd>





    </>

}