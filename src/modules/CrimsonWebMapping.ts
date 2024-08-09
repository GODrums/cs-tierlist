import { StandardMapping, type AbstractPattern } from './StandardMapping';

interface CrimsonWebPattern extends AbstractPattern {
    img?: string;
    tier: 1 | 2 | 3;
}

interface CrimsonM9Pattern extends CrimsonWebPattern {
    type: 'Single Web' | 'Double Web' | 'Triple Web';
}

interface CrimsonKarambitPattern extends CrimsonWebPattern {
    type: 'Single Web' | 'Double Web';
}

interface CrimsonNomadPattern extends CrimsonWebPattern {
    type: 'Single Web' | 'Double Web';
}

interface CrimsonGlovesPattern extends CrimsonWebPattern {
    type: 'Left Hand' | 'Right Hand' | 'Double Web' | 'Triple Web';
}

class CrimsonM9Module extends StandardMapping<CrimsonM9Pattern> {
    weapon = 'm9';
    patternName = 'crimson_web';
}

class CrimsonKarambitModule extends StandardMapping<CrimsonKarambitPattern> {
    weapon = 'karambit';
    patternName = 'crimson_web';
}

class CrimsonNomadModule extends StandardMapping<CrimsonNomadPattern> {
    weapon = 'nomad';
    patternName = 'crimson_web';
}

class CrimsonGlovesModule extends StandardMapping<CrimsonGlovesPattern> {
    weapon = 'gloves';
    patternName = 'crimson_web';
}

export { CrimsonM9Module, CrimsonKarambitModule, CrimsonNomadModule, CrimsonGlovesModule };
