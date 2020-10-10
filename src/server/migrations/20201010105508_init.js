
exports.up = function(knex) {
    return knex.schema
        .createTable("Pokemon Members", table => {
            table.increments();
            table.string("Name").notNullable().unique().index();
            table.string("Type1").notNullable();
            table.string("Type2");
            table.string("ImgUrl").notNullable().unique();
            table.integer("PokemonNumber").notNullable().unique();
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists("Pokemon Members");
};
