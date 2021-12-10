import { createSelector} from 'reselect';

const selectShop = state => state.shopReducer;

export const selectShopcollections = createSelector(
    [selectShop],
    shop => shop.collections
)