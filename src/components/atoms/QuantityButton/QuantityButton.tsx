import React from 'react';
import cl from './QuantityButton.module.css';

interface IQuantityButton {
  text: string;
  disabled?: boolean;
  onClick: () => void;
}

export const QuantityButton = ({
  text,
  disabled,
  onClick,
}: IQuantityButton) => {
  return (
    <button disabled={disabled} className={cl.container} onClick={onClick}>
      <span className={cl.text}>{text}</span>
    </button>
  );
};
