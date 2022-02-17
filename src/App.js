import SearchBar from "./Components/SearchBar/Searchbar";
import ImageGallery from "./Components/ImageGallery/ImageGallery";
import Loader from "./Components/Loader/Loader";
import {useEffect, useState} from "react";
import Modal from "./Components/Modal/Modal";
import ButtonLoadMore from "./Components/Button/Button";
import fetchQuery from "./Components/Services/FetchQuery";
import { AppStyle, PhotoModal } from "./App.styled";


const App = () => {

    const [currentPage, setCurrentPage] = useState('1');
    const [searchObject, setSearchObject] = useState('');
    const [hits, setHits] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [tags, setTags] = useState('');
    const [largeImageURL, setLargeImageURL] = useState('');

    useEffect(() =>{
        if(!searchObject) return;
        setIsLoading(true);
        fetchQuery ({searchObject, currentPage})
            .then(({hits}) => {
                const images = hits.map(({webformatURL, id, tags, largeImageURL}) => ({
                    webformatURL, id, tags, largeImageURL
                }))
                if(hits.length === 0) {
                    return Promise.reject(new Error("Check your enter"))
                }
                setHits((state) => [...state, ...images])
            })
            .catch(error => setError(error))
            .finally(() => setIsLoading(false))
    }, [searchObject, currentPage]);

 
    const onLoadMoreButton = () => {
        setCurrentPage(state => (state + 1))
    }

    const handleFormSubmit = query => {
        setSearchObject(query)
        setCurrentPage(1)
        setHits([])
        setError(null)
    }

    const toggleModal = () => {
        setShowModal( !showModal)
    }

    const onModal = ({largeImageURL, tags}) => {
        setLargeImageURL(largeImageURL)
        setTags(tags)
        toggleModal({});
    };

    const renderButtonLoadMore = hits.length > 0 && !isLoading

    // render(){
    //     const {hits, error, isLoading, showModal, tags, largeImageURL} = this.state;
    //     const renderButtonLoadMore = Math.ceil((this.state.currentPage-1)*12/hits.length) === 1 && !isLoading;


    return (
        <AppStyle>
            <SearchBar onSubmit={handleFormSubmit}/>
            {error && <h1>{error.message}</h1>}
            {hits.length > 0 && <ImageGallery showQuery={hits} onClick={onModal}/>}
            {isLoading && <Loader/>}
            {renderButtonLoadMore && <ButtonLoadMore onClick={onLoadMoreButton}/>}
            {showModal && <Modal onClose={toggleModal}>
                <PhotoModal src={largeImageURL} alt={tags}/>
            </Modal>}
        </AppStyle>)

    }


export default App;