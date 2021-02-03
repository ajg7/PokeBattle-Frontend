import styled from "styled-components";

export const StyledArena = styled.div`
	background-color: ${({ backgroundColor }) => backgroundColor};
	height: 100%;
	display: flex;
	flex-flow: column wrap;
	align-items: center;
	justify-content: center;

	.battle {
		display: flex;
		flex-flow: column wrap;
	}

	.battle div {
		margin: 0 25px;
	}

	h3 {
		margin: 20px 0;
		text-align: center;
		color: ${({ backgroundColor }) => {
			switch (backgroundColor) {
				case "#0040FF":
					return "white";
				case "#40826D":
					return "white";
				case "#ca2c92":
					return "white";
				default:
					return "black";
			}
		}};
	}

	img {
		margin: 15px 0;
		height: 200px;
		width: 200px;
	}
`;
