# cs-tierlist

Tierlists for many pattern-based CS skins.

## Credits

This repository is only a public data collection.
I did not create the tierlists myself, credit goes to their original creators.
The full guides and tierlists can be found here:

-   [CW Gloves](https://steamcommunity.com/sharedfiles/filedetails/?id=2818147579), [EW Gloves](https://steamcommunity.com/sharedfiles/filedetails/?id=2817501759) by [CptnKraken](https://steamcommunity.com/id/CPTNKRAKEN)
-   [CW M9](https://steamcommunity.com/sharedfiles/filedetails/?id=2973876979), [CW Karambit](https://steamcommunity.com/sharedfiles/filedetails/?id=2980565820), [CW Nomad](https://steamcommunity.com/sharedfiles/filedetails/?id=2976420129) by [Remix](https://steamcommunity.com/id/ogremix)
-   [Galil Phoenix Blacklight](https://steamcommunity.com/sharedfiles/filedetails/?id=2352059734) by [SeanErren](https://steamcommunity.com/id/SeanErren)

## Tierlist format

The tierlists are stored in JSON format. The format is as follows:

```typescript
{
    [paint_seed: string]: {
        img?: string, // Steam URL to the image
        type: string, // Type of the tier, e.g. "Double Web"
        tier: number, // Tier of the pattern, e.g. 1
        rank?: number, // Rank of the pattern, e.g. 1
    }
}
```

## Pre-generated tierlists

This repository contains pre-generated tierlists in the `generated` folder.
For example, the tierlist for the `M9 Bayonet` knives is located at `generated/crimson_web_m9`.

## Generate your own tierlists

### Prerequisites

-   [Deno](https://deno.land/#installation)
-   [Node.js](https://nodejs.org/en/download/)

### Running the script

```bash
npm run gen_knives
npm run gen_gloves
```

or:

```bash
deno run --allow-net --allow-read --allow-write --allow-env --allow-run src/fetch_cw_knives.ts
```
