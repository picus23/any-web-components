import { FC } from "react";
import {IBreadСrumbs} from './interface'
import Link from "next/link";


interface BreadCrumbsProps {
    list: IBreadСrumbs[],
    prefix: string,
}

const BreadCrumbs: FC<BreadCrumbsProps> = ({ list, prefix}) => {
    return <>
        {

            list.map(({title, id, url}, index) => {
                return <>
                    {index != 0 ? ' / ' : ''}
                    <Link href={prefix + url}>{title}</Link> 
                </>
            })
        }
    </>
}

export default BreadCrumbs;