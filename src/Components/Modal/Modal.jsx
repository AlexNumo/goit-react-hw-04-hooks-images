import {useEffect} from 'react';
import {createPortal} from "react-dom";
import { ModalStyleOverlay, ModalStyle } from "./Modal.styled";

const modalRoot = document.querySelector('#modal-root');

 const Modal = ({onClose, children}) => {

    useEffect(() =>{
        const handleKeyDown = event => {
            if(event.code === 'Escape'){
                onClose();
            }
        }
            window.addEventListener('keydown',handleKeyDown)
            return() => {
            window.removeEventListener('keydown',handleKeyDown)
        }
    }, [onClose]);

    const handleBackDropClick=(event)=>{
        if(event.target === event.currentTarget){
            onClose()
        }
    }

        return createPortal(<ModalStyleOverlay onClick={handleBackDropClick}>
            <ModalStyle>{children}</ModalStyle>
        </ModalStyleOverlay>, modalRoot)
    }

export default Modal;