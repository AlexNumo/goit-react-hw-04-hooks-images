import styled from "styled-components";


export const ModalStyleOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  align-content: center; 
  justify-content: center; 
  overflow: hidden; 
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 2;
`


export const ModalStyle = styled.div`
  max-width: calc(75% - 48px);
  max-height: calc(75% - 88px);
  margin-bottom: 200px;
`



