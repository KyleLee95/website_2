import React, { useContext } from 'react';
import { ProjectsLayout } from './ProjectsLayout';
import { CvLayout } from './CvLayout';
import { BioLayout } from './BioLayout';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Home';

export const RoutesManager = (props) => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/work" element={<ProjectsLayout />} />
      <Route exact path="/cv" element={<CvLayout />} />
      <Route exact path="/bio" element={<BioLayout />} />
    </Routes>
  );
};
