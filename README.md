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

-   [Pink Galaxy Karambits](https://steamcommunity.com/sharedfiles/filedetails/?id=3205067980), [Diamond Gem Karambits](https://steamcommunity.com/sharedfiles/filedetails/?id=3238172187) by [Coco](https://steamcommunity.com/id/cococs2)
-   [Crimson Web Gloves](https://steamcommunity.com/sharedfiles/filedetails/?id=2818147579), [Emerald Web Gloves](https://steamcommunity.com/sharedfiles/filedetails/?id=2817501759) by [CptnKraken](https://steamcommunity.com/id/CPTNKRAKEN)
-   [Crimson Web M9](https://steamcommunity.com/sharedfiles/filedetails/?id=2973876979), [Crimson Web Karambit](https://steamcommunity.com/sharedfiles/filedetails/?id=2980565820), [Crimson Web Nomad](https://steamcommunity.com/sharedfiles/filedetails/?id=2976420129) by [Remix](https://steamcommunity.com/id/ogremix)
-   [Crimson Kimono Gloves](https://steamcommunity.com/sharedfiles/filedetails/?id=2881155935) by [CW](https://steamcommunity.com/id/CWCrimson)
-   [Galil Phoenix Blacklight](https://steamcommunity.com/sharedfiles/filedetails/?id=2352059734) by [SeanErren](https://steamcommunity.com/id/SeanErren)
-   [Karambit Cyanbit](https://steamcommunity.com/sharedfiles/filedetails/?id=2598147723) by [CptnKraken](https://steamcommunity.com/id/CPTNKRAKEN)
-   [Overprint Gloves](https://steamcommunity.com/sharedfiles/filedetails/?id=2772035880) by [CptnKraken](https://steamcommunity.com/id/CPTNKRAKEN)

After careful consideration, I decided to accept the following proposed changes to the original tierlists:

-   CW Gloves
    -   pattern 369 has been moved from tier 2 right hand to tier 3 double web thanks to a suggestion by @zada273 in [Issue #1](https://github.com/GODrums/cs-tierlist/issues/1)
    -   pattern 936 has been added as a tier 2 double web thanks to a suggestion by @zada273 in [Issue #1](https://github.com/GODrums/cs-tierlist/issues/1)
    -   pattern 813 has been added as a tier 3 double web thanks to a suggestions by @ALPHABRAVOK9 on Twitter

## ⚙️ Usage

### JavaScript/TypeScript (NPM)

Install the latest version for Node.js 18 as [NPM](https://www.npmjs.com/package/cs-tierlist) package:

```js
npm install cs-tierlist
```

Use the package in your own project and only import what you actually need:

```js
// import the desired package
const { CrimsonM9Mapping, CyanbitKarambitMapping } = require('cs-tierlist');

// you can also dynamically generate the mapping
// this allows for enforced preloading of the tierlist
const cw_kara_mapping = generateMapping('karambit', 'crimson_web', true);

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

## ⌨️ Development

Prerequisites:

-   Node.js `>=18.0.0`
-   npm `>=9.5.0`
-   tsc `>=4.7.0`

Note that this project will not run on older versions of Node.js due to the usage of ES2022 features, such as the `fetch`-functionality.

Prepare your local setup via the following command:

```bash
npm install
```

After finishing your changes, make sure to format with Prettier:

```bash
npm run prettier
```

Clean the build folder and then build the project:

```bash
npm run clean
npm run build
```

And finally make sure the tests suites are passing:

```bash
npm run test
```
