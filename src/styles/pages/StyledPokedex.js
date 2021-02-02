import styled from "styled-components";

export const StyledPokedex = styled.div`
	padding: ${({ theme }) => theme.globalPadding};
	text-transform: ${({ theme }) => theme.cap};

	header {
		display: flex;
		flex-flow: column wrap;
		align-items: center;
	}

	header form input {
		margin: 15px;
		width: 300px;
	}

	.search-buttons {
		display: flex;
		flex-flow: row wrap;
		margin-bottom: 15px;
	}

	.search-buttons div button {
		margin: 0 10px;
	}

	.filters select {
		margin: 0 10px;
	}

	.nickname-form form {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		margin: 15px 0;
	}

	.nickname-form form .form-buttons {
		display: flex;
		flex-flow: row wrap;
		margin: 0 15px;
	}

	.nickname-form form .form-buttons div button {
		margin: 0 10px;
	}

	.team {
		padding: 25px;
		display: flex;
		flex-flow: row wrap;
		justify-content: space-evenly;
	}

	.team h3 {
		text-align: center;
		margin: 10px 0;
	}

	.team img:nth-child(1),
	.team img:nth-child(3) {
		height: 20px;
		width: 20px;
	}

	.team img:nth-child(2) {
		height: 85px;
		width: 85px;
	}

	footer nav {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-evenly;
	}
`;
