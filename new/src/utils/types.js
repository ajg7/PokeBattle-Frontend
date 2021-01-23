//Key (Type1) -> Value(Types that Type1 will win against)
const types = new Map();

types.set("normal", []);
types.set("fairy", ["fighting", "dragon"]);
types.set("fighting", ["normal", "rock", "steel", "ice"]);
types.set("steel", ["rock", "ice", "fairy"]);
types.set("flying", ["fighting", "bug", "grass"]);
types.set("poison", ["grass", "fairy"]);
types.set("ground", ["poison", "rock", "steel", "fire", "electric"]);
types.set("rock", ["flying", "bug", "fire", "ice"]);
types.set("bug", ["grass", "psychic"]);
types.set("ghost", ["ghost", "psychic"]);
types.set("fire", ["bug", "steel", "grass", "ice"]);
types.set("water", ["ground", "rock", "fire"]);
types.set("grass", ["ground", "rock", "water"]);
types.set("electric", ["flying", "water"]);
types.set("psychic", ["fighting", "poison"]);
types.set("ice", ["flying", "ground", "grass", "dragon"]);
types.set("dragon", ["dragon"]);

export default types;
