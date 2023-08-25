import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {HomePage} from './pages/home-page/home-page';
import {FavoritesPage} from './pages/favorites-page/favorites-page';
import {Navigation} from './components/navigation/navigation';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/favorites' element={<FavoritesPage />} />
      </Routes>
    </>
  );
}

export default App;
