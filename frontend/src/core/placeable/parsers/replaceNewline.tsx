import * as React from 'react';

const replaceNewline = {
    rule: '\\n',
    tag: (): React.ReactElement<React.ElementType> => {
        return (
            <br/>
        );
    },
};

export default replaceNewline;