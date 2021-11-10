import { ICartItem } from '../core/types';

export const countTotalSum = (orderList: ICartItem[]) => {
  const totalSum = orderList
    ?.reduce((sum: number, { price, quantity }: any) => {
      return sum + price * quantity;
    }, 0)
    .toFixed(2);
  return totalSum;
};

export const countTotalItems = (items: ICartItem[]) => {
  const totalItems = items.reduce(
    (totalQuantity: number, { quantity }: any) => {
      return totalQuantity + quantity;
    },
    0
  );
  return totalItems;
};
