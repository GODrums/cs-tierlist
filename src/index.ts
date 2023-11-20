import { CrimsonKarambitModule, CrimsonM9Module, CrimsonNomadModule, CrimsonGlovesModule } from './modules/CrimsonWebMapping';
import PhoenixModule from './modules/PhoenixMapping';
import CyanbitKarambitModule from './modules/CyanbitMapping';
import CrimsonKimonoModule from './modules/CrimsonKimonoMapping';
import OverprintModule from './modules/OverprintMapping';
import { AbstractPattern, StandardMapping } from './modules/StandardMapping';

export const CrimsonM9Mapping = new CrimsonM9Module();
export const CrimsonKarambitMapping = new CrimsonKarambitModule();
export const CrimsonNomadMapping = new CrimsonNomadModule();
export const CrimsonGlovesMapping = new CrimsonGlovesModule();
export const PhoenixMapping = new PhoenixModule();
export const CyanbitKarambitMapping = new CyanbitKarambitModule();
export const CrimsonKimonoMapping = new CrimsonKimonoModule();
export const OverprintMapping = new OverprintModule();

const weapon_pattern_mapping: {
    [weapon: string]: {
        [pattern: string]: (preload: boolean) => StandardMapping<AbstractPattern> | null;
    };
} = {
    m9: {
        crimson_web: (preload: boolean) => new CrimsonM9Module(preload),
    },
    karambit: {
        crimson_web: (preload: boolean) => new CrimsonKarambitModule(preload),
        cyanbit: (preload: boolean) => new CyanbitKarambitModule(preload),
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

// generate mapping from parameters
export const generateMapping = (weapon: string, pattern: string, preload: boolean = false) => {
    if (weapon_pattern_mapping[weapon] && weapon_pattern_mapping[weapon][pattern]) {
        return weapon_pattern_mapping[weapon][pattern](preload);
    }
    return null;
};
