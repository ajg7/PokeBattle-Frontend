import React, { useState } from "react";
import { connect } from "react-redux";
import { makeTeam, deleteTeam, addPokemon, setSelectedPokemon, swapPokemon, updateCurrIndex, setIsAdding, setIsSwapping, saveTeam } from "../store/actions/actions";
import { useHistory } from "react-router-dom";
import clearButton from "../assets/clearButton.png";
import addButton from "../assets/addButton.png";
import Poke_Ball from "../assets/Poke_Ball.png";


const DropBar = props => {
    const { makeTeam, deleteTeam, addPokemon, 
            setSelectedPokemon, isAdding, isSwapping, 
            setIsSwapping, setIsAdding, swapPokemon, 
            updateCurrIndex, teamId, team, selectedPokemon, 
            saveTeam } = props;
    const history = useHistory();
    const [pokemonToBeSwapped, setPokemonToBeSwapped] = useState({});
    const [prevPokemon, setPrevPokemon] = useState({});
    const [prevIndex, setPrevIndex] = useState(0);
    const [nextIndex, setNextIndex] = useState(0);
    const [currIndex, setCurrIndex] = useState(0);

    const deleteTeamHandler = event => {
        deleteTeam(teamId)
    }

    const saveTeamHandler = async event => {
        makeTeam()
        await saveTeam(team)
        //Add confirmation alert
        history.push("/pokemon_list/deck") 
    }

    const drop = event => {
        const index = event.target.id;
        if (isAdding) {
            addPokemon(selectedPokemon, index);
            setSelectedPokemon({});
        }
        if (isSwapping) {
            setSelectedPokemon(pokemonToBeSwapped);
            swapPokemon(prevPokemon, pokemonToBeSwapped, prevIndex, nextIndex);
        }
    }

    const dragOver = event => {
        event.preventDefault();
        setNextIndex(event.target.id);
        setPrevPokemon({id: event.target.id, name: event.target.alt, img: event.target.src, number: +event.target.getAttribute("number")});
    }

    const dragStart = event => { 
        setIsAdding(false, true);
        setPokemonToBeSwapped({id: event.target.id, name: event.target.alt, img: event.target.src, number: +event.target.getAttribute("number")})
        setPrevIndex(event.target.id);
        setCurrIndex(event.target.id);
    }

    const dragLeave = event => updateCurrIndex(currIndex);


    return (
        <div>
            <div className="slot-container">
                <img src={clearButton} alt="clear team button" className="clear-button" onClick={deleteTeamHandler} />
                {team.map((pokemon, i) => {
                    return (
                        <div className="slot" id={i} onDragOver={dragOver} onDrop={drop} onDragLeave={dragLeave} >
                            {pokemon ? <img src={pokemon.img ? pokemon.img : Poke_Ball} 
                                            alt={pokemon.name} 
                                            id={i}
                                            number={pokemon.number} 
                                            onDragStart={dragStart}
                                            draggable={pokemon.img ? "true" : "false"}
                                            className={pokemon.img ? "pokemon-team-member" : "poke-ball-filler"} /> 
                                    : null}
                        </div>
                    )
                })}
                <img src={addButton} alt="make team button" className="add-button" onClick={saveTeamHandler} />
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        teamId: state.teamId,
        userId: state.userId,
        selectedPokemon: state.selectedPokemon,
        isAdding: state.isAdding,
        isSwapping: state.isSwapping,
        team: state.team
    }
}

export default connect(mapStateToProps, { makeTeam, deleteTeam, addPokemon, setSelectedPokemon, swapPokemon, updateCurrIndex, setIsAdding, setIsSwapping, saveTeam })(DropBar);