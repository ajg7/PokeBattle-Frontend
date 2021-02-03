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
	}

	img {
		margin: 15px 0;
		height: 150px;
		width: 150px;
	}

	/* display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 800px;
	background-color: #028a0f;
	margin: 25px 0;

	h3 {
		padding: 25px 0;
		text-align: center;
		font-size: 40px;
	}

	img {
		height: 100px;
		width: 100px;
	}

	.player-team-slot,
	.challenger-team-slot {
		height: 100px;
		width: 100px;
		border: 5px dotted blue;
		text-align: center;
		margin: 25px 0;
	}

	.battle {
		display: flex;
		flex-flow: column wrap;
	}

	.battle img {
		margin: 20px 0;
	} */
`;
