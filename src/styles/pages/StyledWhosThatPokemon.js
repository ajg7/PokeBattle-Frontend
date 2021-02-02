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

	header {
		display: flex;
		justify-content: space-between;
	}

	header h3:nth-child(2) {
		font-size: 40px;
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
