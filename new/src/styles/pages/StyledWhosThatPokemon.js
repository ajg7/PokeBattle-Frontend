import styled from "styled-components";

export const StyledWhosThatPokemon = styled.div`
	.featured-pokemon-img {
		filter: ${props => (!props.revealed ? "contrast(100%) brightness(0%)" : "none")};
	}
`;
