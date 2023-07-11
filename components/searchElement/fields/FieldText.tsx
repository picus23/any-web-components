import { FC, ReactNode } from "react";

interface FieldTextProps {
    children: ReactNode,
}

const FieldText: FC<FieldTextProps> = ({ children }) => {
    return <div className="text-field" >{children}</div>
}

export default FieldText;