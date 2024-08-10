import { type AbstractPattern, StandardMapping } from './StandardMapping';

// The guide contains non-classified patterns, which use type: '' and tier: 0
interface DiamondGemPattern extends AbstractPattern {
    tier: 1 | 2 | 3;
    rank: number;
    blue: number;
}

class DiamondGemKarambitModule extends StandardMapping<DiamondGemPattern> {
    weapon = 'karambit';
    patternName = 'diamond_gem';
}

export default DiamondGemKarambitModule;
