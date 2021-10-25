import React, { useState } from 'react';
import { Advertisement } from '../../atoms/Advertisement';
import cl from './AdvBar.module.css';

export const AdvBar = () => {
  const [activeAdv, setActiveAdv] = useState(2);

  const advData = [
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1560243563-062bfc001d68?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2670&q=80',
      tagline: 'Set a trend',
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
      tagline: 'Dress like it is your day',
    },
    {
      id: 3,
      image:
        'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2670&q=80',
      tagline: 'Fashion that Talks',
    },
    {
      id: 4,
      image:
        'https://images.unsplash.com/photo-1549037173-e3b717902c57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
      tagline: 'Architecting your Personality',
    },
    {
      id: 5,
      image:
        'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2670&q=80',
      tagline: 'A Spirit of New Wearing',
    },
  ];

  return (
    <div className={cl.advBar}>
      {advData.map((advertisement, i) => (
        <Advertisement
          advImage={advertisement.image}
          className={
            i !== activeAdv ? cl.advCard : `${cl.advCard} ${cl.active}`
          }
          taglineText={advertisement.tagline}
          onClick={() => setActiveAdv(i)}
        />
      ))}
    </div>
  );
};
