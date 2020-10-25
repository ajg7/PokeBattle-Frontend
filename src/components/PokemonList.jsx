import React, { useState, useEffect } from "react";
import axios from "axios";
// import { connect } from "react-redux";
// import { fetchPokemonList } from "../store/actions"
import Pokemon from "./Pokemon";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import "../css/styles.css";


const PokemonList = props => {
    // const { pokemon, fetchPokemonList } = props;
    // const [currentList, setCurrentList] = useState("https://pokemon-server-ajg7.herokuapp.com/pokemon");
    // const [name, setName] = useState("");
    // const [type1, setType1] = useState("");
    // const [type2, setType2] = useState("");
    // const [imgURL, setImgURL] = useState("");
    // const [number, setNumber] = useState(0);
    // const [height, setHeight] = useState(0);
    // const [weight, setWeight] = useState(0);
    // const [entry, setEntry] = useState("");
    // const [habitat, setHabitat] = useState("");
    // const [legendary, setLegendary] = useState(false);
    // const [mythical, setMythical] = useState(false);
    // const [ancient, setAncient] = useState(false);
    const [pokemonData, setPokemonData] = useState([])
    
    
    // useEffect(() => {
    //     fetchPokemonList(currentList);
    // }, [currentList, fetchPokemonList])


    useEffect(() => {
        axiosWithAuth().get("https://pokemon-server-ajg7.herokuapp.com/pokemon")
            .then(response => {
                console.log(response.data)
                setPokemonData(response.data)
            //     const data = response.data;
            //     setName(data.name)
            // setType1(data.type1)
            // setType2(data.type2)
            // setImgURL(data.imgURL)
            // setNumber(data.number)
            // setHeight(data.height)
            // setWeight(data.weight)
            // setWeight(data.entry)
            // setHabitat(data.habitat)
            // setLegendary(data.legendary)
            // setMythical(data.mythical)
            // setAncient(data.ancient)
            //     console.log(data)
            })
    }, [])

    return(
        <>
            {pokemonData.map(pokemon => {
                console.log(pokemon)
                return (
                    <Pokemon 
                    name={pokemon.name}
                    type1={pokemon.type1}
                    type2={pokemon.type2}
                    imgURL={pokemon.imgURL}
                    number={pokemon.number}
                    height={pokemon.height}
                    weight={pokemon.weight}
                    entry={pokemon.entry}
                    habitat={pokemon.habitat}
                    legendary={pokemon.legendary}
                    mythical={pokemon.mythical}
                    ancient={pokemon.ancient}
                    />
                )
            })}
        </>
    )
}





export default PokemonList;