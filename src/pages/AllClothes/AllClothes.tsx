import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cl from './AllClothes.module.css';
import { CategorySubtitle } from '../../components/atoms/CategorySubtitle';
import { ClothingItemCard } from '../../components/atoms/ClothingItemCard';
import { getCatalogAction } from '../../core';
import { getCatalogState } from '../../core/selectors/catalogSelector';
import { AdvBar } from '../../components/molecules/AdvBar';
import { Loader } from '../../components/atoms/Loader';

export const AllClothes = () => {
  const dispatch = useDispatch();

  const { clothingItems } = useSelector(getCatalogState);

  useEffect(() => {
    dispatch(getCatalogAction());
  }, [dispatch]);

  if (!clothingItems) {
    return <Loader />;
  }

  return (
    <div className={cl.allClothes}>
      <CategorySubtitle subtitle="All clothes" />
      {/* <AdvBar /> */}
      <div className={cl.allClothesCatalog}>
        {' '}
        {clothingItems?.map((item) => (
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
