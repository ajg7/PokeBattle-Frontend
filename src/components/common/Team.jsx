import React from "react";
import addButton from "../../assets/addButton.png";
import { StyledTeam } from "../../styles/StyledComponents/styledCommon";

const Team = props => {

    return (
        <StyledTeam>
            <div>
                <img src={addButton} alt="make new team" />
                <h4>New Team</h4>
            </div>
        
        </StyledTeam>
    )

}

export default Team;