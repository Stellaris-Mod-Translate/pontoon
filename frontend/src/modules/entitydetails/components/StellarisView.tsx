import * as React from 'react';

import './Metadata.css';

import type { Entity } from 'core/api';
import type { UserState } from 'core/user';
import { TranslationProxy } from 'core/translation';

type Props = {
    readonly entity: Entity;
    readonly content: string;
    readonly user: UserState;
};

export default class StellarisView extends React.Component<Props> {
    
    render(): React.ReactNode {
        const {
            content,
            entity,
            user,
        } = this.props
        const settings = user.settings;

        return (
            <div className='entity stellaris view'>
                <TranslationProxy
                    content={content}
                    diffTarget={null}
                    format={entity.format}
                    settings={settings}
                />
            </div>
        );
    }
}
