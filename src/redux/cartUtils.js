export const addItemToCart = (cartItems, product) => {
    const existingCartItem = cartItems.find(
        (item) => item.id === product.id
    );

    if (existingCartItem) {
        return cartItems.map((item) =>
            item.id === existingCartItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
        );
    } else {
        return [...cartItems, { ...product, quantity: 1 }];
    }

    
}

export const removeItemFromCart = (cartItems, id) => {
    const productToRemove = cartItems.find((item) => item.id === id);

    if(productToRemove.quantity > 1){
        return cartItems.map((item) => item.id === productToRemove.id 
        ? { ...item, quantity: item.quantity - 1 } 
        : item
    );

    } else {
        return cartItems.filter((item) => item.id !== productToRemove.id);
    }
} 

export const resetShippingCost = (cartItems, shippingCost) => {
    if (cartItems.length === 1 && cartItems[0].quantity === 1) {
      return 0;
    } else {
      return shippingCost;
    }
  };