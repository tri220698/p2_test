import React, { useState } from 'react';
import * as img__Arr from '../../img/index'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'
import { formatter } from '../mixin/mixin'


const List = (props) => {

  const { items } = props
  const { t } = useTranslation();

  return (
    <React.Fragment>
      {items.map((item, index) => (
        <div className="product__last -hide" key={index}>
          <div className="img__last">
            <img className="img" src={process.env.PUBLIC_URL + item.image} />
          </div>
          <div className="text__last">
            <h4>{item.name}</h4>
            <p>
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="far fa-star" />
              {12 + " ( " + t('common.rate') + " )"}
            </p>
            <p>{t('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore commo...')}</p>
            <h4 className="-price">{formatter.format(item.price)}</h4>
            <div className="item__button">
              <a className="-left" href="#">{t('button.buyNow')}</a>
              <Link className="-right" to={"/detail/"+item.id} >{t('button.detail')}</Link>
            </div>
          </div>
        </div>
      ))}
    </React.Fragment>
  )
}

export default List