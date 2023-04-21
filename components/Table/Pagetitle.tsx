import Link from "next/link";
import { FC } from "react";
import { MdInfo } from "react-icons/md";

interface PagetitleProps {
    pagetitle: string,
    onClick?: () => void,
    url: string,
}

const Pagetitle: FC<PagetitleProps> = ({ pagetitle, onClick, url}) => {

    return <div className="d-flex">
        <div className="flex-grow-1 ">
            <span style={{ borderBottom: '2px dashed #ccc' }} role="button" onClick={onClick}>
                <Link href={url}>
                    {pagetitle}
                </Link>
            </span>
        </div>
        <MdInfo size={25} color="var(--bs-blue)" />
    </div>

}

export default Pagetitle;