import { ReactNode, FC } from 'react'
import { MdFacebook } from 'react-icons/md'

interface FilterProps {
    children?: ReactNode
}

const Filter: FC<FilterProps> = ({ children }) => {
    return <>
        {children}
    </>;
}

export default Filter;