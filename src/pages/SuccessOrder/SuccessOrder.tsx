import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cl from './SuccessOrder.module.css';
import { CartButton } from '../../components/atoms/CartButton';
import { CategorySubtitle } from '../../components/atoms/CategorySubtitle';
import { ItemCardMiddle } from '../../components/molecules/ItemCardMiddle';
import { getCartAction, removeCartAction } from '../../core/actions';
import { getCartState } from '../../core/selectors/cartSelector';
import { countTotalItems, countTotalSum } from '../../helpers/totalSum';

export const SuccessOrder = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector(getCartState);

  useEffect(() => {
    dispatch(getCartAction());
  }, [dispatch]);

  const makeOrder = () => {
    dispatch(removeCartAction());
  };

  const totalItems = countTotalItems(cartItems);
  const totalSum = countTotalSum(cartItems);

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
              {totalItems} items, ${totalSum}
            </div>
          </div>
          <CartButton text="OK" disabled={false} onClick={makeOrder} />
        </>
      ) : (
        <h3>Nothing in the shopping cart, please checkout</h3>
      )}
    </div>
  );
};
