import React, { useEffect, useState } from 'react';
import { fetchContent } from './utils/content-utils';

import { Sidebar } from './Sidebar';
export const Home = (props) => {
  useEffect(() => {
    document.title = 'Home | Kyle Lee';
  }, []);
  return <div className="grid-container">home</div>;
};
