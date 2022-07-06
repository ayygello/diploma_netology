import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main/Main';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import NotFound from './components/NotFound/NotFound';
import Catalog from './components/Catalog/Catalog';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/catalog.html' element={<Catalog />} />
      <Route path='/about.html' element={<About />} />
      <Route path='/contacts.html' element={<Contacts />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
