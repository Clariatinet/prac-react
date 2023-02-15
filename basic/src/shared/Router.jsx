import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Detail from '../pages/Detail';
import Main from '../pages/Main';
import NotFound from '../pages/NotFound';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/detail' element={<Detail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
