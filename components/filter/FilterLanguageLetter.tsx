import { Children, FC, ReactNode } from "react";

interface FilterLanguageLetterProps {
    letter?:string,
    isActive?:boolean,
}

const FilterLanguageLetter: FC<FilterLanguageLetterProps> = ({letter,isActive = false}) => {
    return <li className={'font-size-16-gray ' + (isActive ? 'letter-active ' : '')}>
        {letter}
    </li>
}

export default FilterLanguageLetter;