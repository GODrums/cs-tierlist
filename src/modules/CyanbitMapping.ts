import { type AbstractPattern, StandardMapping } from './StandardMapping';

// The guide contains non-classified patterns, which use type: '' and tier: 0
interface CyanbitPattern extends AbstractPattern {
    img: string;
    type: 'Sigma' | 'Delta' | '';
    tier: 0 | 1 | 2 | 3;
}

class CyanbitKarambitModule extends StandardMapping<CyanbitPattern> {
    weapon = 'karambit';
    patternName = 'cyanbit';
}

export default CyanbitKarambitModule;
