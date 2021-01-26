import getType from "jest-get-type";
import types from "../utils/types";

//Mock Sanity Checks
const add = jest.fn(() => 14);

describe.skip("Sanity Check Testing Suite", () => {
	describe("Mock Calls", () => {
		test("add", () => {
			expect(add(5, 20)).toBe(14);
			expect(add).toHaveBeenCalledTimes(1);
			expect(add).toHaveBeenCalledWith(5, 20);
		});
	});

	//Unit Testing Sanity Check

	const sum = (a, b) => a + b;

	const stringReturn = name => `My name is ${name}`;

	describe("Unit Tests", () => {
		test("adds 6 + 5 to equal 11", () => {
			expect(sum(6, 5)).toBe(11);
		});
		test("Should return 'My name is <your name>'", () => {
			expect(stringReturn("A.J.")).toBe("My name is A.J.");
			expect(stringReturn("A.J.")).not.toBe(Math.random());
			const subject = "A.J.";
			const actual = "A.J.";
			expect(subject).toEqual(actual);
		});
		test("Return type for stringReturn should be a string", () => {
			const returnType = getType(stringReturn("A.J."));
			expect(returnType).toBe("string");
		});
		test("Types Function", () => {
			expect(types.get("dragon")).toStrictEqual(["dragon"]);
		});
	});

	// Integration Test Sanity Check

	const total = (shipping, subTotal) => {
		return "$" + sum(shipping, subTotal);
	};

	describe("Integration Tests", () => {
		test("total", () => {
			expect(total(5, 20)).toBe("$25");
			expect(total(5, 20)).not.toBe(25);
		});
	});
});
