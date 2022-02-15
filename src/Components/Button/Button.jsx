import React from 'react';
import PropTypes from 'prop-types';
import { ButtonLoad } from "./Button.styled";

const loadMore = ({onClick}) => {
    return (
        <ButtonLoad type='button' onClick={onClick}>Load More</ButtonLoad>
    );
};


loadMore.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default loadMore;