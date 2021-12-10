import { createSelector} from 'reselect';

const selectDiretory = state => state.directoryReducer;

export const selectDirectorySections = createSelector(
    [selectDiretory],
    directory => directory.sections
)