import React, { useEffect } from 'react'
import * as img__Arr from '../../img/index'
import { useTranslation } from 'react-i18next';

const CartItem = (props) => {

  const { t } = useTranslation();
  const { items } = props


  return (
    <React.Fragment>
      <tbody>
        {items.map((item, index) => (
          <tr key={index}>
            <td >1</td>
            <td>
              <img className="img" src={img__Arr.product1} />
            </td>
            <td>{item.name}</td>
            <td>{t('2.350.00 Đ')}</td>
            <td>
              <input placeholder="1" type="number" min='1' />
            </td>
            <td>{t('2.350.00 Đ')}</td>
            <td>
              <a href="#">
                <i className="fas fa-times" />
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </React.Fragment>
  )
}


export default CartItem