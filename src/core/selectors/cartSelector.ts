import { IState } from '../types';

export const getCartState = ({ cartItems }: IState) => cartItems;
export const removeCartState = ({ cartItems }: IState) => cartItems;
