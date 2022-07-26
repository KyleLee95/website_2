import React, { useEffect, useState } from 'react';
import { fetchContent } from './utils/content-utils';
import { Project } from './Project';

export const CvLayout = (props) => {
  const [projects, setProjects] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    document.title = 'CV | Kyle Lee';
    const getData = async () => {
      const projects = await fetchContent({ content_type: 'project' });
      setProjects(projects);
      setIsLoading(false);
    };
    getData();
  }, []);

  if (isLoading) {
    return null;
  }
  return projects?.map((project, i) => {
    return <Project key={i} project={project} />;
  });
};
