import styled from "styled-components";

export const StyledLandingPage = styled.div`
	padding: ${({ theme }) => theme.globalPadding};

	header {
		display: flex;
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
		border: 3px solid red;
	}

	footer h3 {
		padding: 5px 0;
	}
`;
