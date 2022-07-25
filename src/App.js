import React, { useEffect, useState } from 'react';
import { RoutesManager } from './RoutesManager';
import { fetchContent } from './utils/content-utils';
export const App = (props) => {
  const [projects, setProjects] = useState(null);
  useEffect(() => {
    const getProjects = async () => {
      const projects = await fetchContent({ content_type: 'project' });

      setProjects(projects);
    };
    getProjects();
  }, []);
  console.log(projects);
  return (
    <div>
      <RoutesManager />
    </div>
  );
};
