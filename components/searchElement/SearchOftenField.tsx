import { MdSearch } from 'react-icons/md'
import ButtonGrayArrow from '../buttons/ButtonGrayArrow'

interface SearchOftenFieldProps {
    title: string,
}


function SearchOftenField(props: SearchOftenFieldProps) {
    return (
        <div className="search-field px-2">
            <div className="me-2">
                <MdSearch size={24} fill={'gray'} />
                <span className="font-size-20 ms-3 fw-500">{props.title}</span>
            </div>
                <ButtonGrayArrow />
        </div>
    )
}

export default SearchOftenField;


{/* <div className="search-hint-search-often">
    <span className="font-size-16-gray fw-500">Часто ищут</span>
    <SearchOftenField title="Hy-Lok 3мм"></SearchOftenField>
    <SearchOftenField title="Hy-Lok 3мм"></SearchOftenField>
    <SearchOftenField title="Hy-Lok 3мм"></SearchOftenField>
</div> */}