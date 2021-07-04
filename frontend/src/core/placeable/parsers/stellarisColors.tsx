import * as React from 'react';
import { Localized } from '@fluent/react';
import stellarisCodes from './stellarisCodes';
import createMarker from 'react-content-marker';

const colorTag = (x:string)  =>  {
    switch(x)
    {
        case 'B' : return 'Blue'
        case 'E' : return 'Teal'
        case 'G' : return 'Green'
        case 'H' : return 'Orange'
        case 'L' : return 'Brown'
        case 'M' : return 'Purple'
        case 'P' : return 'Light red'
        case 'R' : return 'Red'
        case 'S' : return 'Dark orange'
        case 'T' : return 'Light grey'
        case 'W' : return 'White'
        case 'Y' : return 'Yellow'
        case '!' : return 'Default'
        default : return 'Default'
    }
};

const stellarisCodeRegex: RegExp = /($.*$)/;

const stellarisColors = {
    rule: /(§[A-Z!][^§]*)/ as RegExp,
    tag: (x: string): React.ReactElement<React.ElementType> => {
        const content = x.substring(2);
        const newRuels = [stellarisCodes];
        const WithStellarisNestingTags = createMarker(newRuels);
        return (
            <Localized id='placeable-parser-stellarisColors' attrs={{ title: true }}>
                <span style={{color:colorTag(x[1])}}>
                  <WithStellarisNestingTags>{content}</WithStellarisNestingTags>
                </span>
            </Localized>
        );
    },
};

export default stellarisColors;
