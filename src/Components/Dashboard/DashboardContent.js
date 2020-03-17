import React, { useState } from 'react';
import avatarImg from '../../img/admin-ui.svg';
import ContentUsers from './ContentUsers';

const DashboardContent = () => {
  const admin = JSON.parse(sessionStorage.getItem('userData')) || null;
  const [switchTab, setSwitchTab] = useState('dashboard');

  const switchPage =(switchTab)=>{
    switch(switchTab) {
      case 'dashboard':{
        return <div>Component DB</div>
      }
      case 'users':{
        return <ContentUsers></ContentUsers>;
      
      }
      case 'products': {
        return <div>Component Products</div>;
      }
      case 'account':{
        return <div>Component Account</div>
      }
      default:{
        return
      }
    }
  }
  
  return(
    <React.Fragment>
      <div className="menu-dashboard">
        <div className="menu-dashboard-top">
          <div className="menu-dashboard-top__avatar"><img src={avatarImg} alt="avatar" /></div>
          <p className="menu-dashboard-top__name">{admin.name}</p>
        </div>
        <hr />
        <div className="menu-dashboard-content">
          <div className="menu-dashboard-content__item" onClick={() => setSwitchTab('dashboard')}><span><img src={process.env.PUBLIC_URL + 'image/dashboard.svg'} alt="a" /></span>
            <p>Dashboard</p>
          </div>
          <div className="menu-dashboard-content__item -more"><span><img src={process.env.PUBLIC_URL + "./image/categories.svg"}
                alt="a" /></span>
            <p>Categories</p>
          </div>
          <div className="menu-dashboard-content__item"><span><img src={process.env.PUBLIC_URL+"./image/products.svg"} alt="a" /></span>
            <p>Products</p>
          </div>
          <div className="menu-dashboard-content__item" onClick={() => setSwitchTab('users')}><span><img src={process.env.PUBLIC_URL+"./image/users.svg"} alt="a" /></span>
            <p>Users</p>
          </div>
          <div className="menu-dashboard-content__item" onClick={() => setSwitchTab('account')}><span><img src={process.env.PUBLIC_URL+"./image/account.svg"} alt="a" /></span>
            <p>Account</p>
          </div>
        </div>
      </div>
      {switchPage(switchTab)}
    </React.Fragment>
  )
}

export default DashboardContent;