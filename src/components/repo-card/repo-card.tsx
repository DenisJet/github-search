import React, {useState} from 'react';
import {IRepo} from '../../models/models';
import {useActions} from '../../hooks/use-actions';
import {UseAppSelector} from '../../hooks/use-app-selector';

export function RepoCard({repo}: {repo: IRepo}) {
  const {addFavorite, removeFavorite} = useActions();
  const {favorites} = UseAppSelector((state) => state.github);

  const [isFavorite, setIsFavorite] = useState(
    favorites.includes(repo.html_url)
  );

  const addToFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    addFavorite(repo.html_url);
    setIsFavorite(true);
  };

  const removeFromFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    removeFavorite(repo.html_url);
    setIsFavorite(false);
  };

  return (
    <div className='border py-3 px-5 rounded mb-2 hover:bg-gray-100 transition-all'>
      <a href={repo.html_url} target='blank'>
        <h2 className='text-lg font-bold'>{repo.full_name}</h2>
        <p className='text-sm'>
          Forks: <span className='font-bold mr-2'>{repo.forks}</span>
          Watchers: <span className='font-bold mr-2'>{repo.watchers}</span>
        </p>
        <p className='text-sm font-thin'>{repo?.description}</p>

        {!isFavorite && (
          <button
            className='py-2 px-4 bg-yellow-400 mr-2 rounded hover:shadow-md transition-all'
            onClick={addToFavorite}
          >
            Add
          </button>
        )}

        {isFavorite && (
          <button
            className='py-2 px-4 bg-red-400 rounded hover:shadow-md transition-all'
            onClick={removeFromFavorite}
          >
            Remove
          </button>
        )}
      </a>
    </div>
  );
}
