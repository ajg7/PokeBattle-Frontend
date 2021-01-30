import styled from "styled-components";

export const StyledLandingPage = styled.div`
	padding: 25px;

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
		border: 3px solid red;
		margin: 25px 0;
		padding: 15px;
	}

	footer h3 {
		padding: 5px 0;
	}
`;
