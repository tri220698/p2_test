import React, { useState } from 'react';
import * as img__Arr from '../../img/index'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'
import { formatter } from '../mixin/mixin'



const Grid = (props) => {

  const { items } = props
  const { t } = useTranslation();

  return (
    <React.Fragment>
      {items.map((item, index) => (
        <div className="product__item" key={index}>
          <div className="item__img">
            <img className="img" src={process.env.PUBLIC_URL + item.image} />
          </div>
          <div className="item__info">
            <h4 className="-price">{formatter.format(item.price)}</h4>
            <h4>{item.name}</h4>
            <p>
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="far fa-star" />
              <br />
              {12 + " ( " + t('common.rate') + " )"}
            </p>
          </div>
          <div className="item__button">
            <a className="-left" href="#">{t('button.buyNow')}</a>
            <Link className="-right" to={"/detail/"+item.id} >{t('button.detail')}</Link>
          </div>
        </div>
      ))}
    </React.Fragment>
  )
}

export default Grid