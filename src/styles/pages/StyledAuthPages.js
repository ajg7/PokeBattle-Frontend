import styled from "styled-components";

export const StyledAuthPages = styled.div`
	padding: ${({ theme }) => theme.globalPadding};

	header {
		display: flex;
		justify-content: space-evenly;
	}

	header nav {
		display: flex;
	}

	header nav h2 {
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
