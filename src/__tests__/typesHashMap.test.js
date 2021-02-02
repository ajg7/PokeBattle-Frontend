import types from "../utils/types";

describe.skip("Types Hash Map", () => {
	test("A certain type returns all types that it is super-effective against", () => {
		expect(types.get("poison")).toStrictEqual(["grass", "fairy"]);
		expect(types.get("fire")).not.toStrictEqual(["grass", "fairy"]);
		expect(types.has("ice")).toBeTruthy();
		expect(types.has("dark")).toBeFalsy();
	});
});
