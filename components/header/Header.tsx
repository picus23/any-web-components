import { FC, ReactNode } from "react";
import SearchBar from "../searchElement/SearchBar/SearchBar";
import Input from "../inputs/Input";
import { MdChevronRight } from "react-icons/md";


interface HeaderProps {
    children?: ReactNode,
    icon?: ReactNode,
    icon2?: ReactNode
    counter?: number,
    type_btn?: string,
    type_counter?: string,
}

const Header: FC<HeaderProps> = ({ children, icon, icon2, counter, type_btn, type_counter }) => {
    return <div className="d-flex">
        <div className="d-flex flex-column align-items-start py-3 px-4 side-menu">
            {/* <Input button_style={'button-active'} type_input={'square'} title={'Продукция'} icon={<MdChevronRight />} title_style={'font-size-16 '}></Input>
            <Input button_style={'button-unactive'} type_input={'square'} title={'Продукция'} icon={<MdChevronRight />} title_style={'font-size-16 '}></Input>
            <Input button_style={'button-unactive'} type_input={'square'} title={'Продукция'} icon={<MdChevronRight />} title_style={'font-size-16 '}></Input>
            <Input button_style={'button-unactive'} type_input={'square'} title={'Продукция'} icon={<MdChevronRight />} title_style={'font-size-16 '}></Input>
            <Input button_style={'button-unactive'} type_input={'square'} title={'Продукция'} icon={<MdChevronRight />} title_style={'font-size-16 '}></Input>
            <Input button_style={'button-unactive'} type_input={'square'} title={'Продукция'} icon={<MdChevronRight />} title_style={'font-size-16 '}></Input>
            <Input button_style={'button-unactive'} type_input={'square'} title={'Продукция'} icon={<MdChevronRight />} title_style={'font-size-16 '}></Input> */}
        </div>
        <SearchBar> </SearchBar>

    </div>
}

export default Header;


// {`${type_btn ? 'my-btn-' + type_btn : 'btn-primary'}`} 