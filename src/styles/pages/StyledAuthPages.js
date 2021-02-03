import styled from "styled-components";

export const StyledAuthPages = styled.div`
	padding: ${({ theme }) => theme.globalPadding};

	@media (max-width: 450px) {
		h1,
		header nav {
			margin: 10px 0;
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

	header nav {
		display: flex;
		flex-flow: row wrap;
	}

	header nav h3 {
		margin: 0 10px;
	}

	header nav a {
		color: #000000;
		text-decoration: none;
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
