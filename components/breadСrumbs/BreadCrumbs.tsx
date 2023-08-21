import { FC } from "react";
import Link from "next/link";
import { IBreadСrumbs, NextUrl } from './interface'
import { MdKeyboardArrowRight } from "react-icons/md";


interface BreadCrumbsProps {
    list: IBreadСrumbs[],
    route?: (url: string) => NextUrl
}

const BreadCrumbs: FC<BreadCrumbsProps> = ({ list, route }) => {
    return <div style={{overflow:'hidden',overflowX:'scroll',whiteSpace:'nowrap'}}>
        {
            list.map(({ title, id, url }, index) => {
                return <span key={url}>
                    {index != 0 ? <MdKeyboardArrowRight color="#888" size={20}/> : ''}
                    <Link className="text-decoration-none" style={{color:'#585757'}} href={route ? route(url) : url}>{title}</Link>
                </span>
            })
        }
    </div>
}

export default BreadCrumbs;