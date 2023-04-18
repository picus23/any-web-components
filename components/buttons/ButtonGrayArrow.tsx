import { FC, ReactNode } from "react";
import { MdArrowForward } from 'react-icons/md'


interface ButtonGrayArrowProps {
    icon?: ReactNode,
    size?: number
    onClick?: () => void
}

const ButtonGrayArrow: FC<ButtonGrayArrowProps> = ({ icon, size, onClick }) => {
    return <button className="catalog-menu-item-button rounded-circle" onClick={onClick}>
        {icon ? icon : <MdArrowForward size={size ?? 20} fill={'gray'}/>}
    </button>

}

export default ButtonGrayArrow;
