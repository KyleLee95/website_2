import React, { useEffect, useState } from 'react';
import { fetchContent } from './utils/content-utils';

import { Sidebar } from './Sidebar';
export const Home = (props) => {
  const [fibNumber, setFibNumber] = useState(1);
  useEffect(() => {
    document.title = 'Home | Kyle Lee';
  }, []);

  return (
    <div className="grid-container">
      <input
        onChange={(e) => {
          console.log(e.target.value);
          setFibNumber(e.target.value);
        }}
        type="range"
        min="1"
        max="100"
        value={fibNumber}
        className="slider"
        id="myRange"
      />
    </div>
  );
};
