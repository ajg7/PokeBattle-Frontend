import styled from "styled-components";

export const StyledBar = styled.div`
    background-color: red;
    padding: 50px 0;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 1;

    .slot-container{
        display: flex;
        justify-content: space-evenly;
    }

    .clear-button, .add-button, .create-button {
        height: 50px;
        width: 50px;
    }

    .slot{
        height: 125px;
        width: 125px;
        border: 3px dotted black;
    }

`