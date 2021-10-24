import React from 'react';
import cl from './CartItemLittle.module.css';

interface ICartItemLittle {
  itemId: number;
  itemImage: string;
  itemSubtitle: string;
  itemPrice: number;
  itemQuantity: number;
  itemOption: string;
}

export const CartItemLittle = ({
  itemImage,
  itemSubtitle,
  itemPrice,
  itemQuantity,
  itemId,
  itemOption,
}: ICartItemLittle) => {
  return (
    <div className={cl.container}>
      <div className={cl.description}>
        <div className={cl.subtitle}>{itemSubtitle}</div>
        <div className={cl.price}>${itemPrice}</div>
        <div className={cl.option}>
          <span className={cl.optionText}>{itemOption}</span>
        </div>
      </div>
      <div className={cl.quantityManage}>
        <div className={cl.optionChange}>
          <span className={cl.optionText}>+</span>
        </div>
        <div className={cl.quantity}>
          <span className={cl.optionText}>{itemQuantity}</span>
        </div>
        <div className={cl.optionChange}>
          <span className={cl.optionText}>-</span>
        </div>
      </div>
      <div className={cl.image}>
        <img src={itemImage} alt={itemImage} />
      </div>
    </div>
  );
};
