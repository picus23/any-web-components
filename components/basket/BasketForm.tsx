import { Form, Input, Radio, Select } from "antd";
import { FC } from "react";
import EncodingOrder from "../encoding/EncodingOrder";
const { Option } = Select;

interface BasketFormProps {
    managerList?: string[]

}

const BasketForm: FC<BasketFormProps> = ({ managerList }) => {
    return <div className="d-flex flex-column p-2 w-25 position-sticky" style={{ top: '200px', zIndex: '10' }}>
        <h5>Оформление заказа</h5>
        <Radio.Group name="radiogroup" defaultValue={1}>
            <EncodingOrder
                value={1}
                title="Самовывоз"
                subtitle="г.Москва, ул.Большая Семеновская, дом 49."
            />
            <EncodingOrder
                value={2}
                title="Доставка"
                subtitle="Список партнёров флюид-лайн."
            />
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
                        {
                            managerList?.map(el => {
                                return <Option value={el}>{el}</Option>

                            })
                        }
                    </Select>
                </Form.Item>
                <span style={{ color: '#969696', fontSize: '13px' }}>Менеджер на стороне Fluid-line. Если заказываете сами, оставьте поле пустым.</span>
                <button type="submit" className="btn btn-primary w-100 my-3">Отправить</button>
            </Form>
        </div>
    </div>;
}

export default BasketForm;