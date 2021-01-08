import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { team } from "../../store/actions";
import { Button, GeneralForm } from "../common";
import editIcon from "../../assets/editIcon.png";
import { StyledTeam } from "../../styles/StyledComponents/styledCommon";

const Team = props => {
    const { name, id } = props;
    const [active, setActive] = useState(false);

    const activeHandler = event => setActive(!active);

    return (
        <StyledTeam>
            <div>
                <h4>{name}</h4>
                <img src={editIcon} alt={"edit team name"} className={"edit-icon"} onClick={activeHandler} />
                {active ? 
                        <div>
                            <GeneralForm
                                placeholder={"Write New Team Name Here"}
                                teamId={id}
                            /> 
                        </div>
                    : null}
            </div>
        
        </StyledTeam>
    )

}

export default Team;