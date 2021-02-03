export const addItemToCart = (cartItems, itemToAdd) => {
  const existingCartItem = cartItems.find(item => item.id === itemToAdd.id);

  if (existingCartItem) {
    return cartItems.map(item =>
      item.id === itemToAdd.id ?
        { ...item, quantity: item.quantity + 1 } :
        item
    )
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const decreaseQty = (cartItems, itemToDecrease) => {
  const existingCartItem = cartItems.find(item => item.id === itemToDecrease.id);

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(item => item.id !== itemToDecrease.id);
  }

  return cartItems.map(item =>
    item.id === itemToDecrease.id ?
      { ...item, quantity: item.quantity - 1 } :
      item
  );
};
