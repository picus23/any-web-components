import { FC, ReactNode } from "react";
import { MdCancel, MdOutlineSegment, MdUnfoldMore } from "react-icons/md";

interface FilterHeadProps {
    img?: string,
    title?: string | ReactNode,
    filter_style?: string,
}

const FilterHead: FC<FilterHeadProps> = ({ title, img }) => {
    return <div className="d-flex align-items-center mb-2 mt-3">
        {img ? <img src={img} alt="" /> : <img src="/kit/filter_head_img.png" alt="" />}
        <strong className="font-size-16-black fw-500 ms-2">{title}</strong>
    </div>
}

export default FilterHead;
