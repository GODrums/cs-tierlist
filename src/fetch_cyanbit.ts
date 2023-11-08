import { DOMParser, Element } from "https://deno.land/x/deno_dom/deno-dom-wasm.ts";

const fileName = "output/cyanbit_karambit.json";
let jsonData = await getJson(fileName);
let baseurl = "https://steamcommunity.com/sharedfiles/filedetails/?id=2598147723";

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

		let imageContainer;
		if (patternNumber.parentElement?.children.length == 1) {
			imageContainer = patternNumber.parentElement?.nextSibling?.nextSibling;
		} else {
			imageContainer = patternNumber.nextSibling?.nextSibling;
		}
		let href = imageContainer ? (<Element>imageContainer).getAttribute("href") : "";

		const title = patternNumber.parentElement?.parentElement?.parentElement?.firstElementChild?.textContent?.trim().split(" ");
		let type = title ? title[2] : "";
		let tier = title ? title[1] : "";
		if (tier == "Tier") {
			tier = "0";
			type = "";
		}

		// console.log(number, href, type, tier);
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
