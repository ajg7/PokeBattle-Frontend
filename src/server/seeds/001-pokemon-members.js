
exports.seed = function(knex) {
  const pokemonMembers = [
    {
      name: "test",
      type1: "fire",
      type2: null,
      imgUrl: "",
      PokemonNumber: 152
    }
  ]
  return knex("Pokemon Members").insert(pokemonMembers);
};
