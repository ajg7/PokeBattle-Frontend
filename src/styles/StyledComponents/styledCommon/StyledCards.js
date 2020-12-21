import styled from "styled-components";

export const StyledCards = styled.div`
    * {
        font-family: "pokemon-font", monospace;
    }

    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    text-transform: ${({ theme }) => theme.cap};
    padding: 50px;
    padding-top: ${props => props.page ? "300px" : null};

    .card {
        background-color: transparent;
        width: 250px;
        height: 375px;
        perspective: 1000px;
        margin: 15px;
    }

    .card-inner {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        border-radius: ${({ theme }) => theme.rounded};
    }

    .card-front, .card-back {
        border-radius: ${({ theme }) => theme.rounded};
    }
    
    .card-front .image-container img {
        height: 125px;
        width: 125px;
    }

    .edit-icon {
        height: 15px;
        width: 15px;
    }
`