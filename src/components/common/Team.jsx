import React, { useEffect } from "react";
import addButton from "../../assets/addButton.png";
import { StyledTeam } from "../../styles/StyledComponents/styledCommon";

const Team = props => {
    const { name } = props;

    return (
        <StyledTeam>
            <div>
                <h4>{name}</h4>
                
                
            </div>
        
        </StyledTeam>
    )

}

export default Team;