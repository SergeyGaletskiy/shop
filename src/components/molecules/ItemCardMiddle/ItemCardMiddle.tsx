import React from 'react';
import cl from './ItemCardMiddle.module.css';

interface IItemCardMiddle {
  itemId: number;
  itemImage: string;
  itemSubtitle: string;
  itemPrice: number;
  itemQuantity: number;
  itemOption: string;
}

export const ItemCardMiddle = ({
  itemId,
  itemImage,
  itemSubtitle,
  itemPrice,
  itemQuantity,
  itemOption,
}: IItemCardMiddle) => {
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
        <div className={cl.quantity}>
          <span className={cl.optionText}>{itemQuantity} pcs.</span>
        </div>
      </div>
      <div className={cl.image}>
        <img src={itemImage} alt={itemImage} />
      </div>
    </div>
  );
};
