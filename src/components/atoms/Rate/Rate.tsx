import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import cl from './Rate.module.css';

interface IRate {
  rate: number;
}

export const Rate = ({ rate }: IRate) => {
  const [rating, setRating] = useState(rate);

  useEffect(() => {
    setRating(Math.round(rate));
    return () => {};
  }, [rate, setRating]);

  return (
    <div className={cl.addRatingCard}>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i} className={cl.starRating}>
            <input
              type="radio"
              name="rating"
              value={rate}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              className={cl.star}
              color={ratingValue <= rating ? '#212033' : '#C4C4C4'}
              size="12"
            />
          </label>
        );
      })}
    </div>
  );
};
