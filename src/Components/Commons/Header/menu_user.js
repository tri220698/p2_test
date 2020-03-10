import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUserData } from '../../../action/action'
import { useTranslation } from 'react-i18next';



const MenuUser = ({ history },props) => {

  const { t } = useTranslation();
  const user = useSelector(state=>state.user)
  
  return (
    <ul>
      <li className="-left -usernot">
        <a href="#" onClick={(e) => {
          e.preventDefault();
          sessionStorage.removeItem('userData')
          window.location.reload()
        }}>{t('button.logout')}</a>
      </li>
      <li className="-left -usernot">
        <a href="#">{t(`header.hello`)+ user.name}</a>
      </li>
    </ul>
  )
}

export default MenuUser