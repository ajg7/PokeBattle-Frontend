import styled from "styled-components";

export const StyledButton = styled.div`
	button {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		height: 50px;
		width: 150px;
		background-color: ${({ theme }) => theme.colorThemes.secondary};
		color: ${({ theme }) => theme.colorThemes.white};
		border-radius: 16px;
		font: 20px ${({ theme }) => theme.pokeFont};
		text-transform: ${({ theme }) => theme.cap};

		&:hover {
			background-color: ${({ theme }) => theme.colorThemes.primary};
		}
	}
`;
