import React, { useState } from "react";
import { connect } from "react-redux";
import { makeTeam, deleteTeam, addPokemon, setSelectedPokemon, swapPokemon, updateCurrIndex } from "../store/actions/actions";
import clearButton from "../assets/clearButton.png";
import addButton from "../assets/addButton.png";
import Poke_Ball from "../assets/Poke_Ball.png";


const DropBar = props => {
    const { makeTeam, deleteTeam, addPokemon, setSelectedPokemon, swapPokemon, updateCurrIndex, teamId, team, selectedPokemon } = props;
    const [active, setActive] = useState(false);
    const [isSwapping, setIsSwapping] = useState(false);
    const [pokemonToBeSwapped, setPokemonToBeSwapped] = useState({});
    const [prevPokemon, setPrevPokemon] = useState({});
    const [prevIndex, setPrevIndex] = useState(0);
    const [nextIndex, setNextIndex] = useState(0);
    const [currIndex, setCurrIndex] = useState(0);

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
        setSelectedPokemon({});
        if (isSwapping) {
            setSelectedPokemon(pokemonToBeSwapped)
            swapPokemon(prevPokemon, pokemonToBeSwapped, prevIndex, nextIndex)
            setIsSwapping(false);
        }
    }

    const dragOver = event => {
        event.preventDefault();
        setNextIndex(event.target.id);
        setPrevPokemon({id: event.target.id, name: event.target.alt, img: event.target.src})
    }

    const dragStart = event => { 
        setIsSwapping(true);
        setPokemonToBeSwapped({id: event.target.id, name: event.target.alt, img: event.target.src})
        setPrevIndex(event.target.id);
        setCurrIndex(event.target.id);
    }

    const dragLeave = event => {
        console.log(currIndex)
        updateCurrIndex(currIndex)
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
                                <div className="slot" id={i} onDragOver={dragOver} onDrop={drop} onDragLeave={dragLeave}>
                                    {pokemon ? <img src={pokemon.img ? pokemon.img : Poke_Ball} 
                                                    alt={pokemon.name} 
                                                    id={i} 
                                                    onDragStart={dragStart} 
                                                    draggable={pokemon.img ? "true" : "false"}
                                                    className={pokemon.img ? "pokemon-team-member" : "poke-ball-filler"} /> : null}
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

export default connect(mapStateToProps, { makeTeam, deleteTeam, addPokemon, setSelectedPokemon, swapPokemon, updateCurrIndex })(DropBar);