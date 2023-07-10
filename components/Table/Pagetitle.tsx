import Link from "next/link";
import { FC, ReactNode, useContext } from "react";
import { MdInfo } from "react-icons/md";
import { NextUrl } from "../breadСrumbs/interface";

interface PagetitleProps {
    pagetitle: string | ReactNode,
    onClick?: () => void,
    url: NextUrl,
}

const Pagetitle: FC<PagetitleProps> = ({ pagetitle, onClick, url}) => {


    return <div className="d-flex" style={{minWidth: 200}}>
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