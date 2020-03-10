import React, { useEffect, useState } from 'react';
import { Tittle_part, Togle, ListTheme, formatter } from '../mixin/mixin'
import { item_theme } from '../../database/datatext'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';

const HightLight = (props, { history }) => {

  const { t } = useTranslation();
  const { products } = props
  const dispatch = useDispatch()

  return (
    <React.Fragment>
      <section className="highlights">
        <div className="container">
          <div className="row">
            <div className="highltghts__title">
              <Tittle_part text={t('common.highlight')} />
              <Togle></Togle>
            </div>
          </div>
          <div className="row">
            <div className="highlights__product">
              <div className="left__item">
                <ListTheme items={item_theme} />
              </div>
              <div className="right__item">
                <div className="list__product">
                  {products.map((item, index) => (
                    < div className="product__item" key={index}>
                      <div className="item__img">
                        <img src={process.env.PUBLIC_URL + item.image} alt="logo" className="img"></img>
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
                          {12 +" ( "+ t('common.rate')+" )"}
                        </p>
                      </div>
                      <div className="item__button">
                        <a className="-left" href="#">{t('button.buyNow')}</a>
                        <Link className="-right" to={"/detail/" + item.id} >{t('button.detail')}</Link>
                      </div>
                    </div >
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default HightLight



