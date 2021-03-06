import styled from "styled-components";

export const StyledButton = styled.div`
	button {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		height: 50px;
		width: 150px;
		background-color: ${({ theme }) => theme.colorThemes.quaternary};
		color: ${({ theme }) => theme.colorThemes.tertiary};
		border-radius: 16px;
		text-transform: ${({ theme }) => theme.cap};

		&:hover {
			background-color: ${({ theme }) => theme.colorThemes.tertiary};
			color: ${({ theme }) => theme.colorThemes.quaternary};
		}
	}
`;
