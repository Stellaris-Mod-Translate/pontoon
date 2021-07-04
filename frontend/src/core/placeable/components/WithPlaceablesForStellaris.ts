import type { Parser } from 'react-content-marker';
import createMarker from 'react-content-marker';
import stellarisColors from '../parsers/stellarisColors';
import multipleSpaces from '../parsers/multipleSpaces';
import stellarisCodes from '../parsers/stellarisCodes';
import replaceNewline from '../parsers/replaceNewline';
import { Settings } from 'core/user';
import { rules } from './WithPlaceables';
import { getRulesWithoutLeadingSpace } from './WithPlaceablesNoLeadingSpace';

export function getRuelsWithStellarisFormat(rules: Array<Parser>): Array<Parser> {
    const newRules = [replaceNewline, ...rules];

    let indexAfter = rules.indexOf(multipleSpaces);

    newRules.splice(indexAfter, 0, stellarisColors);
    newRules.splice(++indexAfter, 0, stellarisCodes);

    return newRules;
}

export function getRuelsWithStellarisFormatWithoutColors(rules: Array<Parser>): Array<Parser> {
    const newRules = [replaceNewline, ...rules];

    let indexAfter = rules.indexOf(multipleSpaces);

    newRules.splice(indexAfter, 0, stellarisCodes);

    return newRules;
}

export function getMakrerWithStellaris(settings: Settings): any{
    let placeableRules:Array<Parser> = rules;

    if(settings.stellarisFormats){
        placeableRules = getRuelsWithStellarisFormat(placeableRules);
    }

    return createMarker(placeableRules);
}

const WithPlaceablesForStellarisNestingFormat: any = createMarker(
    getRuelsWithStellarisFormatWithoutColors(
            getRulesWithoutLeadingSpace(rules)
        )
    );

export default WithPlaceablesForStellarisNestingFormat;