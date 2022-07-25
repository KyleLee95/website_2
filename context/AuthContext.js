import { createContext } from 'react';
import { api } from '../src/utils/api-utils';
export const AuthContext = createContext('default');

const getUser = async () => {
  const users = await api.get('users').then((data) => console.log(data));
  return users;
};

console.log(getUser());
