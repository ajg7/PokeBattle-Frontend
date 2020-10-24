import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { fetchPokemonList } from "../store/actions"
import Pokemon from "./Pokemon";
import "../css/styles.css";


const PokemonList = props => {
    const { pokemon, fetchPokemonList } = props;
    const [currentList, setCurrentList] = useState("https://pokemon-server-ajg7.herokuapp.com/pokemon");
    const [name, setName] = useState("");
    const [type1, setType1] = useState("");
    const [type2, setType2] = useState("");
    const [imgURL, setImgURL] = useState("");
    const [number, setNumber] = useState(0);
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [entry, setEntry] = useState("");
    const [habitat, setHabitat] = useState("");
    const [legendary, setLegendary] = useState(false);
    const [mythical, setMythical] = useState(false);
    const [ancient, setAncient] = useState(false);
    
    
    useEffect(() => {
        fetchPokemonList(currentList);
    }, [currentList, fetchPokemonList])


    useEffect(() => {
        axios.get("https://pokemon-server-ajg7.herokuapp.com/pokemon")
            .then(response => {
                const data = response.data;
                setName(data.name)
            setType1(data.type1)
            setType2(data.type2)
            setImgURL(data.imgURL)
            setNumber(data.number)
            setHeight(data.height)
            setWeight(data.weight)
            setWeight(data.entry)
            setHabitat(data.habitat)
            setLegendary(data.legendary)
            setMythical(data.mythical)
            setAncient(data.ancient)
                console.log(data)
            })
    }, [])

    return(
        <>
            {pokemon.map(individualPokemon => {
                return <Pokemon name={individualPokemon.name} url={individualPokemon.url} />
            })}
        </>
    )
}

const mapStateToProps = state => {
    return {
        pokemon: state.pokemon,
    }
}




export default connect(mapStateToProps, { fetchPokemonList })(PokemonList);