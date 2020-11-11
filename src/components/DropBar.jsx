import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { makeTeam, deleteTeam } from "../store/actions/actions";
import clearButton from "../assets/clearButton.png";
import addButton from "../assets/addButton.png";
import Poke_Ball from "../assets/Poke_Ball.png";


const DropBar = props => {
    const { makeTeam, deleteTeam, teamId, userId, selectedPokemon } = props;
    const [active, setActive] = useState(false);
    const [img, setImg] = useState("");
    const [name, setName] = useState("");
    const [id, setId] = useState(null);

    const makeTeamHandler = event => {
        setActive(true);
        makeTeam();
    }

    const deleteTeamHandler = event => {
        setActive(false);
        deleteTeam(teamId)
    }

    const drop = event => {
        
    }

    const dragOver = event => event.preventDefault();

    return (
        <>
            <span>
                <img src={Poke_Ball} alt="create team button" className="create-button" onClick={makeTeamHandler} />
            </span>
            {active ? <div className="slot-container">
                        <img src={clearButton} alt="clear team button" className="clear-button" onClick={deleteTeamHandler} />
                        <div className="slot" onDragOver={dragOver} onDrop={drop}>
                            
                        </div>
                        <div className="slot" onDragOver={dragOver} onDrop={drop}>
                        </div>
                        <div className="slot" onDragOver={dragOver} onDrop={drop}>
                        </div>
                        <div className="slot" onDragOver={dragOver} onDrop={drop}>
                        </div>
                        <div className="slot" onDragOver={dragOver} onDrop={drop}>
                        </div>
                        <div className="slot" onDragOver={dragOver} onDrop={drop}>
                        </div>
                        <img src={addButton} alt="make team button" className="add-button" />
                      </div> : null}
        </>
    )
}

const mapStateToProps = state => {
    return {
        teamId: state.teamId,
        userId: state.userId,
        selectedPokemon: state.selectedPokemon
    }
}

export default connect(mapStateToProps, { makeTeam, deleteTeam })(DropBar);