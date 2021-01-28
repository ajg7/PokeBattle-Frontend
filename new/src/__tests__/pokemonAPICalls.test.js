// import mockedAxios from "axios";
import { pokemon } from "../__mocks__/pokemon";
import axios from "axios";

/*

Goal: 
    -Need to test that Pokemon API call returns a list of all pokemon
    -Test that when you query the list by name it returns that specific pokemon
    -Test that featured Pokemon is a random pokemon from the list
*/

jest.mock("axios");

describe("Pokemon API Calls", () => {
	test("Get Pokemon", async () => {
		const response = pokemon;
		axios.get.mockResolvedValue(response);

		const result = await axios.get("http://localhost:7000/pokemon");
		expect(result).toEqual(pokemon);
	});
	test("Get Pokemon By Name", async () => {});
});
