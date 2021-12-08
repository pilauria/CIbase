import { CART_ADD_ITEM } from '../constants/cartConstants';

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;

      const existItem = state.cartItems.find(x => x.product === item.product);
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map(x =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
      break;

    default:
      return state;
  }
};

/*we update the product at the state and if something (like qyt) is different we merge it. Its not ideal way but its okay, you can still add items by creating initial cart state at reducer  and add items or update qyt by using action. It would be more code but it would be much more cleaner.*/
