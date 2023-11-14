import { AbstractPattern, StandardMapping } from './StandardMapping';

interface EmeraldGlovesPattern extends AbstractPattern {
    img?: string;
    tier: 1 | 2 | 3;
    type: 'Left Hand' | 'Right Hand' | 'Double Web' | 'Triple Web';
}

class EmeraldGlovesModule extends StandardMapping<EmeraldGlovesPattern> {
    weapon = 'gloves';
    patternName = 'emerald_web';
}
