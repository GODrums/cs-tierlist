# cs-tierlist
Tierlists for many pattern-based CS skins

## Tierlist format

The tierlists are stored in JSON format. The format is as follows:

```typescript
{
    [paint_seed: string]: {
            img: string, // Steam URL to the image
            type: string, // Type of the tier, e.g. "Double Web"
            tier: number, // Tier of the pattern, e.g. 1
        }
}
```


## Pre-generated tierlists

This repository contains pre-generated tierlists in the `generated` folder. 
For example, the tierlist for the `M9 Bayonet` knives is located at `generated/crimson_web_m9`.

## Generate your own tierlists

### Prerequisites

- [Deno](https://deno.land/#installation)
- [Node.js](https://nodejs.org/en/download/)

### Running the script

```bash
npm run gen_knives
npm run gen_gloves
```

or:

```bash
deno run --allow-net --allow-read --allow-write --allow-env --allow-run src/fetch_cw_knives.ts
```