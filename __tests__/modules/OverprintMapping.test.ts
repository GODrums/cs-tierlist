import { OverprintMapping } from "../../src/index";

test("Check if mapping has loaded", async () => {
	const patterns = await OverprintMapping.getAllPatterns();
	expect(Object.keys(patterns).length).toBeGreaterThan(0);
});

describe("Check if patterns are valid", () => {
	test("Check pattern 37", async () => {
		const pattern37 = await OverprintMapping.getPattern(37);
		expect(pattern37).toEqual({
            "img": "https://steamuserimages-a.akamaihd.net/ugc/1859428799476971151/78837AD508E102F493EA4C9A5794ED5ABEE37AE6/",
            "type": "Arrow",
            "tier": 3
        });
	});
	test("Check pattern 975", async () => {
		const pattern975 = await OverprintMapping.getPattern(975);
		expect(pattern975).toEqual({
            "img": "https://steamuserimages-a.akamaihd.net/ugc/1859428799476980744/F1589A31F79514F2DD862DCA2A598DA37C3A71C4/",
            "type": "Mixed",
            "tier": 0
        });
	});
	test("Check pattern 1, should not exist", async () => {
		const pattern1 = await OverprintMapping.getPattern(1);
		expect(pattern1).toBeUndefined();
	});
});

export {};
