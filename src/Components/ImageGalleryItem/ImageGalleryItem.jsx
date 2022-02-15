import PropTypes from "prop-types";
import { ImageGalleryItemStyle, ItemImage } from "./ImageGalleryItem.styled";

const ImageGalleryItem = ({ webformatURL, tags, largeImageURL, onClick, id }) => (
    <ImageGalleryItemStyle key={id}>
        <ItemImage
            src={webformatURL}
            alt={tags}
            onClick={() => onClick({ largeImageURL, tags })}
        />
    </ImageGalleryItemStyle>
);

export default ImageGalleryItem;

ImageGalleryItem.propTypes={
    webformatURL:PropTypes.string.isRequired,
    tags:PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    onClick:PropTypes.func.isRequired,
    id:PropTypes.number

}