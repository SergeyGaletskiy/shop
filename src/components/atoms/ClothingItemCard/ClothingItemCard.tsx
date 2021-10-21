import React from 'react';
import { useHistory } from 'react-router';
import { Rate } from '../Rate';
import cl from './ClothingItemCard.module.css';

interface IClothingItemCard {
  itemId?: number;
  itemImage?: string;
  itemSubtitle?: string;
  itemPrice?: number;
  itemRate: number;
  onClick?: () => void;
}

export const ClothingItemCard = ({
  itemImage,
  itemSubtitle,
  itemPrice,
  itemRate,
  itemId,
  onClick,
}: IClothingItemCard) => {
  const history = useHistory();

  return (
    <div
      className={cl.container}
      onClick={() => history.push(`/items/${itemId}`)}
    >
      <div className={cl.image}>
        <img src={itemImage} alt={itemImage} />
      </div>
      <div className={cl.description}>
        <div className={cl.subtitle}>{itemSubtitle}</div>
        <div className={cl.rateAndPrice}>
          <div className={cl.price}>{itemPrice}$</div>
          <div>
            <Rate rate={itemRate} />
          </div>
        </div>
      </div>
    </div>
  );
};
