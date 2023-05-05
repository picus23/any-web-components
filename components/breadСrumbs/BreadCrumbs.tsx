import { FC } from "react";
import { IBreadСrumbs } from './interface'
// import Link from "next/link";


interface BreadCrumbsProps {
    list: IBreadСrumbs[],
    route?: (url: string) => string
}

const BreadCrumbs: FC<BreadCrumbsProps> = ({ list, route }) => {
    return <div style={{overflow:'hidden',overflowX:'scroll',whiteSpace:'nowrap'}}>
        {
            list.map(({ title, id, url }, index) => {
                return <span key={id} style={{color:'#E8E8E8',fontSize:'13px',display:'inline-block'}}>
                    {index != 0 ? ' / ' : ''}
                    <a className="text-decoration-none" style={{color:'#585757'}} href={route ? route(url) : url}>{title}</a>
                </span>
            })
        }
    </div>
}

export default BreadCrumbs;