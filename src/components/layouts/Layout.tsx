import * as React from 'react';
import { ReactNode } from 'react';
import Navbar from '../navbar';
import { AppWrapper } from '../context';

const Layout = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <div>
      <AppWrapper>
        <Navbar>{children}</Navbar>
      </AppWrapper>
    </div>
  );
};

export default Layout;
