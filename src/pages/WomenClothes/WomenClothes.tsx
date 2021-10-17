import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cl from './WomenClothes.module.css';
import { CategorySubtitle } from '../../components/atoms/CategorySubtitle';
import { ClothingItemCard } from '../../components/atoms/ClothingItemCard';
import { getWomenCatalogAction } from '../../core';
import { getWomenCatalogState } from '../../core/selectors/womenCatalogSelector';
import { Loader } from '../../components/atoms/Loader';

export const WomenClothes = () => {
  const dispatch = useDispatch();

  const { womenClothingItems } = useSelector(getWomenCatalogState);

  useEffect(() => {
    dispatch(getWomenCatalogAction());
  }, [dispatch]);

  if (!womenClothingItems) {
    return <Loader />;
  }

  return (
    <div className={cl.allClothes}>
      <CategorySubtitle subtitle="Women clothes" />
      <div className={cl.allClothesCatalog}>
        {' '}
        {womenClothingItems?.map((item) => (
          <ClothingItemCard
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
