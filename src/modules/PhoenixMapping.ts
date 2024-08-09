import { StandardMapping, type AbstractPattern } from './StandardMapping';

interface PhoenixPattern extends AbstractPattern {
    img: string;
    type: 'Body' | 'Grip' | 'Text on Body' | 'Text on Grip' | '2 Heads';
    tier: 1 | 2 | 3 | 4;
    rank?: 1 | 2 | 3;
}

class PhoenixModule extends StandardMapping<PhoenixPattern> {
    weapon = 'galil';
    patternName = 'phoenix';
}

export default PhoenixModule;
