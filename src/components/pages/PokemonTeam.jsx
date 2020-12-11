import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const PokemonTeam = ({ pokemon, pokemonTeam, pokemonDataObject }) => {
    const history = useHistory();
    const [pokemonObject, setPokemonObject] = useState(pokemonDataObject);
    const [pokemonFetchData, setPokemonFetchData] = useState([]);
    const [active, setActive] = useState(false);
    const [id, setId] = useState(0);
    const [nickName, setNickName] = useState("");
    

    useEffect(() => {
        axios.get("https://pokemon-server-ajg7.herokuapp.com/pokemon_team_members")
            .then(response => {
                console.log(response.data)
                const data = response.data;
                setPokemonFetchData(data)
            })
            .catch(error => {
                console.log(error);
            })
    }, [pokemonTeam, pokemon, pokemonObject])


    const goBackHandler = event => {
        history.push("/")
    }

    const removePokemonHandler = event => {
        const id = event.target.value;
        setId(id)
        axios.delete(`https://pokemon-server-ajg7.herokuapp.com/pokemon_team_members/${id}`)
            .then(response => {
                console.log(response)
                history.go(0);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const changeHandler = event => {
        console.log(event.target.value)
        setNickName(event.target.value)
    }

    const editNameHandler = event => {
        setActive(true)
        setId(event.target.value)
    
    }

    const battleHandler = event => {
        history.push("/battle")
    }

    const exitHandler = event => {
        setActive(false)
    }

    const nickNameSubmit = async event => {
        event.preventDefault();
        //Make sure to be this class in its own file
        class Changes {
            constructor(Name) {
                this.Name = Name;
            }
        }
        const nickNameSubmission = new Changes(nickName)
        await axios.put(`https://pokemon-server-ajg7.herokuapp.com/pokemon_team_members/${id}`, nickNameSubmission)
        history.go(0)
    }

    return(
        <div className="pokemon-team-page">
            <div className="pokemon-team">
                {pokemonFetchData.map(individualPokemon => {
                    return (
                        <>
                            <div className="pokemon-team-members">
                                <button onClick={editNameHandler} value={individualPokemon.id}>Add Nickname</button>
                                {
                                    // eslint-disable-next-line eqeqeq
                                    active && id == individualPokemon.id ? 
                                        <>
                                        <form onSubmit={nickNameSubmit}>
                                            <input 
                                            type="textbox" 
                                            placeholder={individualPokemon.Name}
                                            onChange={changeHandler}
                                            />
                                            <button>Change</button>
                                            <button onClick={exitHandler}>Exit</button>
                                        </form> 
                                        </>
                                    : 
                                        <p>{individualPokemon.Name}</p>
                                }
                                <img src={individualPokemon.ImgUrl} alt={individualPokemon.Name} />
                                <p>{individualPokemon.Type1}</p>
                                <p>{individualPokemon.Type2}</p>
                                <p>#{individualPokemon.PokemonNumber}</p>
                                <button onClick={removePokemonHandler} value={individualPokemon.id}>Remove From Team</button>
                            </div>
                        </>
                        )
                })}
            </div>
            <button onClick={goBackHandler} className="go-back-button">Go Back</button>
            <button onClick={battleHandler} className="battle-button">Battle!</button>
        </div>
    )
}
 
/*
const mapStateToProps = state => {
    return {
        pokemon: state.pokemon,
        pokemonTeam: state.pokemonTeam,
        pokemonDataObject: state.pokemonDataObject
    }
}*/


export default PokemonTeam;