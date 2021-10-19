import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cl from './Electronics.module.css';
import { CategorySubtitle } from '../../components/atoms/CategorySubtitle';
import { ClothingItemCard } from '../../components/atoms/ClothingItemCard';
import { getElectronicsCatalogAction } from '../../core';
import { getElectronicsCatalogState } from '../../core/selectors/electronicsCatalogSelector';
import { Loader } from '../../components/atoms/Loader';

export const Electronics = () => {
  const dispatch = useDispatch();

  const { electronicsItems } = useSelector(getElectronicsCatalogState);

  useEffect(() => {
    dispatch(getElectronicsCatalogAction());
  }, [dispatch]);

  if (!electronicsItems) {
    return <Loader />;
  }

  return (
    <div className={cl.allClothes}>
      <CategorySubtitle subtitle="Electronics" />
      <div className={cl.allClothesCatalog}>
        {' '}
        {electronicsItems?.map((item) => (
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
