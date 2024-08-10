import { type AbstractPattern, StandardMapping } from './StandardMapping';

// The guide contains non-classified patterns, which use type: '' and tier: 0
interface PinkGalaxyPattern extends AbstractPattern {
    tier: 1 | 2 | 3;
}

class PinkGalaxyKarambitModule extends StandardMapping<PinkGalaxyPattern> {
    weapon = 'karambit';
    patternName = 'pink_galaxy';
}

export default PinkGalaxyKarambitModule;
