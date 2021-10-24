import React, { useState, useEffect } from 'react';
import { CartItemLittle } from '../../atoms/CartItemLittle';
import cl from './CartPreview.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getCartAction } from '../../../core';
import { CartButtonLittle } from '../../atoms/CartButtonLittle';
import { getCartState } from '../../../core/selectors/cartSelector';

export const CartPreview = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector(getCartState);

  useEffect(() => {
    dispatch(getCartAction());
  }, [dispatch]);

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
              ? cartItems?.map((item: any) => (
                  <CartItemLittle
                    key={item.id}
                    itemImage={item.image}
                    itemSubtitle={item.title}
                    itemPrice={item.price}
                    itemQuantity={item.quantity}
                    itemId={item.id}
                    itemOption={item.option}
                  />
                ))
              : ''}
          </div>
          <div className={cl.total}>
            <div>Total</div>
            <div>
              $
              {cartItems
                ?.reduce((sum, { price }) => {
                  return sum + price;
                }, 0)
                .toFixed(2)}
            </div>
          </div>
          <div className={cl.buttons}>
            <CartButtonLittle
              text={'EMPTY'}
              onClick={() => console.log('Ваша корзина очищена')}
            />
            <CartButtonLittle
              text={'ORDER'}
              onClick={() => console.log('Ваш заказ оформлен')}
            />
          </div>
        </>
      ) : (
        <div className={cl.emptyCartText}>Add something to your Cart</div>
      )}
    </div>
  );
};
