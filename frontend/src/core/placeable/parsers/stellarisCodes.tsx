import * as React from 'react';
import { Localized } from '@fluent/react';

const stellarisCodes = {
    rule: /(\$[a-zA-Z0-9_]*\$)/ as RegExp,
    tag: (x: string): React.ReactElement<React.ElementType> => {
        return (
            <Localized id='placeable-parser-stellarisCodes' attrs={{ title: true }}>
                <mark className='placeable' title='Stellaris Codes'>
                    {x}
                </mark>
            </Localized>
        );
    },
};

export default stellarisCodes;