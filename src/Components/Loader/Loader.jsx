import React from 'react';
import { Circles } from "react-loader-spinner";
import { LoaderStyle } from "./Loader.styled";

const Loader = () => {
    return (
        <LoaderStyle>
            <Circles color="#82a0aa90" height={100} width={100}/>
            Loading...
        </LoaderStyle>
    );
};

export default Loader;