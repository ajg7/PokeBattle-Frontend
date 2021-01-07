import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { team, battle } from "../../store/actions";
import { StyledCards } from "../../styles/StyledComponents/styledCommon/StyledCards";
import { Pokemon } from "../common";
import editIcon from "../../assets/editIcon.png"
import { Button } from "../common";

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
            <StyledCards>
                {teamData.map(member => {
                    return (
                            <>
                                <Pokemon 
                                key={member.id}
                                id={member.id}
                                name={member.name}
                                number={member.number}
                                type1={member.type1}
                                type2={member.type2}
                                imgURL={member.imgURL}
                                height={member.height}
                                weight={member.weight}
                                entry={member.entry}
                                habitat={member.habitat}
                                legendary={member.legendary}
                                mythical={member.mythical}
                                ancient={member.ancient}
                                />
                                <img src={editIcon} alt="edit-nickname" className="edit-icon" />
                            </>
                    )
                })}
            </StyledCards>
            <Button 
            handleClick={goBackHandler}
            isDisabled={false}
            classType="go back button"
            buttonText={"Go Back"} 
            />
            <Button 
            handleClick={battlePageHandler}
            isDisabled={false}
            classType="go to battle page"
            buttonText={"Battle!"} 
            />
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

export default connect(state => ({
    team: state.team,
    teamId: state.teamId,
    teamData: state.teamData,
    challengerTeam: state.challengerTeam
}), { 
    fetchPokemonTeam: team.fetchPokemonTeam, 
    makeChallengerTeam: battle.makeChallengerTeam 
})(OnDeck);