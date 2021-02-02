import styled from "styled-components";

export const StyledArena = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 500px;
	width: 100%;
	background-color: #028a0f;
	margin: 25px 0;

	.player-team-slot,
	.challenger-team-slot {
		height: 100px;
		width: 100px;
		border: 5px dotted blue;
		text-align: center;
		margin: 25px 0;
	}

	img {
		height: 100px;
		width: 100px;
	}
`;
