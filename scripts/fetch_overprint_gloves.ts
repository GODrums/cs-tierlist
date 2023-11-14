import { DOMParser, Element } from "https://deno.land/x/deno_dom/deno-dom-wasm.ts";

const fileName = "output/overprint_gloves.json";
let jsonData = await getJson(fileName);
let baseurl = "https://steamcommunity.com/sharedfiles/filedetails/?id=2772035880";

let response = await fetch(baseurl);
let text = await response.text();
let doc = new DOMParser().parseFromString(text, "text/html");
if (doc == null) {
	console.log("Error: doc is null");
	Deno.exit();
}

Array.from(doc.querySelectorAll("b > u"))
	.concat(Array.from(doc.querySelectorAll("u > b")))
	.filter((element) => {
		return element.textContent.startsWith("Pattern #");
	})
	.forEach((patternNumber) => {
		let number = Number(patternNumber.textContent?.split("#")[1]);

		let nextSibling = patternNumber.parentElement?.nextSibling;
		while (nextSibling != null && (nextSibling.nodeName != "A" || nextSibling.childNodes.length == 0 || nextSibling.childNodes[0].nodeName != "IMG")) {
			nextSibling = nextSibling.nextSibling;
		}
		let href = nextSibling ? (<Element>nextSibling).getAttribute("href") : "";

		const titleDiv = patternNumber.parentElement?.parentElement?.parentElement?.firstElementChild?.textContent;
		let tier = titleDiv?.trim().split(/\s/)[1];
		let type = titleDiv?.split('"')[1];

		if (isNaN(Number(tier))) {
			tier = "0";
		}
		// console.log(number + " " + type + " " + tier + " " + href);
		jsonData[number] = {
			img: href,
			type: type,
			tier: Number(tier),
		};
	});

await Deno.writeTextFile(fileName, JSON.stringify(jsonData, null, 4));

async function getJson(filePath: string) {
	return JSON.parse(await Deno.readTextFile(filePath));
}
