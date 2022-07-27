import React from 'react'
import { ProjectsLayout } from './ProjectsLayout'
import { ContactLayout } from './ContactLayout'
import { BioLayout } from './BioLayout'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Home'

export const RoutesManager = (props) => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/work" element={<ProjectsLayout />} />
      <Route exact path="/contact" element={<ContactLayout />} />
      <Route exact path="/about" element={<BioLayout />} />
    </Routes>
  )
}
