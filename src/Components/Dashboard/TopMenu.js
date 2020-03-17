import React from 'react';
import logoutImg from '../../img/logout.svg';

var Boolean = false;

function showAdmin() {
  if (Boolean) {
    document.querySelector('.menu-dashboard').style.left = '-22%';
    for(let i = 0 ; i < document.getElementsByClassName("content-dashboard").length;i++) {
      document.getElementsByClassName("content-dashboard")[i].style.flex = '0 0 100%';
      document.getElementsByClassName("content-dashboard")[i].style.maxWidth = '100%';
    }
    Boolean=!Boolean
  }
  else {
    document.querySelector('.menu-dashboard').style.left = '0';
    for(let i = 0 ; i < document.getElementsByClassName("content-dashboard").length;i++) {
      document.getElementsByClassName("content-dashboard")[i].style.flex = '0 0 80%';
      document.getElementsByClassName("content-dashboard")[i].style.maxWidth = '80%';
    }
    Boolean=!Boolean
  }
}

const TopMenu = () => {
  return(
    <header className="header-dashboard">
      <span className="header-dashboard__logo">
        <a href="#" onClick={(e) => {
          e.preventDefault();
          showAdmin();
        }}>Admin</a>
      </span>
      <span className="header-dashboard__logout">
        <img src={logoutImg} alt="logo" />
      </span>
    </header>
  )
}

export default TopMenu;