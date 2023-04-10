import { FC, ReactNode } from "react";


interface CardProps {
    children?: ReactNode,
    icon?: ReactNode,
    title?: string,
    isActive?: boolean,
    // type_input: string,
    input_name:string
}

const Card: FC<CardProps> = ({icon,title,isActive,input_name  }) => {
    return <div className={'d-flex flex-column align-items-start p-3 gap-1 ' + `${isActive ? 'card-active' : 'card-unactive'}`}>
    {/* return <div className={'d-flex flex-column align-items-start p-3 gap-1 card-' + isActive}> */}
        <input className={'input-' + `${isActive ? 'card-active' : 'card-unactive'}`} name={input_name} type="radio" checked />
        {icon ?? false}
        <span>{title ?? false}</span>
    </div>
}

export default Card;


// {`${type_btn ? 'my-btn-' + type_btn : 'btn-primary'}`} 