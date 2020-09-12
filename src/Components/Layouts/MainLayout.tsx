import React from 'react';
import Nav from '../Nav';
import Footer from '../Footer';

interface Props {
  children: any;
}

const MainLayout = (props: Props) => {
  const { children } = props;
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
