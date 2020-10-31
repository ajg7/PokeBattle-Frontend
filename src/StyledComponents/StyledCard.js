import styled from "styled-components";

export const StyledCard = styled.div`

display: flex;


    .card {
        background-color: transparent;
        width: 175px;
        height: 225px;
        border: 1px solid #f1f1f1;
        perspective: 1000px;
    }

    .card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.8s;
        transform-style: preserve-3d;
    }

    .flipped .card-inner {
        transform: rotateY(180deg);
    }

    .card-front, .card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
    }

    .card-front {
        background-color: #bbb;
        color: black;
    }

    .card-back {
        background-color: dodgerblue;
        color: white;
        transform: rotateY(180deg);
    }
    
`