import React from 'react';
import cl from './Advertisement.module.css';

interface IRate {
  taglineText: string;
  className: string;
  advImage: string;
  onClick: () => void;
}

export const Advertisement = ({
  taglineText,
  onClick,
  className,
  advImage,
}: IRate) => {
  return (
    <div className={className} onClick={onClick}>
      <img className={cl.advImage} src={advImage} alt="" />
      <h3 className={cl.advCardTagline}>{taglineText}</h3>
    </div>
  );
};

// for (const $slide of $slides) {
//   $slide.addEventListener('click', () => {
//     clearActiveClasses();

//     $slide.classList.add('active');
//   });
// }

// function clearActiveClasses() {
//   $slides.forEach(($slide) => {
//     $slide.classList.remove('active');
//   });
// }
