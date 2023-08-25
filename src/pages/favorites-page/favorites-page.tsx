import React from 'react';
import {UseAppSelector} from '../../hooks/use-app-selector';
import {useActions} from '../../hooks/use-actions';

export function FavoritesPage() {
  const {removeFavorite} = useActions();
  const {favorites} = UseAppSelector((state) => state.github);

  const removeFromFavorite = (item: string) => {
    removeFavorite(item);
  };

  if (favorites.length === 0)
    return <p className='text-center px-5 pt-10'>No items.</p>;

  return (
    <div className='text-center max-w-screen-lg mx-auto px-5 pt-10 h-screen'>
      <ul className='list-none'>
        {favorites.map((item) => (
          <li key={item}>
            <a
              href={item}
              target='blank'
              className='mr-4 hover:opacity-30 hover:underline'
            >
              {item}
            </a>
            <span
              className='text-red-400 cursor-pointer hover:opacity-30'
              onClick={() => removeFromFavorite(item)}
            >
              remove
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
