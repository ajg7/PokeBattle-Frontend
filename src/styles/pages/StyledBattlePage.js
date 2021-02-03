import styled from "styled-components";

export const StyledBattlePage = styled.div`
	padding: ${({ theme }) => theme.globalPadding};
	text-transform: ${({ theme }) => theme.cap};

	header {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
		margin: 25px 0;
	}

	.main-content {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
		margin: 25px 0;
	}

	.player-team,
	.challenger-team {
		display: flex;
		flex-flow: column wrap;
		justify-content: space-around;
		align-items: center;
	}

	.player-team div > *,
	.challenger-team div > * {
		margin: 5px 0;
	}

	footer {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-evenly;
		margin: 25px 0;
	}

	footer select option {
		height: 25px;
	}

	.arena {
		width: 75%;
	}

	img {
		height: 100px;
		width: 100px;
	}
`;
