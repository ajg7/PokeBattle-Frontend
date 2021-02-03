import styled from "styled-components";

export const StyledRecords = styled.div`
	padding: ${({ theme }) => theme.globalPadding};
	text-transform: ${({ theme }) => theme.cap};

	@media (max-width: 450px) {
		h3 {
			margin: 10px;
		}
	}

	.team {
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
		margin: 10px 0;
	}

	.team-members {
		padding: 15px 25px 15px 0px;
		text-align: center;
	}

	.team-members img {
		height: 85px;
		width: 85px;
	}

	header {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-evenly;
	}

	section {
		display: flex;
		flex-flow: column wrap;
	}

	section h3 {
		padding: 10px 0;
	}

	footer {
		display: flex;
		justify-content: center;
	}
`;
