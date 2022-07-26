import React from 'react';
import { RichText } from './RichText';

export const Paragraph = (props) => {
  const { text } = props;
  return (
    <>
      <RichText text={text} />
      <br />
    </>
  );
};
