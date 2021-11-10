import React from 'react';
import { Link } from 'react-router-dom';
import cl from './CartPreview.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  decrementItemQuantityAction,
  deleteItemAction,
  incrementItemQuantityAction,
  removeCartAction,
} from '../../../core';
import { CartButtonLittle } from '../../atoms/CartButtonLittle';
import { getCartState } from '../../../core/selectors/cartSelector';
import { CartItemLittle } from '../CartItemLittle';
import { countTotalSum } from '../../../helpers/totalSum';
import { ICartItem } from '../../../core/types';

export const CartPreview = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector(getCartState);

  const incrementItemQuantity = (item: any) => {
    dispatch(incrementItemQuantityAction(item));
  };

  const decrementItemQuantity = (item: any) => {
    dispatch(decrementItemQuantityAction(item));
  };

  const removeItem = (item: any) => {
    dispatch(deleteItemAction(item));
  };

  const cleanCart = () => {
    dispatch(removeCartAction());
  };

  return (
    <div className={cl.container}>
      {cartItems.length > 0 ? (
        <>
          <div className={cl.subtitle}>
            <span>My Bag, </span>
            {cartItems?.length} items
          </div>
          <div className={cl.items}>
            {cartItems
              ? cartItems?.map((item: ICartItem) => (
                  <CartItemLittle
                    key={`${item.id}${item.option}`}
                    itemImage={item.image}
                    itemSubtitle={item.title}
                    itemPrice={item.price}
                    itemQuantity={item.quantity}
                    itemId={item.id}
                    itemOption={item.option}
                    keyId={`${item.id}${item.option}`}
                    incrementQuantity={() => incrementItemQuantity(item)}
                    decrementQuantity={() => decrementItemQuantity(item)}
                    deleteItem={() => removeItem(item)}
                  />
                ))
              : ''}
          </div>
          <div className={cl.total}>
            <div>Total</div>
            <div>${countTotalSum(cartItems)}</div>
          </div>
          <div className={cl.buttons}>
            <CartButtonLittle text={'CLEAR'} onClick={cleanCart} />
            <Link to="/success_order">
              <CartButtonLittle text={'ORDER'} />
            </Link>
          </div>
        </>
      ) : (
        <div className={cl.emptyCartText}>Add something to your Cart</div>
      )}
    </div>
  );
};
