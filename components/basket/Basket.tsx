import { FC, ReactNode } from "react";

interface BasketProps {
    children: ReactNode
}

const Basket: FC<BasketProps> = ({ children }) => {
    return <>
        {children}
    </>;
}

export default Basket;