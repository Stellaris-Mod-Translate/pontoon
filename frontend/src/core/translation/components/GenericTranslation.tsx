import * as React from 'react';

import { withDiff } from 'core/diff';
import { getMakrerWithStellaris, WithPlaceablesNoLeadingSpace } from 'core/placeable';
import { withSearch } from 'modules/search';
import { Settings } from 'core/user';

// @ts-ignore: bug 1712442.
const TranslationPlaceablesDiff = withDiff(WithPlaceablesNoLeadingSpace);

// @ts-ignore: bug 1712442.
const TranslationPlaceablesSearch = withSearch(WithPlaceablesNoLeadingSpace);

export type TranslationProps = {
    content: string;
    diffTarget?: string | null | undefined;
    search?: string | null | undefined;
    settings: Settings;
};

export default class GenericTranslation extends React.Component<TranslationProps> {
    render(): React.ReactElement<React.ElementType> {
        const { content, diffTarget, search, settings } = this.props;

        const WithPlaceablesForStellaris = getMakrerWithStellaris(settings);

        if (diffTarget) {
            return (
                <TranslationPlaceablesDiff diffTarget={diffTarget}>
                    {content}
                </TranslationPlaceablesDiff>
            );
        }

        if (search) {
            return (
                <TranslationPlaceablesSearch search={search}>
                    {content}
                </TranslationPlaceablesSearch>
            );
        }

        return <WithPlaceablesForStellaris>{content}</WithPlaceablesForStellaris>;
    }
}
