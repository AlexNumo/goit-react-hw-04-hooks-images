import SearchBar from "./Components/SearchBar/Searchbar";
import ImageGallery from "./Components/ImageGallery/ImageGallery";
import Loader from "./Components/Loader/Loader";
import React, {Component} from "react";
import Modal from "./Components/Modal/Modal";
import ButtonLoadMore from "./Components/Button/Button";
import { AppStyle, PhotoModal } from "./App.styled";
//=====================================================
const API_KEY = '22475495-2c8e7700259b36f6d1c49a123';
const PER_PAGE = 12;


export default class App extends Component {

    state = {
        currentPage: 0,
        searchObject: '',
        hits: [],
        error: null,
        isLoading: false,
        showModal: false,
        tags: '',
        largeImageURL: ''
    }

    // loadHidden(){
    //    const loadHidden = document.querySelector('.button');
    //    console.log(loadHidden);
    // }

    componentDidUpdate(prevProps, prevState){
        const prevName = prevState.searchObject
        const nextName = this.state.searchObject
        if(prevName !== nextName) {
            this.fetchQuery()
        }
    }

    fetchQuery = () => {
        const {searchObject, currentPage} = this.state
        this.setState({isLoading: true,})
        fetch(`https://pixabay.com/api/?q=${searchObject}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`)
            .then(response => {
                if(response.ok) {
                    return response.json();
                }

                return Promise.reject(new Error('Somes wrong'))
            })
            .then(({hits}) => {
                if(hits.length === 0) {

                    return Promise.reject(new Error("Check your enter"))
                }
                this.setState((prevState) => ({
                    hits: [...prevState.hits, ...hits], currentPage: prevState.currentPage + 1
                }))
            })
            .catch(error => this.setState({error}))
            .finally(() => this.setState({isLoading: false}))
    }


    handleFormSubmit = searchObject => {
        this.setState({
            searchObject:searchObject,
            currentPage:1,
            hits:[],
            error:null
        })
    }

    toggleModal = () => {
        this.setState(({showModal}) => ({showModal: !showModal}))
    }


    onModal = ({largeImageURL, tags}) => {
        this.setState({
            largeImageURL: largeImageURL,
            tags: tags,
        });
        this.toggleModal();
    };


    render(){
        const {hits, error, isLoading, showModal, tags, largeImageURL} = this.state;
        const renderButtonLoadMore = Math.ceil((this.state.currentPage-1)*12/hits.length) === 1 && !isLoading;


        return (

            <AppStyle>
                <SearchBar onSubmit={this.handleFormSubmit}/>
                {isLoading && <Loader/>}
                {error && <h1>{error.message}</h1>}
                <ImageGallery showQuery={hits} onClick={this.onModal}/>
                {renderButtonLoadMore && <ButtonLoadMore onClick={this.fetchQuery}/>}
                {showModal && <Modal onClose={this.toggleModal}>
                    <PhotoModal src={largeImageURL} alt={tags}/>
                </Modal>}
            </AppStyle>)

    }
}