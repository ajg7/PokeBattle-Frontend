import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {connect} from "react-redux";
import { fetchPokemonTeam } from "../store/actions/actions";

const OnDeck = props => {
    const { teamData, teamId, fetchPokemonTeam } = props;

    const history = useHistory();

    const goBackHandler = event => {
        history.goBack()
    }

    useEffect(() => {
        const currTeamId = localStorage.getItem("teamId");
        fetchPokemonTeam(currTeamId);
    },[fetchPokemonTeam])

    return (
        <>
            <h2>Ready to Battle?</h2>
            <div>
                {teamData.map(member => {
                    return (
                        <div>
                        <h3>{member.name}</h3>
                        <h3>{member.type1}</h3>
                        <h3>{member.type2}</h3>
                        <img src={member.imgURL} alt={member.name} />
                        </div>
                    )
                })}
                <button onClick={goBackHandler}>Go Back</button>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        team: state.team,
        teamId: state.teamId,
        teamData: state.teamData
    }
}

export default connect(mapStateToProps, { fetchPokemonTeam })(OnDeck);