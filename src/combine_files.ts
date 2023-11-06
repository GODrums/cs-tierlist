const fileNames = ["crimson_web_gloves.json", "crimson_web_karambit.json", "crimson_web_m9.json", "crimson_web_nomad.json"];

const jsonData = {
	gloves: {},
	karambit: {},
	m9: {},
	nomad: {},
};
for (const fileName of fileNames) {
	const json = await getJson(`generated/${fileName}`);
	const type = fileName.split("_")[2].split(".")[0] as keyof typeof jsonData;
	jsonData[type] = json;
}

await Deno.writeTextFile("generated/crimson_web.json", JSON.stringify(jsonData, null, 4));

async function getJson(filePath: string) {
	return JSON.parse(await Deno.readTextFile(filePath));
}
