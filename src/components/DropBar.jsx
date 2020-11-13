import React, { useState } from "react";
import { connect } from "react-redux";
import { makeTeam, deleteTeam, addPokemon, setSelectedPokemon, swapPokemon } from "../store/actions/actions";
import clearButton from "../assets/clearButton.png";
import addButton from "../assets/addButton.png";
import Poke_Ball from "../assets/Poke_Ball.png";


const DropBar = props => {
    const { makeTeam, deleteTeam, addPokemon, setSelectedPokemon, swapPokemon, teamId, team, selectedPokemon } = props;
    const [active, setActive] = useState(false);
    const [isSwapping, setIsSwapping] = useState(false);
    const [pokemonToBeSwapped, setPokemonToBeSwapped] = useState({});

    const makeTeamHandler = event => {
        setActive(true);
        makeTeam();
    }

    const deleteTeamHandler = event => {
        setActive(false);
        deleteTeam(teamId)
    }

    const drop = event => {
        const index = event.target.id;
        addPokemon(selectedPokemon, index);
        setSelectedPokemon();
        if (isSwapping) {
            swapPokemon(pokemonToBeSwapped, index)
            setIsSwapping(false);
        }
    }

    const dragOver = event => event.preventDefault();

    const dragStart = event => {
        const pokemonObj = {id: event.target.id, name: event.target.alt, img: event.target.src}
        setIsSwapping(true);
        setPokemonToBeSwapped(pokemonObj)
    }

    return (
        <>
            <span>
                <img src={Poke_Ball} alt="create team button" className="create-button" onClick={makeTeamHandler} />
            </span>
            {active ? <div className="slot-container">
                        <img src={clearButton} alt="clear team button" className="clear-button" onClick={deleteTeamHandler} />
                        {team.map((pokemon, i) => {
                            return (
                                <div className="slot" id={i} onDragOver={dragOver} onDrop={drop}>
                                    {pokemon ? <img src={pokemon.img} alt={pokemon.name} id={i} onDragStart={dragStart} /> : null}
                                </div>
                            )
                        })}
                        <img src={addButton} alt="make team button" className="add-button" />
                      </div> : null}
        </>
    )
}

const mapStateToProps = state => {
    return {
        teamId: state.teamId,
        userId: state.userId,
        selectedPokemon: state.selectedPokemon,
        team: state.team
    }
}

export default connect(mapStateToProps, { makeTeam, deleteTeam, addPokemon, setSelectedPokemon, swapPokemon })(DropBar);