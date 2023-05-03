import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Image from "next/image";
import Link from "next/link";
import header from "./header.png";
import PopularFilters from "./PopularFilters.png";
import table from "./table.png";
import Content from "./Content.png";
import EncodingWrapper from "@/components/encoding/EncodingWrapper";
import EncodingPicture from "@/components/encoding/EncodingPicture";
import EncodingBlockText from "@/components/encoding/EncodingBlockText";
import EncodingBlockButtons from "@/components/encoding/EncodingBlockButtons";
import CollapseAntd from "@/components/collapse/CollapseAntd";
import ButtonGrayAddRemove from "@/components/buttons/ButtonGrayAddRemove";
import { Md3DRotation, MdArrowDropDown, MdArrowDropUp, MdCancel, MdChevronLeft, MdChevronRight, MdDelete, MdFilterList, MdInfo, MdPictureAsPdf, MdShoppingCart, MdUnfoldMore } from "react-icons/md";
import ButtonBuy from "@/components/buttons/ButtonBuy";
import { InputSwitch } from "@/components/inputs/InputSwitch";
import FilterChips from "@/components/filter/FilterChips";
import Button from "@/components/buttons/Button";
import Card from "@/components/card/Card";
import TableCell from "@/components/tableCell/TableCell";
import CartItem from "@/components/cartItem/CartItem";
import EncodingOrder from "@/components/encoding/EncodingOrder";
import { Form, Input, Radio, Select, Button as BtnAntd, RadioChangeEvent, Switch } from "antd";
const { Option } = Select;




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

const links = [
    {
        'id': 1,
        'title': 'Продукция',
        'url': 'Продукция',
    },
    {
        'id': 2,
        'title': 'Клапаны',
        'url': 'Клапаны',
    },
    {
        'id': 3,
        'title': 'Шаровые краны',
        'url': 'Шаровые краны',
    },
]

const props = [
    {
        'title': 'Давление',
        'value': 'до 207 бар при 21°C',
    },
    {
        'title': 'Давление',
        'value': 'до 207 бар при 21°C',
    },
    {
        'title': 'Давление',
        'value': 'до 207 бар при 21°C',
    },
]



