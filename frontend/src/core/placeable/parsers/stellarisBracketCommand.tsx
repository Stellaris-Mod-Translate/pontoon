import * as React from 'react';
import { Localized } from '@fluent/react';

const stellarisBracketCommand = {
    rule: /(\[.*\])/ as RegExp,
    tag: (x: string): React.ReactElement<React.ElementType> => {
        return (
            <Localized
                id='placeable-parser-stellarisBracketCommand'
                attrs={{ title: true }}
            >
                <mark className='placeable' title='Stellaris Bracket Command'>
                    {x}
                </mark>
            </Localized>
        );
    },
};

export default stellarisBracketCommand;