interface PatternMapping<T extends AbstractPattern> {
	[paint_seed: string]: T;
}

interface AbstractPattern {
	type: string;
	tier: number;
}

abstract class StandardMapping<T extends AbstractPattern> {
	// mapping is loaded only on demand to avoid initial loading times
	private patterns: PatternMapping<T> = {};

	protected abstract patternName: string;

	protected abstract weapon: string;
	
	/**
	 * Load the mapping from the generated JSON file. To avoid huge package sizes, the file is loaded from the GitHub repository.
	 * This method is called automatically when using the getAllPatterns() or getPattern() methods.
	 */
	private async initMapping() {
		if (typeof window !== 'undefined') {
			// import from chrome storage if available
			const storage_key = `cs-tierlists_${this.patternName}_${this.weapon}`;
			const storage: PatternMapping<T> | null = await new Promise((resolve) => chrome?.storage.local.get(storage_key, (value) => {
				resolve(value[storage_key] ?? null);
			}));

			if (storage) {
				this.patterns = storage;
				return;
			} else {
				// load from GitHub and save to chrome storage
				const patterns = await fetch(`https://raw.githubusercontent.com/GODrums/cs-tierlist/main/generated/${this.patternName}_${this.weapon}.json`).then((res) => res.json());
				this.patterns = patterns;
				chrome?.storage.local.set({ [storage_key]: patterns });
			}
		}

		this.patterns = await fetch(`https://raw.githubusercontent.com/GODrums/cs-tierlist/main/generated/${this.patternName}_${this.weapon}.json`).then((res) => res.json());
	}

	/**
	 * Get all patterns that have a special pattern.
	 * @warning This method may return up to 1001 patterns, which may take a lot of memory. Please use with caution.
	 * @async loads the mapping from the generated JSON file if it has not been loaded yet
	 * @returns an empty mapping if no patterns are found
	 */
	public async getAllPatterns(): Promise<PatternMapping<T>> {
		if (Object.keys(this.patterns).length === 0) {
			await this.initMapping();
		}
		return this.patterns;
	}

	/**
	 * Get a specific pattern by its paint seed.
	 * @param paint_seed Number from 0 to 1000
	 * @async loads the mapping from the generated JSON file if it has not been loaded yet
	 * @returns undefined if the pattern does not exist
	 */
	public async getPattern(paint_seed: number): Promise<PatternMapping<T>[string] | undefined> {
		if (Object.keys(this.patterns).length === 0) {
			await this.initMapping();
		}
		return this.patterns[paint_seed];
	}
}

export { StandardMapping };
export type { AbstractPattern };
