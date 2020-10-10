const express = require("express");
const helmet = require("helmet");


const server = express();
server.use(helmet());
server.use(express.json());

server.get("/", (request, response) => {
    response.status(200).json({Frankenstein: "It's alive!!!!!"});
})

module.exports = server;