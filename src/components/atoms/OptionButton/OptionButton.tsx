import React from 'react';
import cl from './OptionButton.module.css';

interface IOptionButton {
  text: string;
  disabled: boolean;
  type: 'submit' | 'button';
  onClick: () => void;
  selected?: any;
}

export const OptionButton = ({
  text,
  type,
  disabled,
  onClick,
  selected,
}: IOptionButton) => {
  return (
    <button
      disabled={disabled}
      type={type}
      className={cl.optionAvailable}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
