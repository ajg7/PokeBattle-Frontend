import styled from "styled-components";

export const StyledBattlePage = styled.div`
	padding: ${({ theme }) => theme.globalPadding};

	.player-team,
	.challenger-team {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-evenly;
		text-transform: ${({ theme }) => theme.cap};
	}

	.player-team img,
	.challenger-team img {
		height: 100px;
		width: 100px;
		margin: 15px 0;
	}

	.player-team h3,
	.challenger-team h3 {
		text-align: center;
	}

	.player-team div button {
		height: 50px;
		width: 150px;
	}

	.player-team div {
		padding: 10px 0;
	}

	footer .battle-buttons {
		display: flex;
		flex-flow: row wrap;
	}

	footer .battle-buttons div button {
		margin: 10px;
	}
`;
