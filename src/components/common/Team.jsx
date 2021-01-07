import React, { useEffect } from "react";
import { connect } from "react-redux";
import { team } from "../../store/actions";
import { Button } from "../common";
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