import styled from "styled-components";

export const StyledWhosThatPokemon = styled.div`

    .featured-pokemon-img {
        filter: ${props => !props.revealed ? "contrast(5%) brightness(50%)" : "none"}
    }

`