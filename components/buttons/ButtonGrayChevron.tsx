import { FC, ReactNode } from "react";
import { MdArrowForward, MdChevronRight } from 'react-icons/md'


interface ButtonGrayChevronProps {
    icon: ReactNode,
    onClick?: () => void
}

const ButtonGrayChevron: FC<ButtonGrayChevronProps> = ({ icon, onClick }) => {
    return <button className="catalog-menu-item-button rounded-circle" onClick={onClick}>
        {icon}
    </button>

}

export default ButtonGrayChevron;
