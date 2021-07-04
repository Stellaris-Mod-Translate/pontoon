export { default as WithPlaceables } from './components/WithPlaceables';
export { rules } from './components/WithPlaceables';

export { default as WithPlaceablesForFluent } from './components/WithPlaceablesForFluent';
export { getRulesWithFluent } from './components/WithPlaceablesForFluent';

export { default as WithPlaceablesNoLeadingSpace } from './components/WithPlaceablesNoLeadingSpace';
export { getRulesWithoutLeadingSpace } from './components/WithPlaceablesNoLeadingSpace';

export { default as WithPlaceablesForStellarisNestingFormat} from './components/WithPlaceablesForStellaris'
export { getMakrerWithStellaris } from './components/WithPlaceablesForStellaris'
export { getRuelsWithStellarisFormat } from './components/WithPlaceablesForStellaris'
export { getRuelsWithStellarisFormatWithoutColors } from './components/WithPlaceablesForStellaris'

export { default as WithPlaceablesForFluentNoLeadingSpace } from './components/WithPlaceablesForFluentNoLeadingSpace';

// Name of this module.
// Used as the key to store this module's reducer.
export const NAME: string = 'placeable';
