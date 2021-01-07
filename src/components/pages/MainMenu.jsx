import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { StyledMainMenu } from "../../styles/StyledComponents/styledPages";
import { team, teamMembers } from "../../store/actions";
import { MainHeading, Modal, Team, Button } from "../common";
import { useHistory } from "react-router-dom";
import { deleteAccount } from "../../api"

const MainMenu = props => {

    const history = useHistory();
    // const [modalOpen, setModalOpen] = useState(false);

    // const modalHandler = event => setModalOpen(!modalOpen);

    const { teamData, team, fetchPokemonTeam, fetchTeamMembers } = props;

    useEffect(() => {
        const userId = localStorage.getItem("userId");
        fetchPokemonTeam(userId);
        fetchTeamMembers(10);
    }, [fetchPokemonTeam, fetchTeamMembers])

    const whosThatPokemonHandler = event => history.push("/guess_pokemon");

    const deleteAccountHandler = event => {
        const userId = localStorage.getItem("userId");
        deleteAccount(userId);
        history.push("/");
    }

    const logoutHandler = event => {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        history.push("/");
    }

    return (
        <div>
        {/*modalOpen ? <div onClick={modalHandler}>
            <Modal modalHandler={modalHandler} />
    </div> : null*/}
        <StyledMainMenu>
        <header>
            <MainHeading
            classType={"main-menu-header"}
            text={"Main Menu"}
            />
            <h3 onClick={deleteAccountHandler}>Delete Account</h3>
        </header>
        <section>
            <h3>Make New Team</h3>
            {teamData.map(team => {
                return <Team 
                        name={team.team_name}
                        />
            })}
            {team.map(pokemon => {
                return (
                    <div>
                        <h4>{pokemon.name}</h4>
                        <img src={pokemon.imgURL} alt={pokemon.name} />
                    </div>
                )
            })}
        </section>
        <footer>
        <Button 
            handleClick={logoutHandler}
            isDisabled={false}
            classType={"logout"}
            buttonText={"Logout"}
        />
        </footer>
        </StyledMainMenu>
        </div>
    )
}

export default connect(state => ({
    teamData: state.team.teamData,
    userId: state.team.userId,
    team: state.teamMembers.team
}), {
    fetchPokemonTeam: team.fetchPokemonTeam,
    fetchTeamMembers: teamMembers.fetchTeamMembers
})(MainMenu);