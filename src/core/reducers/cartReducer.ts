// import { ICartItem } from '../types/catalog';
import { setCartAction } from '../actions';
import { ActionType, createReducer } from 'typesafe-actions';

export interface ICartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  option: string;
  quantity: number;
}

export interface ICartState {
  cartItems: ICartItem[];
  // cartItems: any[];
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
  // cartItems: [...state.cartItems, ...cartItems],
  cartItems: [...state.cartItems, cartItem],
}));
