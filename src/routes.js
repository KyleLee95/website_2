import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './home';

export const RoutesManager = (props) => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
  );
};
