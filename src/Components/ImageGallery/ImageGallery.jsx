import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import PropTypes from "prop-types";
import { ImageGalleryStyle } from "./ImageGallery.styled";

export const ImageGallery = ({showQuery,onClick}) => {
    return (
        <ImageGalleryStyle>
            {showQuery.map(({webformatURL, id, tags,largeImageURL}) => (
                <ImageGalleryItem
                    key={id}
                    tags={tags}
                    webformatURL={webformatURL}
                    largeImageURL={largeImageURL}
                    onClick={onClick}
                />
            ))}
        </ImageGalleryStyle>
    )
}


ImageGallery.propTypes={
    showQuery:PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ImageGallery;