import {useState} from 'react';
import {ImSearch} from 'react-icons/im';
import { SearchForm, SearchBarStyle, SearchFormInput, SearchFormButton, SearchFormButtonLabel } from './SearchBar.styled';

const SearchBar = ({onSubmit}) => {
    const [search, setSearch] = useState('')

    const handleNameChange = e => {
        setSearch(e.currentTarget.value.toLowerCase());
    }

    const handleSubmit = e => {
        e.preventDefault()
        if(search.trim() === '') {
            return alert('Please entry')
        }
        onSubmit(search)
        setSearch('')
    }

    return (
        <SearchBarStyle>
            <header className="searchbar">
                <SearchForm onSubmit={handleSubmit} className="form">
                    <SearchFormInput
                        value={search}
                        name='images'
                        className="input"
                        type="text"
                        placeholder="Search images and photos"
                        onChange={handleNameChange}
                    />
                    <SearchFormButton type="submit" className="button">
                        <ImSearch style={{marginRight: 8}}/>
                        <SearchFormButtonLabel>Search</SearchFormButtonLabel>
                    </SearchFormButton>
                </SearchForm>
            </header>
        </SearchBarStyle>
    );
}

export default SearchBar;