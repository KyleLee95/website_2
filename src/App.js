import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { RoutesManager } from './RoutesManager';

export const App = (props) => {
  const value = useContext(AuthContext);

  return (
    <div>
      <AuthContext.Provider value="test">
        <RoutesManager />
      </AuthContext.Provider>
    </div>
  );
};
