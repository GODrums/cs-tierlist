import { StandardMapping, type AbstractPattern } from './StandardMapping';

interface OverprintPattern extends AbstractPattern {
    img: string;
    type: 'Polygon' | 'Arrow' | 'Mixed' | 'Flower';
    tier: 0 | 1 | 2 | 3;
}

class OverprintModule extends StandardMapping<OverprintPattern> {
    weapon = 'gloves';
    patternName = 'overprint';
}

export default OverprintModule;
