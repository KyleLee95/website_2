import React from 'react';
import { RoutesManager } from './RoutesManager';
import { Navbar } from './Navbar';
export const App = () => {
  return (
    <div>
      <Navbar />
      <RoutesManager />
    </div>
  );
};
