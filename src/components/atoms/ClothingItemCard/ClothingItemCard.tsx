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
  // console.log(history);

  return (
    <div
      className={cl.clothingItemCard}
      // onClick={onClick}
      onClick={() => history.push(`/items/${itemId}`)}
    >
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
