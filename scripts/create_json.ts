const inputFilePath = '';
const outputFilePath = 'diamond_gem_karambit.json';

async function createJsonFromTxt() {
    const text = await Deno.readTextFile(inputFilePath);
    const lines = text.trim().split('\n');

    const jsonData: Record<string, { rank: number; blue: number; tier: number }> = {};

    for (const line of lines) {
        const [rankPart, patternPart, colorPart] = line.split(', ');
        const rank = Number.parseInt(rankPart.split(' ')[1], 10);
        const pattern = patternPart.split(' ')[1];
        let color = colorPart.split(' ')[0];
        color = Number.parseFloat(color.substring(0, color.length - 1));
        const tier = color >= 97 ? 1 : color >= 94 ? 2 : 3;

        if (color >= 90) {
            jsonData[pattern] = { rank, blue: color, tier };
        }
    }

    await Deno.writeTextFile(outputFilePath, JSON.stringify(jsonData, null, 4));
}

createJsonFromTxt();
