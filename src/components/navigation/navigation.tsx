import React from 'react';
import {Link} from 'react-router-dom';

export function Navigation() {
  return (
    <nav className='bg-gray-500 text-white'>
      <div className='max-w-screen-lg flex justify-between items-center mx-auto h-[50px] px-5'>
        <h3 className='font-bold'>
          <Link to='/'>Github Search</Link>
        </h3>

        <span>
          <Link to='/' className='mr-2'>
            Home
          </Link>
          <Link to='/favorites'>Favorites</Link>
        </span>
      </div>
    </nav>
  );
}
