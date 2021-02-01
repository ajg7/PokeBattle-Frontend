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

	.teams {
		display: flex;
	}

	.team-member {
		padding: 15px 25px 15px 0px;
	}
`;
