import React from 'react';
import TopMenu from './TopMenu';
import DashboardContent from './DashboardContent';

const Dashboard = () => {
  return(
    <React.Fragment>
      <TopMenu></TopMenu>
      <DashboardContent></DashboardContent>
    </React.Fragment>
  )
}

export default Dashboard;