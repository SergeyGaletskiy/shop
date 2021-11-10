import React from 'react';
import cl from './CartItemLittle.module.css';
import { QuantityButton } from '../../atoms/QuantityButton';
import { stockDatabase } from '../../../mock/stockDatabase';

interface ICartItemLittle {
  keyId: string;
  itemId: number;
  itemImage: string;
  itemSubtitle: string;
  itemPrice: number;
  itemQuantity: number;
  itemOption: string;
  incrementQuantity: (itemId: string) => void;
  decrementQuantity: (itemId: string) => void;
  deleteItem: (itemId: string) => void;
}

export const CartItemLittle = ({
  keyId,
  itemImage,
  itemSubtitle,
  itemPrice,
  itemQuantity,
  itemId,
  itemOption,
  incrementQuantity,
  decrementQuantity,
  deleteItem,
}: ICartItemLittle) => {
  const isDisabledButton = (itemId: number, itemOption: string) => {
    return stockDatabase
      .filter((item) => item.id === itemId)[0]
      .stock.filter((el) => el.option === itemOption)[0].amount;
  };

  return (
    <div className={cl.container}>
      <div className={cl.description}>
        <div className={cl.subtitle}>{itemSubtitle}</div>
        <div className={cl.option}>{itemOption}</div>
        <div className={cl.price}>${itemPrice}</div>
      </div>
      <div className={cl.quantityManage}>
        <QuantityButton
          disabled={itemQuantity === isDisabledButton(itemId, itemOption)}
          text="+"
          onClick={() => incrementQuantity(keyId)}
        />

        <div className={cl.quantity}>
          <span className={cl.optionText}>{itemQuantity}</span>
        </div>

        <QuantityButton
          disabled={itemQuantity === 1}
          text="-"
          onClick={() => decrementQuantity(keyId)}
        />
      </div>
      <div className={cl.image}>
        <img src={itemImage} alt={itemImage} />
      </div>
      <QuantityButton text="x" onClick={() => deleteItem(keyId)} />
    </div>
  );
};
