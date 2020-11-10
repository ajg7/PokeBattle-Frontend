import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { makeTeam, deleteTeam } from "../store/actions/actions";
import clearButton from "../assets/clearButton.png";
import addButton from "../assets/addButton.png";
import Poke_Ball from "../assets/Poke_Ball.png";


const DropBar = props => {
    const { makeTeam, deleteTeam, teamId, userId } = props;
    const [active, setActive] = useState(false);

    // const allowDrop = event => {
    //     event.preventDefault();
    // }

    // const drag = event => {

    // }

    // const drop = event => {
    //     event.preventDefault();
        
    // }

    const makeTeamHandler = event => {
        setActive(true);
        makeTeam();
    }

    const deleteTeamHandler = event => {
        setActive(false);
        deleteTeam(teamId)
    }

    return (
        <>
            <span>
                <img src={Poke_Ball} alt="create team button" className="create-button" onClick={makeTeamHandler} />
            </span>
            {active ? <div className="slot-container">
                        <img src={clearButton} alt="clear team button" className="clear-button" onClick={deleteTeamHandler} />
                        <div className="slot">
                        </div>
                        <div className="slot">
                        </div>
                        <div className="slot">
                        </div>
                        <div className="slot">
                        </div>
                        <div className="slot">
                        </div>
                        <div className="slot">
                        </div>
                        <img src={addButton} alt="make team button" className="add-button" />
                      </div> : null}
        </>
    )
}

const mapStateToProps = state => {
    return {
        teamId: state.teamId,
        userId: state.userId
    }
}

export default connect(mapStateToProps, { makeTeam, deleteTeam })(DropBar);