import styled from "styled-components";

export const PokemonCardStyledComponent = styled.div`

    .pokemon-cards {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin: 25px 0;
    }
    .pokemon-card {
        width: 75%;
        padding: 25px;
        text-align: center;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        &:hover {
            box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
        }
    }

`