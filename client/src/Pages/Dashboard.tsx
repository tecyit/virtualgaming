import React from 'react';
import { Helmet } from 'react-helmet';
import MainLayout from '../Components/Layouts/MainLayout';
import TabMenu from '../Components/Nav/TabMenu';

const Dashboard = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <MainLayout>
        <TabMenu />
      </MainLayout>
    </>
  );
};

export default Dashboard;
