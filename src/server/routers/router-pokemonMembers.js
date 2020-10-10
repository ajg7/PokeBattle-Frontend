const express = require("express");
const PokemonMembers = require("./model-pokemonMembers");
const router = express.Router();

router.get("/", (request, response) => {
    PokemonMembers.find()
        .then(pokemon => {
            response.status(200).json(pokemon)
        })
        .catch(error => {
            console.log(error)
            response.status(500).json({message: error.message})
        })
})

module.exports = router;