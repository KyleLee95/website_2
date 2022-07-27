import React from 'react'
import { SidebarLink } from './SidebarLink'

export const Sidebar = (props) => {
  const { navBarItems } = props

  return (
    <ul>
      Kyle Lee
      {navBarItems
        ?.sort((a, b) => a.fields.id - b.fields.id) //sort by ID
        .map((navItem, i) => {
          return <SidebarLink key={i} navItem={navItem} />
        })}
    </ul>
  )
}
