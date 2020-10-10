const express = require("express");
const helmet = require("helmet");
const PokemonMemberRouter = require("../routers/router-pokemonMembers");


const server = express();
server.use(helmet());
server.use(express.json());

server.get("/", (request, response) => {
    response.status(200).json({Frankenstein: "It's alive!!!!!"});
})

server.use("/pokemon_team_members", PokemonMemberRouter);

module.exports = server;