import {useState} from 'react';
import {ImSearch} from 'react-icons/im';
import { SearchForm, SearchBarStyle, SearchFormInput, SearchFormButton, SearchFormButtonLabel } from './SearchBar.styled';


export default function SearchBar ({onSubmit}) {
    const [nameSearch, setNameSearch] = useState('');

    const handleNameChange = (event) => {
        setNameSearch(event.currentTarget.value.toLowerCase());
    }

    function handleSubmit (event) {
        event.preventDefault();
        if(nameSearch.trim()===''){
           return alert ('Please entry')
        }
        onSubmit(nameSearch)
        setNameSearch('')
    }

        return (
            <SearchBarStyle>
                <header className="searchbar">
                    <SearchForm onSubmit={handleSubmit} className="form">
                        <SearchFormInput
                            value={nameSearch}
                            name='images'
                            className="input"
                            type="text"
                            placeholder="Search images and photos"
                            onChange={handleNameChange}
                        />
                        <SearchFormButton type="submit" className="button">
                            <ImSearch style={{marginRight:8}}/>
                            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
                        </SearchFormButton>
                    </SearchForm>
                </header>
            </SearchBarStyle>
        );
    }