import React from 'react';
import { Rate } from '../Rate';
import cl from './ClothingItemCard.module.css';

interface IClothingItemCard {
  itemImage: string;
  itemSubtitle: string;
  itemPrice: number;
  itemRate: number;
}

export const ClothingItemCard = ({
  itemImage,
  itemSubtitle,
  itemPrice,
  itemRate,
}: IClothingItemCard) => {
  return (
    <div className={cl.clothingItemCard}>
      <div className={cl.clothingItemImage}>
        <img src={itemImage} alt={itemImage} />
      </div>
      <div className={cl.clothingItemDescription}>
        <div className={cl.clothingItemSubtitle}>{itemSubtitle}</div>
        <div className={cl.clothingItemRatenPrice}>
          <div className={cl.clothingItemPrice}>{itemPrice}$</div>
          <div>
            <Rate rate={itemRate} />
          </div>
        </div>
      </div>
    </div>
  );
};
