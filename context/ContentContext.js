import { createContext } from 'react';
import { api } from '../src/utils/api-utils';
export const AuthContext = createContext('default');

const getContent = async () => {
  const content = await api.get('content');
  return content;
};
