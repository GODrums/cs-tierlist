import { CrimsonKimonoMapping } from "../../src/index";

test("Check if mapping has loaded", async () => {
	const patterns = await CrimsonKimonoMapping.getAllPatterns();
	expect(Object.keys(patterns).length).toBeGreaterThan(0);
});

describe("Check if patterns are valid", () => {
	test("Check pattern 932", async () => {
		const pattern932 = await CrimsonKimonoMapping.getPattern(932);
		expect(pattern932).toEqual({
            "img": "https://broskins.com/patterns/gloves_crimson_kimono/932.jpg",
            "type": "",
            "tier": 1
		});
	});
	test("Check pattern 197", async () => {
		const pattern197 = await CrimsonKimonoMapping.getPattern(197);
		expect(pattern197).toEqual({
            "img": "https://broskins.com/patterns/gloves_crimson_kimono/197.jpg",
            "type": "",
            "tier": -1
		});
	});
	test("Check pattern 4, should not exist", async () => {
		const pattern4 = await CrimsonKimonoMapping.getPattern(4);
		expect(pattern4).toBeUndefined();
	});
});

export {};
