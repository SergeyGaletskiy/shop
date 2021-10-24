import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cl from './AllClothes.module.css';
import { CategorySubtitle } from '../../components/atoms/CategorySubtitle';
import { ClothingItemCard } from '../../components/atoms/ClothingItemCard';
import { getCatalogAction } from '../../core';
import { getCatalogState } from '../../core/selectors/catalogSelector';
import { AdvBar } from '../../components/molecules/AdvBar';
import { Loader } from '../../components/atoms/Loader';
// import { useHistory } from 'react-router';

export const AllClothes = () => {
  // const history = useHistory();
  const dispatch = useDispatch();

  const { clothingItems } = useSelector(getCatalogState);

  useEffect(() => {
    dispatch(getCatalogAction());
  }, [dispatch]);

  if (!clothingItems) {
    return <Loader />;
  }

  return (
    <div className={cl.container}>
      <CategorySubtitle subtitle="All clothes" />
      {/* <AdvBar /> */}
      <div className={cl.catalog}>
        {' '}
        {clothingItems?.map((item) => (
          <ClothingItemCard
            // onClick={() => history.push(`/items/${item.id}`)}
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
