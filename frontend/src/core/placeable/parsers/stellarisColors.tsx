import * as React from 'react';
import { Localized } from '@fluent/react';
import { WithPlaceablesForStellarisNestingFormat } from '..';

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

const stellarisColors = {
    rule: /(§[A-Z!][^§]*)/ as RegExp,
    tag: (x: string): React.ReactElement<React.ElementType> => {
        const content = x.substring(2);
        return (
            <Localized id='placeable-parser-stellarisColors' attrs={{ title: true }}>
                <span style={{color:colorTag(x[1])}}>
                  <WithPlaceablesForStellarisNestingFormat>{content}</WithPlaceablesForStellarisNestingFormat>
                </span>
            </Localized>
        );
    },
};

export default stellarisColors;
