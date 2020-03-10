import React, { useState } from 'react';
import * as img__Arr from '../../img/index'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'



const Grid = (props) => {

  const {item}= props
  const { t } = useTranslation();

  return (
    <div className="product__item">
      <div className="item__img">
        <img className="img" src={img__Arr.product1} />
      </div>
      <div className="item__info">
        <h4 className="-price">1.550.000 Đ</h4>
        <h4>MÁY KHOAN BLACK DECKER</h4>
        <p>
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="far fa-star" />
          <br />
          {12 +" ( "+ t('common.rate')+" )"}
                      </p>
      </div>
      <div className="item__button">
        <a className="-left" href="#">{t('button.buyNow')}</a>
        <Link className="-right" to={"/detail/" + item.id} >{t('button.detail')}</Link>
      </div>
    </div>
  )
}

export default Grid