import styled from "styled-components";

export const StyledAuthPages = styled.div`
	padding: ${({ theme }) => theme.globalPadding};

	@media (max-width: 450px) {
		header h1 {
			font-size: 75px;
		}
	}

	h1 {
		font-size: 100px;
	}

	header {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-evenly;
	}

	footer p {
		margin: 15px 0;
	}
`;

export const StyledAuthForm = styled.div`
	@media (max-width: 450px) {
		form label,
		form {
			display: flex;
			flex-flow: column wrap;
			align-items: flex-start;
			margin: 0;
		}
		.auth-buttons {
			display: flex;
			flex-flow: column wrap;
		}

		.auth-buttons div {
			margin: 10px 0;
		}
	}

	form {
		display: flex;
		flex-flow: column wrap;
	}
	form label,
	form p {
		display: flex;
		flex-flow: column wrap;
		align-items: center;
		margin: 10px 0;
	}

	form label input {
		margin: 10px 0;
	}

	.auth-buttons {
		display: flex;
		justify-content: center;
	}

	.auth-buttons div button {
		margin: 0 10px;
	}
`;
