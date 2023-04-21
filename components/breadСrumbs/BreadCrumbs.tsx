import { FC } from "react";
import {IBreadСrumbs} from './interface'
import Link from "next/link";


interface BreadCrumbsProps {
    list: IBreadСrumbs[],
    route?: (url: string) => string
}

const BreadCrumbs: FC<BreadCrumbsProps> = ({ list, route}) => {
    return <>
        {

            list.map(({title, id, url}, index) => {
                return <span key={id}>
                    {index != 0 ? ' / ' : ''}
                    <Link href={route ? route(url) : url}>{title}</Link> 
                </span>
            })
        }
    </>
}

export default BreadCrumbs;