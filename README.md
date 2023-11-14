# CS Tierlist

![NPM Version](https://img.shields.io/npm/v/cs-tierlist)
![NPM Bundle Size](https://img.shields.io/bundlephobia/min/cs-tierlist?label=size)
![NPM Downloads](https://img.shields.io/npm/dm/cs-tierlist)
![GitHub License](https://img.shields.io/github/license/chescos/csgo-fade-percentage-calculator)
![GitHub Build Workflow Status](https://img.shields.io/github/actions/workflow/status/godrums/cs-tierlist/node-test.yml)
![GitHub Test Workflow Status](https://img.shields.io/github/actions/workflow/status/godrums/cs-tierlist/node-test.yml?label=tests)


Tierlists for many pattern-based CS skins. The list of supported skins and weapons is listed below.

This repository contains pre-generated tierlists in the `generated` folder and a [NPM](https://www.npmjs.com/package/cs-tierlist) package as small wrapper for quick and simple usage in JavaScript/TypeScript projects.

## 📦 Credits

This repository is only a public data collection.
I did not create the tierlists myself, credit goes to their original creators.
The full guides and tierlists can be found here:

-   [CW Gloves](https://steamcommunity.com/sharedfiles/filedetails/?id=2818147579), [EW Gloves](https://steamcommunity.com/sharedfiles/filedetails/?id=2817501759) by [CptnKraken](https://steamcommunity.com/id/CPTNKRAKEN)
-   [CW M9](https://steamcommunity.com/sharedfiles/filedetails/?id=2973876979), [CW Karambit](https://steamcommunity.com/sharedfiles/filedetails/?id=2980565820), [CW Nomad](https://steamcommunity.com/sharedfiles/filedetails/?id=2976420129) by [Remix](https://steamcommunity.com/id/ogremix)
-   [Galil Phoenix Blacklight](https://steamcommunity.com/sharedfiles/filedetails/?id=2352059734) by [SeanErren](https://steamcommunity.com/id/SeanErren)
-   [Karambit Cyanbit](https://steamcommunity.com/sharedfiles/filedetails/?id=2598147723) by [CptnKraken](https://steamcommunity.com/id/CPTNKRAKEN)

## ⚙️ Usage

### JavaScript/TypeScript (NPM)

Install the latest version as [NPM](https://www.npmjs.com/package/cs-tierlist) package:
```js
npm install cs-tierlist
```

Use the package in your own project and only import what you actually need:
```js
// import the desired package
const { CrimsonM9Mapping, CyanbitKarambitMapping } = require("cs-tierlist");

// Get the pattern for a specific seed
const pattern2 = CrimsonM9Mapping.getPattern(2);

// Get the all patterns
const patterns = CyanbitKarambitMapping.getAllPatterns();
```

### Other languages

This repository contains pre-generated tierlists in the `generated` folder.
For example, the tierlist for the `M9 Bayonet` knives is located at `generated/crimson_web_m9.json`. Github provides raw links for each file in the repository without CORS restrictions.

Example in Python:
```python
# import the requests library
import requests

# download the tierlist
m9_cw_tierlist = requests.get("https://raw.githubusercontent.com/godrums/cs-tierlist/main/generated/crimson_web_m9.json").json()

# get the pattern for a specific seed
pattern2 = m9_cw_tierlist["2"]
```

## 🗎 Raw Tierlist Format

When using the raw JSON-files, the format is as follows:

```typescript
{
    [paint_seed: string]: {
        img?: string, // Optional Steam URL to the image
        type: string, // Type of the tier, e.g. "Double Web"
        tier: number, // Tier of the pattern, e.g. 1
        rank?: number, // Optional Rank of the pattern, e.g. 1
    }
}
```

## 📝 Contributing

If you want to contribute to this repository, feel free to open a pull request. 
Please make sure to follow the existing structure and use the same format for the tierlists.

For new tierlists, it is required to submit at least one test-file under `__tests__\modules` for each tierlist and to include the test results in the pull request.