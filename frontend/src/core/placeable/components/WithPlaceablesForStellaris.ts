import type { Parser } from 'react-content-marker';
import createMarker from 'react-content-marker';
import stellarisColors from '../parsers/stellarisColors';
import multipleSpaces from '../parsers/multipleSpaces';
import { Settings } from 'core/user';
import { rules } from './WithPlaceables';
import replaceNewline from '../parsers/replaceNewline';

export function getRuelsWithStellarisFormat(rules: Array<Parser>): Array<Parser> {
    const newRules = [replaceNewline, ...rules];

    const indexAfter = rules.indexOf(multipleSpaces);

    newRules.splice(indexAfter, 0, stellarisColors);

    return newRules;
}

export function getMakrerWithStellaris(settings: Settings): any{
    let placeableRules:Array<Parser> = rules;

    if(settings.stellarisFormats){
        placeableRules = getRuelsWithStellarisFormat(placeableRules);
    }

    return createMarker(placeableRules);
}

