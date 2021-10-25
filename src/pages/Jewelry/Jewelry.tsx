import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cl from './Jewelry.module.css';
import { CategorySubtitle } from '../../components/atoms/CategorySubtitle';
import { ClothingItemCard } from '../../components/molecules/ClothingItemCard';
import { getJewelryCatalogAction } from '../../core';
import { getJewelryCatalogState } from '../../core/selectors/jewelryCatalogSelector';
import { Loader } from '../../components/atoms/Loader';

export const Jewelry = () => {
  const dispatch = useDispatch();

  const { jewelryItems } = useSelector(getJewelryCatalogState);

  useEffect(() => {
    dispatch(getJewelryCatalogAction());
  }, [dispatch]);

  if (!jewelryItems) {
    return <Loader />;
  }

  return (
    <div className={cl.container}>
      <CategorySubtitle subtitle="Jewelry" />
      <div className={cl.catalog}>
        {jewelryItems?.map((item) => (
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
