import styled from "styled-components";

export const StyledArena = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 400px;
    width: 100%;
    background-color: limegreen;
    margin: 15px 0;

    .player-team-slot, .challenger-team-slot {
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

`