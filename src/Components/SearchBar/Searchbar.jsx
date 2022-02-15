import React, {Component} from 'react';
import {ImSearch} from 'react-icons/im';
import PropTypes from "prop-types";
import { SearchForm, SearchBarStyle, SearchFormInput, SearchFormButton, SearchFormButtonLabel } from './SearchBar.styled';

export default class SearchBar extends Component{

    state={
        nameSearch:''
    }

    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
    };


    handleNameChange =event=>{
       this.setState({nameSearch:event.currentTarget.value.toLowerCase()});
    }

    handleSubmit=event=>{
        event.preventDefault()
        if(this.state.nameSearch.trim()===''){
           return alert ('Please entry')
        }
        this.props.onSubmit(this.state.nameSearch)
        this.setState({nameSearch:''})
    }

    render(){
        const {search}=this.state
        return (
            <SearchBarStyle>
                <header className="searchbar">
                    <SearchForm onSubmit={this.handleSubmit} className="form">

                        <SearchFormInput
                            value={search}
                            name='images'
                            className="input"
                            type="text"
                            placeholder="Search images and photos"
                            onChange={this.handleNameChange}
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
};