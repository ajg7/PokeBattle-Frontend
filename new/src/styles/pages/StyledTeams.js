import styled from "styled-components";

export const StyledTeams = styled.div`
	padding: ${({ theme }) => theme.globalPadding};

	.teams-page header {
		display: flex;
		justify-content: space-evenly;
	}

	.team-buttons {
		display: flex;
	}

	.team-buttons h3 {
		padding: 10px;
	}

	.teams {
		display: flex;
		flex-flow: row wrap;
	}

	.team-member {
		padding: 15px 25px 15px 0px;
	}

	section .team-buttons img {
		height: 15px;
		width: 15px;
	}

	.records {
		display: flex;
		flex-flow: column wrap;
		justify-content: center;
	}

	footer {
		display: flex;
		flex-flow: row-reverse wrap;
		margin: 10px;
	}

	footer div button {
		margin: 0 10px;
	}
`;
