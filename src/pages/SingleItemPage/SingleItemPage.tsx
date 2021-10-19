import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cl from './SingleItemPage.module.css';
import { getSingleItemAction } from '../../core';
import { getSingleItemState } from '../../core/selectors/singleItemSelector';
import { Loader } from '../../components/atoms/Loader';
import { useParams } from 'react-router-dom';
import { stockDatabase } from '../../mock/stockDatabase';
import { OptionButton } from '../../components/atoms/OptionButton';
import { CartButton } from '../../components/atoms/CartButton';
import { SingleItemPrice } from '../../components/atoms/SingleItemPrice';
import { SingleItemDescription } from '../../components/atoms/SingleItemDescription';
import { SingleItemTitle } from '../../components/atoms/SingleItemTitle';

export interface IUseParams {
  id: string;
}

export const SingleItemPage = () => {
  const dispatch = useDispatch();
  const params = useParams<IUseParams>();
  const itemId = params.id;
  const { singleItem } = useSelector(getSingleItemState);
  const [selectedItem, setSelectedItem] = useState({});

  useEffect(() => {
    dispatch(getSingleItemAction(itemId));
  }, [dispatch, itemId]);

  if (!singleItem || singleItem?.id !== +itemId) {
    return <Loader />;
  }

  const selectItemOption = (option: string) => {
    setSelectedItem({ ...selectedItem, id: itemId, option });
  };

  return (
    <div className={cl.allClothes}>
      <div className={cl.previewImages}>
        {[...Array(3)].map((image, i) => {
          return (
            <div key={i} className={cl.previewImage}>
              <img src={singleItem.image} alt="" />
            </div>
          );
        })}
      </div>
      <div className={cl.largeImage}>
        <img src={singleItem.image} alt="" />
      </div>
      <div className={cl.fullInfo}>
        <SingleItemTitle title={singleItem.title} />

        <div className={cl.options}>
          {stockDatabase.map((selectedId) =>
            selectedId.id === +itemId
              ? selectedId.stock.map((option) => (
                  <OptionButton
                    key={option.option}
                    type="button"
                    onClick={() => selectItemOption(option.option)}
                    disabled={option.amount > 0 ? false : true}
                    text={option.option}
                  />
                ))
              : ''
          )}
        </div>
        <SingleItemPrice price={singleItem.price} />

        <CartButton
          text="ADD TO CART"
          disabled={Object.keys(selectedItem).length > 0 ? false : true}
          onClick={() => console.log(selectedItem)}
        />

        <SingleItemDescription description={singleItem.description} />
      </div>
    </div>
  );
};