import React from 'react'
import { App } from './App'
import './App.scss'
import './Project.scss'
import './SidebarLink.scss'
import './Sidebar.scss'
import './components/RichText.scss'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

const appElement = document.getElementById('app')
const root = createRoot(appElement)

export const rootRender = root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
