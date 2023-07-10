import { FC, FormEvent, createRef } from "react";
import Button from "../buttons/Button";

interface SearchInputProps {
    searchPhrase?: string,
    handleFocus?: (isFocused: boolean) => void,
    handleUserTyping: (phrase: string) => void,
    handleSearch: (phrase: string, context: string | null) => void,
}

const SearchInput: FC<SearchInputProps> = ({ searchPhrase, handleSearch, handleUserTyping, handleFocus }) => {

    const searchInput = createRef<HTMLInputElement>()

    const handleSearchWrapper = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const phrase = searchInput.current?.value === undefined ? '' : searchInput.current.value;
        handleSearch(phrase, 'search')
    }

    const handleUserTypingWrapper = (event: FormEvent<HTMLInputElement>) => {
        const phrase = searchInput.current?.value === undefined ? '' : searchInput.current.value;
        handleUserTyping(phrase)
    }

    return (
        <form className="d-flex" onSubmit={handleSearchWrapper}>
            <div className="input-group">
                <input
                    value={searchPhrase !== undefined ? searchPhrase : ''}
                    ref={searchInput}
                    onFocus={e => handleFocus === undefined ? false : handleFocus(true)}
                    onBlur={e => handleFocus === undefined ? false : handleFocus(false)}
                    onInput={handleUserTypingWrapper}
                    className="input-find flex-grow-1 form-control"
                    type="search"
                    placeholder="Поиск"
                    aria-label="Search"
                />
                <Button btn_style="btn-primary" style={{ borderRadius: '0 8px 8px 0' }}>Найти</Button>
            </div>
        </form>
    );
}

export default SearchInput;