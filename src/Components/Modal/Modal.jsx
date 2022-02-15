import React, {Component} from 'react';
import {createPortal} from "react-dom";
import PropTypes from "prop-types";
import { ModalStyleOverlay, ModalStyle } from "./Modal.styled";

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
    static propTypes = {
        onClose: PropTypes.func.isRequired,
    };

    componentDidMount(){
        window.addEventListener('keydown',this.handleKeyDown)
    }

     componentWillUnmount (){
        window.removeEventListener('keydown',this.handleKeyDown)
    }

    handleKeyDown = event => {
        if(event.code === 'Escape') {
            this.props.onClose()
        }
    }

    handleBackDropClick=event=>{

        if(event.target === event.currentTarget){
            this.props.onClose()
        }
    }

    render(){
        return createPortal(<ModalStyleOverlay onClick={this.handleBackDropClick}>
            <ModalStyle>{this.props.children}</ModalStyle>
        </ModalStyleOverlay>, modalRoot)
    }
}