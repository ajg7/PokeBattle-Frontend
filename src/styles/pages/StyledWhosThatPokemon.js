import styled, { keyframes } from "styled-components";

const enter = keyframes`
	from {
		height: 0px;
		width: 0px;
	}

	to {
		height: 200px;
		width: 200px;
	}
`;

export const StyledWhosThatPokemon = styled.div`
	padding: ${({ theme }) => theme.globalPadding};

	@media (max-width: 400px) {
		footer div {
			margin: 10px 0;
		}
	}

	header {
		display: flex;
		justify-content: space-between;
	}

	header h2 {
		font-size: 75px;
	}
	header h3 {
		font-size: 75px;
	}

	.featured-pokemon-img {
		filter: ${props => (!props.revealed ? "contrast(100%) brightness(0%)" : "none")};
		animation-name: ${enter};
		animation-duration: 2s;
	}

	section {
		display: flex;
		flex-flow: column wrap;
		align-items: center;
	}

	section > *,
	section form label input {
		margin: 10px 0;
	}

	section .whos-that-pokemon {
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
	}

	section .whos-that-pokemon div {
		display: flex;
		flex-flow: column wrap;
		font-family: "PokeLogo";
		font-size: 75px;
	}

	section form label input {
		width: 100%;
	}

	section div {
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
	}

	section div {
		margin: 10px;
	}

	section img {
		height: 200px;
		width: 200px;
	}

	section p {
		text-transform: ${({ theme }) => theme.cap};
	}

	footer {
		display: flex;
		flex-flow: row-reverse wrap;
		justify-content: flex-end;
		margin: 25px 0;
	}

	footer div button {
		margin: 0 10px;
	}
`;
