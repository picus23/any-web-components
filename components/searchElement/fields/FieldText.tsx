import { FC, ReactNode } from "react";

interface FieldTextProps {
    children: string,
}

const FieldText: FC<FieldTextProps> = ({ children }) => {
    return <div className="text-field">{children}</div>
}

export default FieldText;