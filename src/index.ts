import { CrimsonKarambitModule, CrimsonM9Module, CrimsonNomadModule, CrimsonGlovesModule } from './modules/CrimsonWebMapping';
import PhoenixModule from './modules/PhoenixMapping';
import CyanbitKarambitModule from './modules/CyanbitMapping';
import CrimsonKimonoModule from './modules/CrimsonKimonoMapping';
import OverprintModule from './modules/OverprintMapping';
import PinkGalaxyKarambitModule from './modules/PinkGalaxyMapping';
import DiamondGemKarambitModule from './modules/DiamondGemMapping';
import type { AbstractPattern, StandardMapping } from './modules/StandardMapping';

export const CrimsonM9Mapping = new CrimsonM9Module();
export const CrimsonKarambitMapping = new CrimsonKarambitModule();
export const CrimsonNomadMapping = new CrimsonNomadModule();
export const CrimsonGlovesMapping = new CrimsonGlovesModule();
export const PhoenixMapping = new PhoenixModule();
export const CyanbitKarambitMapping = new CyanbitKarambitModule();
export const CrimsonKimonoMapping = new CrimsonKimonoModule();
export const OverprintMapping = new OverprintModule();
export const PinkGalaxyKarambitMapping = new PinkGalaxyKarambitModule();
export const DiamondGemKarambitMapping = new DiamondGemKarambitModule();

const generator: {
    [weapon: string]: {
        [pattern: string]: (
            preload: boolean
        ) =>
            | CrimsonM9Module
            | CrimsonKarambitModule
            | CrimsonNomadModule
            | CrimsonGlovesModule
            | PhoenixModule
            | CyanbitKarambitModule
            | CrimsonKimonoModule
            | OverprintModule
            | PinkGalaxyKarambitModule
            | DiamondGemKarambitModule;
    };
} = {
    m9: {
        crimson_web: (preload: boolean) => new CrimsonM9Module(preload),
    },
    karambit: {
        crimson_web: (preload: boolean) => new CrimsonKarambitModule(preload),
        cyanbit: (preload: boolean) => new CyanbitKarambitModule(preload),
        pink_galaxy: (preload: boolean) => new PinkGalaxyKarambitModule(preload),
        diamond_gem: (preload: boolean) => new DiamondGemKarambitModule(preload),
    },
    nomad: {
        crimson_web: (preload: boolean) => new CrimsonNomadModule(preload),
    },
    gloves: {
        crimson_web: (preload: boolean) => new CrimsonGlovesModule(preload),
        crimson_kimono: (preload: boolean) => new CrimsonKimonoModule(preload),
        overprint: (preload: boolean) => new OverprintModule(preload),
    },
    galil: {
        phoenix: (preload: boolean) => new PhoenixModule(preload),
    },
};

const storage: {
    [weapon: string]: {
        [pattern: string]: StandardMapping<AbstractPattern> | null;
    };
} = {};

// generate mapping from parameters
export const generateMapping = (weapon: string, pattern: string, preload = false) => {
    if (storage[weapon]?.[pattern]) {
        return storage[weapon][pattern];
    }

    if (generator[weapon]?.[pattern]) {
        const mapping = generator[weapon][pattern](preload);
        storage[weapon] = storage[weapon] ?? {};
        storage[weapon][pattern] = mapping;
        return mapping;
    }

    return null;
};
