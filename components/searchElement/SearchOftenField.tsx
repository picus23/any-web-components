import { MdSearch } from 'react-icons/md'
import ButtonGrayArrow from '../buttons/ButtonGrayArrow'

interface SearchOftenFieldProps {
    title: string,
}


function SearchOftenField(props: SearchOftenFieldProps) {
    return (
        <div className="search-field p-2">
            <div className="mx-2">
                <MdSearch size={24} fill={'gray'}/>
                <span className="font-size-20 ms-3 fw-500">{props.title}</span>
            </div>
            <div>
                <ButtonGrayArrow/>
            </div>
        </div>
    )
}

export default SearchOftenField;