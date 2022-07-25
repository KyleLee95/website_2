import { api } from './api-utils';
export const fetchContent = async (query, { single = false } = {}) => {
  const data = await api
    .get('/content/entries', { params: query })
    .then((response) => response.data);

  if (single) {
    return data.items?.[0] || null;
  }

  return data.items || [];
};

export const useContent = (
  query = {},
  { single = false, enabled = true } = {}
) => {
  const [content, setContent] = useState(single ? undefined : []);
  const [loading, setLoading] = useState(enabled);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    (async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await api
          .get('/content/entries', { params: query })
          .then((response) => response.data);

        setContent(single ? data.items?.[0] : data.items);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...Object.keys(query), ...Object.values(query), single, enabled]);

  return [content, loading, error];
};