export default function () {

    return <>
        <h1>
            Encoding
        </h1>
        <Link href='/'>Back</Link>
        <hr />


        {/* Кодировки с формой */}
        <h1>Образец</h1>
        <div className="container-xxl d-flex justify-content-center p-0" style={{ outline: '1px solid #000;background:#eee' }}>
            <Image src={Content} alt="" />
        </div>
        <h1>Мой</h1>
        <div className="container-xxl d-flex p-0" style={{ outline: '1px solid #000;background:#fff' }}>
            <EncodingWrapper>
                <div className="d-flex flex-column w-75 p-2">
                    <div className="d-flex justify-content-between mb-4">
                        <h5>Корзина</h5>
                        <Button
                            onClick={() => alert(111)}
                            icon={<MdDelete fill="#969696" />}
                            btn_style="btn-outline-secondary">Очистить корзину</Button>
                    </div>
                    <div className="d-flex flex-column gap-4">
                        <CartItem
                            index={1}
                            imgUrl="/kit/cart_item.png"
                            breadCrumbs={links}
                            price={214}
                            props={props}
                            count={3}
                            pagetitle={"H1B-H-6M"}
                            BasketButton={<>
                                <ButtonGrayAddRemove
                                    btn_class="btn-outline-secondary"
                                    counter={1}
                                    onClickRemove={() => alert('Click')}
                                    onClickAdd={() => alert('Click')}
                                />
                                <Button
                                    onClick={() => alert('Click')}
                                    icon={<MdDelete size={20}
                                        fill={'gray'} />}
                                    btn_style="btn-outline-secondary"
                                />
                            </>
                            }
                        />
                    </div>
                </div>
                <div className="d-flex flex-column p-2 w-25">
                    <h5>Оформление заказа</h5>
                    <Radio.Group name="radiogroup">
                        <EncodingOrder
                            value={1}
                            title="Самовывоз"
                            subtitle="г.Москва, ул.Большая Семеновская, дом 49." />
                        <EncodingOrder
                            value={2}
                            title="Доставка"
                            subtitle="Список партнёров флюид-лайн." />
                    </Radio.Group>
                    <div className="">
                        <Form layout="vertical">
                            <Form.Item label={<span style={{ fontSize: '16px', color: '#585757' }}>Контактное лицо</span>}>
                                <Input placeholder="ФИО" />
                            </Form.Item>
                            <Form.Item label={<span style={{ fontSize: '16px', color: '#585757' }}>Телефон</span>}>
                                <Input placeholder="+7 (000) 000-00-00" />
                            </Form.Item>
                            <Form.Item label={<span style={{ fontSize: '16px', color: '#585757' }}>E-mail</span>}>
                                <Input placeholder="example@mail.ru" />
                            </Form.Item>
                            <Form.Item label={<span style={{ fontSize: '16px', color: '#585757' }}>Адрес</span>}>
                                <Input placeholder="" />
                            </Form.Item>
                            <Form.Item
                                name="manager"
                                label={<span style={{ fontSize: '16px', color: '#585757' }}>Ваш менеджер</span>}>
                                <Select placeholder="-">
                                    <Option value="1">1</Option>
                                    <Option value="2">2</Option>
                                    <Option value="other">Other</Option>
                                </Select>
                            </Form.Item>
                            <span style={{ color: '#969696', fontSize: '13px' }}>Менеджер на стороне Fluid-line. Если заказываете сами, оставьте поле пустым.</span>
                            <button type="submit" className="btn btn-primary w-100 my-3">Отправить</button>
                        </Form>
                    </div>
                </div>
            </EncodingWrapper>
        </div>
        <br />
        <CollapseAntd title={'Encoding Content'} text={`
          <EncodingWrapper>
          <div className="d-flex flex-column w-75 p-2">
              <div className="d-flex justify-content-between mb-4">
                  <h5>Корзина</h5>
                  <Button
                      onClick={() => alert(111)}
                      icon={<MdDelete fill="#969696" />}
                      btn_style="btn-outline-secondary">Очистить корзину</Button>
              </div>
              <div className="d-flex flex-column gap-4">
                  <CartItem price={214} props_list={props_list} list={list_links} count={3} name_item={"H1B-H-6M"}></CartItem>
                  <CartItem price={214} props_list={props_list} list={list_links} count={3} name_item={"H1B-H-6M"}></CartItem>
                  <CartItem price={214} props_list={props_list} list={list_links} count={3} name_item={"H1B-H-6M"}></CartItem>
              </div>
          </div>
          <div className="d-flex flex-column p-2 w-25">
              <h5>Оформление заказа</h5>
              <Radio.Group name="radiogroup">
                  <EncodingOrder
                      value={1}
                      title="Самовывоз"
                      subtitle="г.Москва, ул.Большая Семеновская, дом 49." />
                  <EncodingOrder
                      value={2}
                      title="Доставка"
                      subtitle="Список партнёров флюид-лайн." />
              </Radio.Group>
              <div className="">
                  <Form layout="vertical">
                      <Form.Item label={<span style={{ fontSize: '16px', color: '#585757' }}>Контактное лицо</span>}>
                          <Input placeholder="ФИО" />
                      </Form.Item>
                      <Form.Item label={<span style={{ fontSize: '16px', color: '#585757' }}>Телефон</span>}>
                          <Input placeholder="+7 (000) 000-00-00" />
                      </Form.Item>
                      <Form.Item label={<span style={{ fontSize: '16px', color: '#585757' }}>E-mail</span>}>
                          <Input placeholder="example@mail.ru" />
                      </Form.Item>
                      <Form.Item label={<span style={{ fontSize: '16px', color: '#585757' }}>Адрес</span>}>
                          <Input placeholder="" />
                      </Form.Item>
                      <Form.Item
                          name="manager"
                          label={<span style={{ fontSize: '16px', color: '#585757' }}>Ваш менеджер</span>}>
                          <Select placeholder="-">
                              <Option value="1">1</Option>
                              <Option value="2">2</Option>
                              <Option value="other">Other</Option>
                          </Select>
                      </Form.Item>
                      <span style={{ color: '#969696', fontSize: '13px' }}>Менеджер на стороне Fluid-line. Если заказываете сами, оставьте поле пустым.</span>
                      <button type="submit" className="btn btn-primary w-100 my-3">Отправить</button>
                  </Form>
              </div>
          </div>
      </EncodingWrapper>
         `}></CollapseAntd>
        {/* Кодировки с формой */}


        {/* Верхняя часть кодировки */}
        <h1>Образец</h1>
        <div className="container-xxl d-flex justify-content-center p-0" style={{ outline: '1px solid #000;background:#eee' }}>
            <Image src={header} alt="" />
        </div>
        <h1>Мой</h1>
        <div className="container-xxl d-flex p-0" style={{ outline: '1px solid #000;background:#eee' }}>
            <div className="d-flex w-100 px-4">
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
                            <Button onClick={() => alert('Click')} icon={<MdShoppingCart size={20} fill={'#fff'} />}>Купить</Button>
                        }>
                    </EncodingBlockButtons>
                    {/* <div className="d-flex my-4 gap-4">
                        <a type={'button'} style={{ fontWeight: '500', fontSize: '16px', color: '#0085FF', borderBottom: '2px solid #0085FF' }}
                            onClick={() => alert('Click')}>Таблица конфигураций</a>
                        <a type={'button'} style={{ fontWeight: '500', fontSize: '16px', color: '#1C1C1C' }}
                            onClick={() => alert('Click')}>Конструкционные материалы</a>
                        <a type={'button'} style={{ fontWeight: '500', fontSize: '16px', color: '#1C1C1C' }}
                            onClick={() => alert('Click')}>Вебинары</a>
                        <a type={'button'} style={{ fontWeight: '500', fontSize: '16px', color: '#1C1C1C' }}
                            onClick={() => alert('Click')}>Каталоги</a>
                    </div> */}
                </EncodingWrapper>
            </div>
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
        {/* Верхняя часть кодировки */}


        {/* Популятрые фильтры */}
        <h1>Образец</h1>
        <div className="container-xxl d-flex justify-content-center p-0" style={{ outline: '1px solid #000;background:#eee' }}>
            <Image src={PopularFilters} alt="" />
        </div>
        <h1>Мой</h1>
        <div className="container-xxl d-flex p-0" style={{ outline: '1px solid #000;background:#fff' }}>
            <div className="row w-100">
                <EncodingWrapper>

                    <div className="d-flex">
                        <div className="d-flex justify-content-between w-100">
                            <div className="d-flex gap-2">
                                <div className="d-flex align-items-center px-2 py-1 border rounded-2 gap-2"
                                    style={{ border: '1px solid #E8E8E8' }}>
                                    <span style={{ fontSize: '16px', fontWeight: '500' }}>Есть в наличии</span>
                                    <Switch size="default" defaultChecked onChange={() => alert('switch')} />
                                    {/* <InputSwitch onChange={()=>alert('switch')} /> */}
                                </div>
                                <div className="d-flex align-items-center px-1 border rounded-2 gap-2"
                                    style={{ border: '1px solid #E8E8E8' }}>
                                    <FilterChips title="A-Flow" onClick={() => alert(111)} />
                                    <FilterChips title="A-Flow" onClick={() => alert(111)} />
                                    <MdUnfoldMore className="ms-4" fill="#969696" />
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


                </EncodingWrapper >
            </div>
        </div>
        <br />
        <CollapseAntd title={'Encoding Popular Filter'} text={`
           <EncodingWrapper>
           <div className="bg-white">

               <div className="d-flex">
                   <div className="d-flex justify-content-between w-100">
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
                               <MdUnfoldMore className="ms-4" fill="#969696" />
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
        {/* Популятрые фильтры */}


        {/* Таблица с товарами */}
        <h1>Образец</h1>
        <div className="container-xxl d-flex justify-content-center p-0" style={{ outline: '1px solid #000;background:#eee' }}>
            <Image src={table} alt="" />
        </div>
        <h1>Мой</h1>
        <div className="container-xxl d-flex p-0" style={{ outline: '1px solid #000;background:#fff' }}>

            {/* <Radio.Group name="radiogroup"> */}
            <EncodingWrapper>
                <div className="d-flex flex-column">
                    {/* Карта товара 8 шт */}
                    <div className="d-flex flex-column">
                        <div className="d-flex position-relative">
                            <Card
                                icon={<img src="/kit/card.png" alt="" />}
                                title={'Проходной 2-х ходовой'}
                                isActive
                                input_name={'card'}
                                value={1}
                            />
                            <Card
                                icon={<img src="/kit/card.png" alt="" />}
                                title={'Проходной 2-х ходовой'}
                                input_name={'card'}
                                value={2}
                            />
                            <Card
                                icon={<img src="/kit/card.png" alt="" />}
                                title={'Проходной 2-х ходовой'}
                                input_name={'card'}
                                value={3}
                            />
                            <Card
                                icon={<img src="/kit/card.png" alt="" />}
                                title={'Проходной 2-х ходовой'}
                                input_name={'card'}
                                value={4}
                            />
                            <Card
                                icon={<img src="/kit/card.png" alt="" />}
                                title={'Проходной 2-х ходовой'}
                                input_name={'card'}
                                value={5}
                            />
                            <Card
                                icon={<img src="/kit/card.png" alt="" />}
                                title={'Проходной 2-х ходовой'}
                                input_name={'card'}
                                value={6}
                            />
                            <Card
                                icon={<img src="/kit/card.png" alt="" />}
                                title={'Проходной 2-х ходовой'}
                                input_name={'card'}
                                value={7}
                            />
                            <Card
                                icon={<img src="/kit/card.png" alt="" />}
                                title={'Проходной 2-х ходовой'}
                                input_name={'card'}
                                value={8}
                            />
                            <Card
                                icon={<img src="/kit/card.png" alt="" />}
                                title={'Проходной 2-х ходовой'}
                                input_name={'card'}
                                value={9}
                            />

                            <div className="d-flex flex-column bg-white position-absolute top-0 end-0 h-100 justify-content-center gap-2 px-2"
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
                    </div>

                    {/* Название колонок под картами товара */}
                    <div className="d-flex position-relative" style={{ height: '80px', border: '1px solid #E8E8E8' }}>
                        <div className="col">
                            <TableCell
                                title={'Кодировка'}
                                icon={<MdUnfoldMore size={20} fill="#0085FF" />} />
                        </div>
                        <div className="col">
                            <TableCell title={'Действия'} />
                        </div>
                        <div className="col">
                            <TableCell title={'Кол-во'} />
                        </div>
                        <div className="col">
                            <TableCell title={'Цена'} describe={'Без НДС'} icon={<MdUnfoldMore size={20} fill="#0085FF" />}></TableCell>
                        </div>
                        <div className="col">
                            <TableCell title={'Купить'} />
                        </div>
                        <div className="col">
                            <TableCell title={'Подсоединение'} icon={<MdUnfoldMore size={20} fill="#0085FF" />} />
                        </div>
                        <div className="col">
                            <TableCell title={'CV/ДУ'} describe={'мм.'} icon={<MdUnfoldMore size={20} fill="#0085FF" />} />
                        </div>
                        <div className="col">
                            <TableCell title={'Давление'} describe={'бар.'} icon={<MdUnfoldMore size={20} fill="#0085FF" />} />
                        </div>
                        <div className="col">
                            <TableCell title={'Температура'} describe={'℃'} icon={<MdUnfoldMore size={20} fill="#0085FF" />} />
                        </div>
                        <div className="d-flex bg-white position-absolute top-0 end-0 h-100 justify-content-center gap-2 p-2"
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

                    <div className="d-flex flex-column">
                        {/* Описание под колонками карт товара */}
                        <div className="d-flex">
                            <TableCell
                                class_name="col"
                                isBorder={true}
                                title={'H1B-H-6M'}
                                icon={<MdInfo type="button" size={24} fill="#0085FF" onClick={() => alert('Click')} />}
                                isTextDashed={true}
                                contentPosition="between"
                            />
                            <TableCell
                                class_name="col"
                                isBorder={true}
                            >
                                <Button
                                    btn_style="btn-outline-secondary"
                                    icon={<MdPictureAsPdf fill="#969696" />} />
                                <Button
                                    btn_style="btn-outline-secondary"
                                    icon={<Md3DRotation fill="#969696" />} />
                            </TableCell>
                            <TableCell
                                class_name="col"
                                isBorder={true}
                                contentPosition="end"
                                title={'17 шт.'}
                            />
                            <TableCell
                                class_name="col"
                                isBorder={true}
                                contentPosition="end"
                                title={'7685 ₽'}
                            />
                            <TableCell
                                class_name="col"
                                isBorder={true}
                            >
                                <ButtonGrayAddRemove
                                    counter={0}
                                    onClickRemove={() => alert('Click')}
                                    onClickAdd={() => alert('Click')} />
                                <Button
                                    onClick={() => alert('Click')}
                                    icon={<MdShoppingCart size={20} fill={'#fff'} />} />
                            </TableCell>
                            <TableCell
                                class_name="col"
                                isBorder={true}
                                title={'Подсоединение'}
                            />
                            <TableCell
                                class_name="col"
                                isBorder={true}
                                title={'CV/ДУ'}
                            />
                            <TableCell
                                class_name="col"
                                isBorder={true}
                                title={'Давление'}
                            />
                            <TableCell
                                class_name="col"
                                isBorder={true}
                                title={'Температура'}
                            />
                        </div>

                        {/* Описание под колонками карт товара №2 */}
                        <div className="d-flex">
                            <TableCell
                                class_name="col"
                                isBorder={true}
                                title={'H1B-H-6M'}
                                icon={<MdInfo type="button"
                                    size={24} fill="#0085FF" onClick={() => alert('Click')} />} isTextDashed={true}
                                contentPosition="between"
                            />
                            <TableCell
                                class_name="col"
                                isBorder={true}
                            >
                                <Button
                                    btn_style="btn-outline-secondary"
                                    icon={<MdPictureAsPdf fill="#969696" />} />
                                <Button
                                    btn_style="btn-outline-secondary"
                                    icon={<Md3DRotation fill="#969696" />} />
                            </TableCell>
                            <TableCell
                                class_name="col"
                                isBorder={true}
                                contentPosition="end"
                                title={'17 шт.'}
                            />
                            <TableCell
                                class_name="col"
                                isBorder={true}
                                contentPosition="end"
                                title={'7685 ₽'}
                            />
                            <TableCell
                                class_name="col"
                                isBorder={true}
                            >
                                <ButtonGrayAddRemove
                                    counter={0}
                                    onClickRemove={() => alert('Click')}
                                    onClickAdd={() => alert('Click')} />
                                <Button
                                    onClick={() => alert('Click')}
                                    icon={<MdShoppingCart size={20} fill={'#fff'} />} />
                            </TableCell>
                            <TableCell
                                class_name="col"
                                isBorder={true}
                                title={'Подсоединение'}
                            />
                            <TableCell
                                class_name="col"
                                isBorder={true}
                                title={'CV/ДУ'}
                            />
                            <TableCell
                                class_name="col"
                                isBorder={true}
                                title={'Давление'}
                            />
                            <TableCell
                                class_name="col"
                                isBorder={true}
                                title={'Температура'}
                            />
                        </div>

                    </div>
                </div>
            </EncodingWrapper >

            {/* </Radio.Group> */}
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
{/* Таблица с товарами */}
         `}></CollapseAntd>
        {/* Таблица с товарами */}







    </>

}