import React, { useEffect, useState } from 'react';
import { fetchContent } from './utils/content-utils';
import { Project } from './Project';

export const ProjectsLayout = (props) => {
  const [projects, setProjects] = useState(null);
  useEffect(() => {
    document.title = 'Work | Kyle Lee';
    const getData = async () => {
      const projects = await fetchContent({ content_type: 'project' });
      setProjects(projects);
    };
    getData();
  }, []);
  return projects?.map((project, i) => {
    return <Project key={i} project={project} />;
  });
};
