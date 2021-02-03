import styled, { keyframes } from "styled-components";

const enter = keyframes`
	from {
		transform: translateX(500%);
	}
	
	to {
		transform: translateX(0%);
	}
`;

export const StyledLandingPage = styled.div`
	padding: ${({ theme }) => theme.globalPadding};
	font-family: "PokeLogo";

	@media (max-width: 450px) {
		header h1 {
			margin: 15px 0;
		}
		header nav {
			display: flex;
			flex-flow: column wrap;
		}

		header nav div {
			margin: 10px 0;
		}
	}

	button {
		font-family: "ButtonText";
	}

	header {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-evenly;
		align-items: center;
	}

	header nav {
		display: flex;
	}

	header nav div button {
		margin: 0 10px;
	}

	section {
		display: flex;
		justify-content: center;
	}

	section img {
		height: 250px;
		width: 250px;
		margin: 25px 0;
		padding: 15px;
		animation-name: ${enter};
		animation-duration: 2s;
	}

	footer h3 {
		padding: 5px 0;
	}
`;
