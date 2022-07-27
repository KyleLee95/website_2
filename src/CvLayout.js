import React, { useEffect, useState } from 'react';
import { fetchContent } from './utils/content-utils';

export const CvLayout = (props) => {
  const [cvItems, setCVItems] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    document.title = 'CV | Kyle Lee';
    const getData = async () => {
      const cvItems = await fetchContent({ content_type: 'cv' });
      setCVItems(cvItems);
      setIsLoading(false);
    };
    getData();
  }, []);

  if (isLoading) {
    return null;
  }

  const downloadURL = 'https:' + cvItems[0].fields.file.fields.file.url;
  return (
    <>
      {cvItems?.map((item, i) => {
        return (
          <a href={downloadURL} download>
            {cvItems[0].fields.cv}
          </a>
        );
      })}
    </>
  );
};
