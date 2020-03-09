import React, { useState } from 'react';
import * as img__Arr from '../../img/index'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'


const List = (props) => {

  const { item } = props
  const { t } = useTranslation();

  return (
    <div className="product__last -hide">
      <div className="img__last">
        <img className="img" src={img__Arr.product1} />
      </div>
      <div className="text__last">
        <h4>MÁY KHOAN CNC 3D</h4>
        <p>
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="far fa-star" />
          {12 + " ( " + t('common.rate') + " )"}
        </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore commo...</p>
        <h4 className="-price">2.350.000 Đ</h4>
        <div className="item__button">
          <a className="-left" href="#">{t('button.buyNow')}</a>
          <Link className="-right" to={"/detail/" + item.id} >{t('button.detail')}</Link>
        </div>
      </div>
    </div>
  )
}

export default List