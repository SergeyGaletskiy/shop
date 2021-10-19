import React from 'react';
import cl from './CartButton.module.css';

interface ICartButton {
  text: string;
  disabled: boolean;
  type?: 'submit' | 'button';
  onClick: () => void;
  className?: string;
}

export const CartButton = ({
  text,
  type,
  disabled,
  onClick,
  className,
}: ICartButton) => {
  return (
    <button
      disabled={disabled}
      type={type}
      className={cl.btnStyle}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
