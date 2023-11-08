import { CrimsonM9Mapping } from "../../src/index";

test("Check if mapping has loaded", async () => {
	const patterns = await CrimsonM9Mapping.getAllPatterns();
	expect(Object.keys(patterns).length).toBeGreaterThan(0);
});

describe("Check if patterns are valid", () => {
	test("Check pattern 2", async () => {
		const pattern2 = await CrimsonM9Mapping.getPattern(2);
		expect(pattern2).toEqual({
			type: "Double Web",
			tier: 3,
		});
	});
	test("Check pattern 8", async () => {
		const pattern8 = await CrimsonM9Mapping.getPattern(8);
		expect(pattern8).toEqual({
			img: "https://steamuserimages-a.akamaihd.net/ugc/2019345858004992397/1EB3F89C47C81A9A2228B595578B3BA705718E72/",
			type: "Single Web",
			tier: 1,
		});
	});
	test("Check pattern 1, should not exist", async () => {
		const pattern1 = await CrimsonM9Mapping.getPattern(1);
		expect(pattern1).toBeUndefined();
	});
});

export {};
