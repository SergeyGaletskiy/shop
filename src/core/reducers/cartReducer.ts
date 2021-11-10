import { ICartItem } from '../types/catalog';
import {
  setCartAction,
  removeCartAction,
  deleteItemAction,
  decrementItemQuantityAction,
  incrementItemQuantityAction,
} from '../actions';
import { ActionType, createReducer } from 'typesafe-actions';

export interface ICatalogState {
  cartItems: ICartItem[];
}

const defaultState: ICatalogState = {
  cartItems: [],
};

const actions = {
  setCartAction,
  deleteItemAction,
  removeCartAction,
  incrementItemQuantityAction,
  decrementItemQuantityAction,
};

export const cartReducer = createReducer<
  ICatalogState,
  ActionType<typeof actions>
>(defaultState)
  .handleAction(setCartAction, (state, { payload: newCartItem }) => ({
    ...state,
    cartItems: [
      ...state.cartItems?.filter(
        (cartItem) => cartItem.keyId !== newCartItem.keyId && cartItem
      ),
      newCartItem,
    ],
  }))
  .handleAction(
    incrementItemQuantityAction,
    (state, { payload: newCartItem }) => ({
      ...state,
      cartItems: [
        ...state.cartItems.map((item: ICartItem) =>
          item.keyId === newCartItem.keyId
            ? { ...item, quantity: item.quantity + 1 }
            : { ...item }
        ),
      ],
    })
  )
  .handleAction(
    decrementItemQuantityAction,
    (state, { payload: newCartItem }) => ({
      ...state,
      cartItems: [
        ...state.cartItems.map((item: ICartItem) =>
          item.keyId === newCartItem.keyId
            ? { ...item, quantity: item.quantity - 1 }
            : { ...item }
        ),
      ],
    })
  )
  .handleAction(deleteItemAction, (state, { payload: newCartItem }) => ({
    ...state,
    cartItems: [
      ...state.cartItems.filter(
        (item: ICartItem) => item.keyId !== newCartItem.keyId && { ...item }
      ),
    ],
  }))
  .handleAction(removeCartAction, (state) => ({
    ...defaultState,
  }));
