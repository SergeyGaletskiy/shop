import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CartButton } from '../../components/atoms/CartButton';
import { CategorySubtitle } from '../../components/atoms/CategorySubtitle';
import { ItemCardMiddle } from '../../components/molecules/ItemCardMiddle';
import { getCartAction, removeCartAction } from '../../core/actions';
import { getCartState } from '../../core/selectors/cartSelector';
import cl from './SuccessOrder.module.css';

export const SuccessOrder = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector(getCartState);

  useEffect(() => {
    dispatch(getCartAction());
  }, [dispatch]);

  const makeOrder = () => {
    dispatch(removeCartAction());
  };

  return (
    <div className={cl.container}>
      <CategorySubtitle subtitle="Success order confirmation" />
      {cartItems.length > 0 ? (
        <>
          <h3>Your order has been confirmed. We will contact you shortly</h3>
          {cartItems
            ? cartItems?.map((item: any) => (
                <ItemCardMiddle
                  key={`${item.id} + ${item.option}`}
                  itemImage={item.image}
                  itemSubtitle={item.title}
                  itemPrice={item.price}
                  itemQuantity={item.quantity}
                  itemId={item.id}
                  itemOption={item.option}
                />
              ))
            : ''}
          <div className={cl.total}>
            <div>Total: </div>
            <div>
              {cartItems?.length} items, $
              {cartItems
                ?.reduce((sum, { price }) => {
                  return sum + price;
                }, 0)
                .toFixed(2)}
            </div>
          </div>
          <CartButton
            text="CONFIRM ORDER"
            disabled={false}
            onClick={makeOrder}
          />
        </>
      ) : (
        <h3>Nothing in the shopping cart, please checkout</h3>
      )}
    </div>
  );
};
