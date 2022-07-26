import React, { useEffect, useState } from 'react';
import { RoutesManager } from './RoutesManager';
import { Sidebar } from './Sidebar';
import { fetchContent } from './utils/content-utils';
export const App = (props) => {
  const [navBarItems, setNavBarItems] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      const sidebarLinks = await fetchContent({ content_type: 'navbarItems' });
      setNavBarItems(sidebarLinks);
      setIsLoading(false);
    };
    getData();
  }, []);

  if (isLoading) {
    return null;
  }
  return (
    <div className="grid-container">
      <div className="grid-item-1">
        <Sidebar navBarItems={navBarItems} />
      </div>
      <div className="grid-item-1">
        <RoutesManager />
      </div>
    </div>
  );
};
