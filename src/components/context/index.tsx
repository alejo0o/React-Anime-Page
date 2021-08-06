import * as React from 'react';
import { createContext, useContext } from 'react';
import * as Cookies from 'js-cookie';

const AppContext = createContext('');

export function AppWrapper({ children }: { children: React.ReactNode }) {
  //User Provider
  const user = Cookies.get('user');

  return (
    <AppContext.Provider value={user ?? ''}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  //use User
  return useContext(AppContext);
}
