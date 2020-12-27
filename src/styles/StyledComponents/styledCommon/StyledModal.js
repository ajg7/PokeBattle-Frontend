import styled from "styled-components";

export const StyledModal = styled.div`

.modal {
    position: fixed; 
    z-index: 1; 
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%; 
    overflow: auto; 
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4); 
}

.modal-content {
    background-color: #fefefe;
    margin: 15% auto; 
    padding: 20px;
    border: 1px solid #888;
    width: 80%; 
}

.modal-container {
    color: black;
}

img {
    height: 25px;
    width: 25px;
}

.exit-button {
    height: 25px;
    width: 25px;
}


`