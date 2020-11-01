import styled from "styled-components";

export const StyledCards = styled.div`
    display: flex;
    flex-direction: wrap;
    margin: 10px;
    text-transform: ${({ theme }) => theme.cap};

    .card {
        background-color: transparent;
        width: 205px;
        height: 325px;
        perspective: 1000px;
        padding: 25px;
    }

    .card-inner {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        border-radius: ${({ theme }) => theme.rounded};
    }

    .card-front, .card-back {
        border-radius: ${({ theme }) => theme.rounded};
    }
`