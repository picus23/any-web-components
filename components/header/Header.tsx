import { FC, ReactNode } from "react";


interface HeaderProps {
    children?: ReactNode,
    icon?: ReactNode,
    icon2?: ReactNode
    counter?: number,
    type_btn?: string,
    type_counter?: string,
}

const Header: FC<HeaderProps> = ({ children, icon, icon2, counter, type_btn, type_counter }) => {
    return <div>

        
    </div>
}

export default Header;


// {`${type_btn ? 'my-btn-' + type_btn : 'btn-primary'}`} 