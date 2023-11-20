import { CrimsonKarambitMapping, generateMapping } from "../../src/index";

test("Check if function can be executed", () => {
    const mapping = generateMapping("karambit", "crimson_web");
    expect(mapping).not.toBeNull();
});

test("Check non-existing mapping", () => {
    const mapping = generateMapping("galil", "crimson_web");
    expect(mapping).toBeNull();
});

test("Check if generated mappings are valid", async () => {
    const mapping = generateMapping("karambit", "crimson_web");
	const patterns = await CrimsonKarambitMapping.getAllPatterns();
	expect(await mapping?.getAllPatterns()).toEqual(patterns);
});

export {};
