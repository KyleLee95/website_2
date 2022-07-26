import React from 'react';
import { RichText } from './components/RichText';

export const Project = (props) => {
  const {
    project: { fields },
  } = props;
  const {
    description: { content },
    title,
    url,
  } = fields;

  return (
    <div>
      <h3>{title}</h3>
      <RichText text={content[0]} />
      <a href={url} target="_blank">
        {url}
      </a>
    </div>
  );
};
