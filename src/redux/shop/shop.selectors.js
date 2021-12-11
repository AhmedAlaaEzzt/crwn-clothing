import { createSelector } from "reselect";



const selectShop = (state) => state.shopReducer;

export const selectShopcollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectShopcollections],
  collections => Object.keys(collections).map(key => collections[key])
)

// export const selectCollection = collectionUrlParam =>createSelector(
//     [selectShopcollections],
//     collections => collections[collectionUrlParam]
// )