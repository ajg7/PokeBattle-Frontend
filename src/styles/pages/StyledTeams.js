import styled from "styled-components";

export const StyledTeams = styled.div`
	padding: ${({ theme }) => theme.globalPadding};

	@media (max-width: 450px) {
		footer div {
			margin: 10px 0;
		}

		.team-buttons {
			margin: 25px 0;
		}
	}

	h2 {
		font-size: 75px;
	}

	.teams-page header {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-evenly;
	}

	.team-buttons {
		display: flex;
		flex-flow: row wrap;
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

	.team-member img {
		height: 85px;
		width: 85px;
	}

	section .team-buttons img {
		height: 15px;
		width: 15px;
	}

	.add-button {
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
		flex-flow: row wrap;
		justify-content: flex-end;
		margin: 10px;
	}

	footer div button {
		margin: 0 10px;
	}
`;
