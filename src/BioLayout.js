import React, { useEffect, useState } from 'react';
import { fetchContent } from './utils/content-utils';
import { Paragraph } from './components/Paragraph';
export const BioLayout = (props) => {
  const [about, setAbout] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  useEffect(() => {
    document.title = 'Bio | Kyle Lee';
    const getData = async () => {
      const projects = await fetchContent({ content_type: 'about' });
      setAbout(projects);
    };
    getData();
  }, []);
  if (!about) {
    return null;
  }
  //destructuring
  const {
    fields: {
      avatar: {
        fields: {
          file: {
            url,
            details: { image },
          },
        },
      },
      bio: { content },
    },
  } = about[0];

  const useableURL = 'https' + url;
  if (isLoading) {
    return 'Loading...';
  }
  return (
    <div>
      <img
        src={`https:${url}`}
        alt="me"
        width={image.width / 6}
        height={image.height / 6}
      />

      {content.map((paragraph, i) => {
        return <Paragraph key={i} text={paragraph} />;
      })}
    </div>
  );
};
