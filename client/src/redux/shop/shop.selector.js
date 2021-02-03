import { createSelector } from 'reselect';

export const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectShopCollections],
  collections => collections ? Object.keys(collections).map(key=> collections[key]) : []
)

export const selectCollection = url =>
  createSelector(
    [selectShopCollections],
    collections => collections ? collections[url] : null
  )

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
)

export const selectIsCollecitonLoaded = createSelector(
  [selectShop],
  shop => !!shop.collections // expression is the same as ternary below
  // shop => shop.collections ? true : false
)