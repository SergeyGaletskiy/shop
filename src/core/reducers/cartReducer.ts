import { ICartItem } from '../types/catalog';
import { setCartAction } from '../actions';
import { ActionType, createReducer } from 'typesafe-actions';

export interface ICartState {
  cartItems: ICartItem[];
}

const defaultState: ICartState = {
  cartItems: [],
};

const actions = {
  setCartAction,
};

export const cartReducer = createReducer<
  ICartState,
  ActionType<typeof actions>
>(defaultState).handleAction(setCartAction, (state, { payload: cartItem }) => ({
  ...state,
  cartItems: [...state.cartItems, cartItem],
}));
