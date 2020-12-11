import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { fetchChallengerTeam, fetchPokemonTeam, makeChallengerTeam } from "../../store/actions/actions";
import { StyledOnDeck } from "../../styles/StyledComponents/StyledOnDeck";
import editIcon from "../../assets/editIcon.png"

const OnDeck = props => {
    const { teamData, fetchPokemonTeam, makeChallengerTeam } = props;

    const history = useHistory();

    const goBackHandler = event => {
        history.goBack()
    }
    
    const editNameHandler = event => {
        console.log("It works!")
    }

    const battlePageHandler = event => {
        makeChallengerTeam();
        history.push("/battle");
    }

    useEffect(() => {
        const currTeamId = localStorage.getItem("teamId");
        fetchPokemonTeam(currTeamId);
    },[fetchPokemonTeam])

    return (
        <>
            <h2>Ready to Battle?</h2>
            <StyledOnDeck>
                {teamData.map(member => {
                    return (
                            <div className="cards">
                                <div>
                                    <img src={member.imgURL} alt={member.name} />
                                </div> 
                                <h3>{member.pokemon_Id}</h3>
                                <span className="pokemon-name">
                                    <img src={editIcon} alt="edit name icon" onClick={editNameHandler} />
                                    <h2>{member.nickname ? member.nickname : member.name}</h2>
                                </span>
                                <h3>{member.type1}</h3>
                                <h3>{member.type2}</h3>
                            </div>
                    )
                })}
            </StyledOnDeck>
            <button onClick={goBackHandler}>Go Back</button>
            <button onClick={battlePageHandler}>Battle!</button>
        </>
    )
}

const mapStateToProps = state => {
    return {
        team: state.team,
        teamId: state.teamId,
        teamData: state.teamData,
        challengerTeam: state.challengerTeam
    }
}

export default connect(mapStateToProps, { fetchPokemonTeam, makeChallengerTeam })(OnDeck);