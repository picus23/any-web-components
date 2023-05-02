import { ReactNode, FC } from 'react'

interface EncodingWrapperProps {
    children?: ReactNode
}

const EncodingWrapper: FC<EncodingWrapperProps> = ({ children }) => {
    return <>
        {children}
    </>;
}

export default EncodingWrapper;