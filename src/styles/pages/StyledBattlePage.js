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

	.player-team div button {
		height: 50px;
		width: 150px;
	}
`;
