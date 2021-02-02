import styled from "styled-components";

export const StyledBattlePage = styled.div`
	padding: ${({ theme }) => theme.globalPadding};

	header {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
	}

	.main-content {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
	}

	footer {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-evenly;
	}

	/* .main-content {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
	}

	header {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
	}

    .player-team {
		display: flex;
		flex-flow: column wrap;
		text-transform: ${({ theme }) => theme.cap};
	}

    .challenger-team {
        display: flex;
        flex-flow: column wrap;
        align-items: flex-end;
    }

    header h3:nth-child(2) {
        font-size: 40px;
    }

    .battle-buttons {
        display: flex;
        flex-flow: row wrap;
        margin: 50px 0;
        justify-content: space-evenly;
    } */

	/*
	header {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
        margin-bottom: 25px;
	}

    

	

	.player-team img,
	.challenger-team img {
		height: 100px;
		width: 100px;
		margin: 15px 0;
	}

	.player-team div {
		padding: 10px 0;
	}

	footer .battle-buttons {
		display: flex;
		flex-flow: row wrap;
	}

	footer .battle-buttons div button {
		margin: 10px;
	}
    */
`;
