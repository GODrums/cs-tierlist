import { DOMParser, Element } from "https://deno.land/x/deno_dom/deno-dom-wasm.ts";

// m9 cw: "output/crimson_web_m9.json";
// karambit cw: "output/crimson_web_karambit.json";
// nomad cw: "output/crimson_web_nomad.json";
const fileName = "output/crimson_web_nomad.json";
let jsonData = await getJson(fileName);
// m9 cw: https://steamcommunity.com/sharedfiles/filedetails/?id=2973876979
// karambit cw: https://steamcommunity.com/sharedfiles/filedetails/?id=2980565820
// nomad cw: https://steamcommunity.com/sharedfiles/filedetails/?id=2976420129
let baseurl = "https://steamcommunity.com/sharedfiles/filedetails/?id=2976420129";

let response = await fetch(baseurl);
let text = await response.text();
let doc = new DOMParser().parseFromString(text, "text/html");
if (doc == null) {
	console.log("Error: doc is null");
	Deno.exit();
}

Array.from(doc.querySelectorAll(".subSectionDesc > b"))
	.filter((element) => {
		return element.textContent.startsWith("Pattern #");
	})
	.forEach((patternNumber) => {
		let number = Number(patternNumber.textContent?.split("#")[1]);

		let nextSibling = patternNumber.nextSibling;
		while (nextSibling != null && (nextSibling.nodeName != "A" || nextSibling.childNodes.length == 0 || nextSibling.childNodes[0].nodeName != "IMG")) {
			nextSibling = nextSibling.nextSibling;
		}
		let href = nextSibling ? (<Element>nextSibling).getAttribute("href") : "";

		const title = patternNumber.parentElement?.parentElement?.firstElementChild?.textContent?.split(" - ");
		const type = title ? title[0].trim() : "";
		const tier = title ? title[1] : "";

		// console.log(number, href, type, tier);
		jsonData[number] = {
			img: href,
			type: type,
			tier: Number(tier?.split(" ")[1] ?? "1"),
		};
	});
Array.from(doc.querySelectorAll("blockquote")).forEach((block) => {
	const patterns = Array.from(block.textContent.split("author: ")[1].split(", "));
	const title = block.parentElement?.parentElement?.parentElement?.firstElementChild?.textContent?.split(" - ");
	const type = title ? title[0].trim() : "";
	const tier = title ? title[1] : "";

	patterns.forEach((pattern) => {
		let number = Number(pattern);

		// console.log(number, type, tier);
		jsonData[number] = {
			type: type,
			tier: Number(tier.split(" ")[1]),
		};
	});
});

await Deno.writeTextFile(fileName, JSON.stringify(jsonData, null, 4));

async function getJson(filePath: string) {
	return JSON.parse(await Deno.readTextFile(filePath));
}
