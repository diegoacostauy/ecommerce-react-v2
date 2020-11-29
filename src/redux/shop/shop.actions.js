import ShopActionsTypes from './shop.types';

export const updateCollections = (collections) => ({
  type: ShopActionsTypes.UPDATE_COLLECTIONS,
  payload: collections
});
