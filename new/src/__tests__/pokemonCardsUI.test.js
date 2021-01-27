import React from "react";
import { Provider } from "react-redux";
import store from "../store";
import { render, cleanup } from "@testing-library/react";
import Pokemon from "../components/common/Pokemon";

afterEach(cleanup);

describe("Pokemon Cards UI Testing", () => {
	test.skip("Pokemon Cards Can Render", () => {
		const pokemonCards = render(
			<Provider store={store}>
				<Pokemon />
			</Provider>
		);
		console.log(pokemonCards);
	});
	test("Pokemon Cards Contain the Name, Img, and Id of the Pokemon", () => {});
	test("When 'Add Pokemon' Button is Pressed, that Pokemon is Added to the Team", () => {});
});
