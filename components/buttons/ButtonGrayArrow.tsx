import { FC, ReactNode } from "react";
import { MdArrowForward } from 'react-icons/md'


interface ButtonGrayArrowProps {
    icon?: ReactNode,
    size?: number
}

const ButtonGrayArrow: FC<ButtonGrayArrowProps> = ({ icon,size }) => {
    return <button className="catalog-menu-item-button rounded-circle">
        {icon ? icon : <MdArrowForward size={size ?? 20} fill={'gray'}/>}
    </button>

}

export default ButtonGrayArrow;