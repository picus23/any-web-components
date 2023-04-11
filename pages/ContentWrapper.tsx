import { FC, ReactNode } from "react";

interface ContentWrapperProps {
    children: ReactNode,
    bg?: string,
    width?: number | string,
    padding?: number,
}
 
const ContentWrapper: FC<ContentWrapperProps> = ({children, bg = '#eee', width, padding}) => {
    return <div 
        className="container-xxl d-flex justify-content-center p-0" 
        style={{ outline: '1px solid #000', background: bg, marginTop: 1 }}
    >
        <div style={{width, padding}} className="bg-white">
            {children}
        </div>
    </div>;
}
 
export default ContentWrapper;