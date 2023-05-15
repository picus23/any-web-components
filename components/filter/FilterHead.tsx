import Image from "next/image";
import { FC, ReactNode } from "react";

interface FilterHeadProps {
    img?: string,
    title?: string | ReactNode,
    filter_style?: string,
}

const FilterHead: FC<FilterHeadProps> = ({ title, img }) => {
    return <div className="d-flex align-items-center mb-2 mt-3">
        <Image src={img ? img : "/kit/filter_head_img.png"} alt="" width={100} height={100} />
        <strong className="font-size-16-black fw-500 ms-2">{title}</strong>
    </div>
}

export default FilterHead;
