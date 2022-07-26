import React from 'react';
import { Link } from 'react-router-dom';
export const SidebarLink = (props) => {
  const {
    navItem: {
      fields: { title, path },
    },
  } = props;

  return (
    <li>
      <Link to={path}>{title}</Link>
    </li>
  );
};
