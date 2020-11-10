import styled from "styled-components";

export const StyledBar = styled.div`
    background-color: red;
    height: 25%;
    padding: 50px 0;
    div {
        display: flex;
        justify-content: space-evenly;
    }
    .clear-button, .add-button {
        height: 50px;
        width: 50px;
    }

    .slot{
        height: 125px;
        width: 125px;
        border: 3px dotted black;
    }

`