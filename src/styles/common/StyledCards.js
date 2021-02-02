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
	padding-top: ${props => (props.page ? "300px" : null)};

	.card {
		background-color: transparent;
		width: 250px;
		height: 375px;
		perspective: 1000px;
		padding: 15px;
	}

	.card-inner {
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
		transition: 0.3s;
		border-radius: ${({ theme }) => theme.rounded};
	}

	.card-front,
	.card-back {
		border-radius: ${({ theme }) => theme.rounded};
	}

	.card-front .image-container img {
		height: 125px;
		width: 125px;
		padding: 15px;
	}

	.card-front .pokemon-data-container .pokemon-identification {
		padding: 15px;
		display: flex;
		flex-flow: column wrap;
		align-items: flex-start;
	}

	.card-front .pokemon-data-container .pokemon-identification h3 {
		margin: 5px 0;
	}

	.card-front .pokemon-data-container button {
		margin: 15px 0;
	}

	.card-back .pokemon-card-back {
		padding: 25px;
	}

	.card-back .pokemon-card-back .pokemon-stats-back h4,
	.card-back .pokemon-card-back .pokemon-entry-back p {
		padding: 15px 0;
	}

	.card-inner .card-front button {
		height: 30px;
		width: 150px;
		border-radius: 16px;
		background-color: ${({ theme }) => theme.colorThemes.secondary};
		color: ${({ theme }) => theme.colorThemes.white};
		font: 20px ${({ theme }) => theme.pokeFont};
	}
`;
