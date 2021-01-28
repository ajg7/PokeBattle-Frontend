// import mockedAxios from "axios";
import { pokemon } from "../__mocks__/pokemon";
import { pokemonByName } from "../__mocks__/pokemonByName";
import axios from "axios";

jest.mock("axios");

describe("Pokemon API Calls", () => {
	test("Get Pokemon", async () => {
		const response = pokemon;
		axios.get.mockResolvedValue(response);

		const result = await axios.get("http://localhost:7000/pokemon");
		expect(result).toEqual(pokemon);
	});
	test("Get Pokemon By Name", async () => {
		const response = pokemonByName;
		axios.get.mockResolvedValue(response);
		const result = await axios.get(
			`http://localhost:7000/pokemon/?search=${pokemonByName[0].name}`
		);
		expect(result).toEqual(pokemonByName);
	});
	test("Random Pokemon from List", async () => {
		const response = pokemon;
		axios.get.mockResolvedValue(response);
		const result = await axios.get("http://localhost:7000/pokemon");
		const randomMember = result[Math.round(Math.random() * 151)];
		expect(randomMember).toBeDefined;
	});
});
