import * as React from 'react';

const stellarisIcons = {
    rule: /(£[a-zA-Z0-9_]*£)/ as RegExp,
    tag: (x: string): React.ReactElement<React.ElementType> => {
        const content = x.substr(1, x.length - 2);
        
        const imgSrc = "/static/img/stellaris/icons/" + content + ".png";

        const handleImgError = (e) => {
            e.onerror = null;
            e.target.src = '/static/img/logo32.png';
        }

        return (
            <img src={imgSrc} alt={content} onError={handleImgError}></img>
        );
    },
};

export default stellarisIcons;