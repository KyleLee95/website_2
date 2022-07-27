import React, { useEffect, useState, createContext } from 'react'
import { RoutesManager } from './RoutesManager'
import { Sidebar } from './Sidebar'
import { fetchContent } from './utils/content-utils'

export const App = () => {
  const [navBarItems, setNavBarItems] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getData = async () => {
      const [navBarItems] = await Promise.all([
        fetchContent({ content_type: 'navbarItems' })
      ])
      setNavBarItems(navBarItems)
      setIsLoading(false)
    }
    getData()
  }, [])

  if (isLoading) {
    return 'Loading...'
  }
  return (
    <div className="grid-container">
      <div className="menu">
        <Sidebar navBarItems={navBarItems} />
      </div>
      <div className="content">
        <RoutesManager />
      </div>
      <div className="right"></div>
    </div>
  )
}
