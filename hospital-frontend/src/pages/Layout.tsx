import React, { ReactNode } from 'react';
import NavBar from '../components/NavBar';

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

export default Layout;
