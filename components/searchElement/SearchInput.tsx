import { FC, FormEvent, createRef } from "react";
import Button from "../buttons/Button";

interface SearchInputProps {
    handleFocus: (isFocused: boolean) => void,
    handleUserTyping: (phrase: string) => void,
    handleSearch: (phrase: string, context: string|null) => void,
}
 
const SearchInput: FC<SearchInputProps> = ({handleSearch, handleUserTyping, handleFocus}) => {

    const searchInput = createRef<HTMLInputElement>()

    const handleSearchWrapper = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const phrase = searchInput.current?.value === undefined ? '' : searchInput.current.value;
        handleSearch(phrase, null)
    }

    const handleUserTypingWrapper = (event: FormEvent<HTMLInputElement>) => {
        const phrase = searchInput.current?.value === undefined ? '' : searchInput.current.value;
        handleUserTyping(phrase)
    }

    return (
        <form className=" d-flex my-2" onSubmit={handleSearchWrapper}>
            <input 
                ref={searchInput}
                onFocus={e => handleFocus(true)}
                onBlur={e => handleFocus(false)}
                onInput={handleUserTypingWrapper}
                className="input-find" 
                type="search" 
                placeholder="Поиск" 
                aria-label="Search"
            />
            <Button btn_style="find-blue">Найти</Button>
        </form>
    );
}
 
export default SearchInput;