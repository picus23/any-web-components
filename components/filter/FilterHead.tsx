import { FC, ReactNode } from "react";
import { MdCancel, MdOutlineSegment, MdUnfoldMore } from "react-icons/md";

interface FilterHeadProps {
    children?: ReactNode,
    img?: string,
    title?: string | ReactNode,
    filter_style?: string,
}

const FilterHead: FC<FilterHeadProps> = ({ children, title, img }) => {
    return <div className="d-flex align-items-center">
        {img ? <img src={img} alt="" /> : <img src="/kit/filter_head_img.png" alt="" />}
        <span className="font-size-16-black fw-500 ms-2">{title}</span>
    </div>
}

export default FilterHead;
