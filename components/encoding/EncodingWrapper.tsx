import { ReactNode, FC } from 'react'

interface EncodingWrapperProps {
    children?: ReactNode
}

const EncodingWrapper: FC<EncodingWrapperProps> = ({ children }) => {
    return <>
        <div className="d-flex px-4">
            {children}
        </div>
    </>;
}

export default EncodingWrapper;