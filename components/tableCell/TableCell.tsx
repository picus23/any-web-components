import { FC, ReactNode } from "react";
import Button from "../buttons/Button";
import { MdInfo } from "react-icons/md";


interface TableCellProps {
    children?: ReactNode,
    icon?: ReactNode,
    btn_style?: string,
    counter_style?: string,
    direction?: string,
    title?: string,
    describe?: string,
    chevron?: boolean,
    oneButton?: ReactNode,
    twoButton?: ReactNode,
    imgRight?: boolean,
    imgCenter?: ReactNode,
    style: string,
    text_style?: string,
}

const TableCell: FC<TableCellProps> = ({ children,style, icon,text_style, direction, btn_style, counter_style, title, describe, chevron, oneButton, twoButton, imgRight, imgCenter }) => {
    return <div className={style + ' align-items-center'}>
        {oneButton ?? false}
        {twoButton ?? false}
        <div>
            {title ? <span className={'font-size-16 ' + text_style}>{title}</span> : false}
            {describe ? <br /> : false}
            {describe ? <span className="font-size-13">{describe}</span> : false}
        </div>
        {children}

        {icon ?? false}
    {/* return <div className={style + ' align-items-center'}>
        {oneButton ?? false}
        {twoButton ?? false}
        <div>
            {title ? <span className="font-size-16">{title}</span> : false}
            {describe ? <br /> : false}
            {describe ? <span className="font-size-13">{describe}</span> : false}
        </div>

        {chevron ? <div className="mx-2"><svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.00003 2.85835L6.05003 4.90835C6.37503 5.23335 6.90003 5.23335 7.22503 4.90835C7.55003 4.58335 7.55003 4.05835 7.22503 3.73335L4.58337 1.08335C4.25837 0.75835 3.73337 0.75835 3.40837 1.08335L0.766699 3.73335C0.441699 4.05835 0.441699 4.58335 0.766699 4.90835C1.0917 5.23335 1.6167 5.23335 1.9417 4.90835L4.00003 2.85835ZM4.00003 13.1417L1.95003 11.0917C1.62503 10.7667 1.10003 10.7667 0.775032 11.0917C0.450032 11.4167 0.450032 11.9417 0.775032 12.2667L3.4167 14.9167C3.7417 15.2417 4.2667 15.2417 4.5917 14.9167L7.23337 12.275C7.55837 11.95 7.55837 11.425 7.23337 11.1C6.90837 10.775 6.38337 10.775 6.05837 11.1L4.00003 13.1417Z" fill="#0085FF" />
        </svg></div> : false
        }
        {imgRight ? <MdInfo fill="#0085FF" /> : false}

        {imgCenter ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z" fill="#969696" />
        </svg>
            : false}

        {icon ?? false} */}

    </div>
}

export default TableCell;


// ${type_btn ? 'btn-' + type_btn : 'btn-primary'} 