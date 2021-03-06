import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cl from './MenClothes.module.css';
import { CategorySubtitle } from '../../components/atoms/CategorySubtitle';
import { ClothingItemCard } from '../../components/molecules/ClothingItemCard';
import { getMenCatalogAction } from '../../core';
import { getMenCatalogState } from '../../core/selectors/menCatalogSelector';
import { Loader } from '../../components/atoms/Loader';

export const MenClothes = () => {
  const dispatch = useDispatch();

  const { menClothingItems } = useSelector(getMenCatalogState);

  useEffect(() => {
    dispatch(getMenCatalogAction());
  }, [dispatch]);

  if (!menClothingItems) {
    return <Loader />;
  }

  return (
    <div className={cl.container}>
      <CategorySubtitle subtitle="Men clothes" />
      <div className={cl.catalog}>
        {menClothingItems?.map((item) => (
          <ClothingItemCard
            itemId={item.id}
            key={item.id}
            itemImage={item.image}
            itemSubtitle={item.title}
            itemPrice={item.price}
            itemRate={item.rating.rate}
          />
        ))}
      </div>
    </div>
  );
};
