import { CyanbitKarambitMapping } from "../../src/index";

test("Check if mapping has loaded", async () => {
	const patterns = await CyanbitKarambitMapping.getAllPatterns();
	expect(Object.keys(patterns).length).toBeGreaterThan(0);
});

describe("Check if patterns are valid", () => {
	test("Check pattern 29", async () => {
		const pattern29 = await CyanbitKarambitMapping.getPattern(29);
		expect(pattern29).toEqual({
            "img": "https://steamuserimages-a.akamaihd.net/ugc/1680394888025643094/3C474BC876C374B0617BD4A8F590EA7B79CC8717/",
            "type": "Sigma",
            "tier": 3
		});
	});
	test("Check pattern 210", async () => {
		const pattern210 = await CyanbitKarambitMapping.getPattern(210);
		expect(pattern210).toEqual({
            "img": "https://steamuserimages-a.akamaihd.net/ugc/1820038656457846292/8AC80D8ADE3EEBCE5D9E2844C550A2B1CAF5D761/",
            "type": "",
            "tier": 0
		});
	});
	test("Check pattern 1, should not exist", async () => {
		const pattern1 = await CyanbitKarambitMapping.getPattern(1);
		expect(pattern1).toBeUndefined();
	});
});

export {};
