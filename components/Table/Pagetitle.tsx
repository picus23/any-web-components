import { FC } from "react";
import { MdInfo } from "react-icons/md";

interface PagetitleProps {
    pagetitle: string,
    onClick?: () => void,
}

const Pagetitle: FC<PagetitleProps> = ({ pagetitle, onClick}) => {

    return <div className="d-flex">
        <div className="flex-grow-1 ">
            <span style={{ borderBottom: '2px dashed #ccc' }} role="button" onClick={onClick}>
                {pagetitle}
            </span>
        </div>
        <MdInfo size={25} color="var(--bs-blue)" />
    </div>

}

export default Pagetitle;