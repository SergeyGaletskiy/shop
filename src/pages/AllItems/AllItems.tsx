import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cl from './AllItems.module.css';
import { CategorySubtitle } from '../../components/atoms/CategorySubtitle';
import { ClothingItemCard } from '../../components/molecules/ClothingItemCard';
import { getCatalogAction } from '../../core';
import { getCatalogState } from '../../core/selectors/catalogSelector';
import { Loader } from '../../components/atoms/Loader';
// import { AdvBar } from '../../components/molecules/AdvBar';

export const AllItems = () => {
  const dispatch = useDispatch();
  const { allItems } = useSelector(getCatalogState);
  const lastElements = useRef<HTMLDivElement>(null);
  const observer = useRef() as any;

  const [visibleItems, setVisibleItems] = useState(allItems.slice(0, 6));

  useEffect(() => {
    dispatch(getCatalogAction());
  }, [dispatch]);

  useEffect(() => {
    if (!allItems) {
      return;
    }
    if (observer.current) {
      observer.current.disconnect();
    }
    var callback = function (entries: any, observer: any) {
      if (entries[0].isIntersecting && visibleItems.length <= allItems.length) {
        const countVisibleItems =
          visibleItems.length > 0 ? visibleItems.length : 0;
        setVisibleItems(allItems.slice(0, countVisibleItems + 3));
      }
    };
    observer.current = new IntersectionObserver(callback);
    observer.current.observe(lastElements.current);
  }, [allItems, visibleItems.length]);

  if (!allItems) {
    return <Loader />;
  }

  return (
    <div className={cl.container}>
      <CategorySubtitle subtitle="All items" />
      {/* <AdvBar /> */}
      <div className={cl.catalog}>
        {' '}
        {visibleItems?.map((item) => (
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
      <div className={cl.interceptor} ref={lastElements} />
    </div>
  );
};
