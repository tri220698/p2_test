import React, { useEffect, useState } from 'react';
import { Tittle_part, Togle, ListTheme, formatter, displayStar } from '../mixin/mixin'
import { item_theme } from '../../database/datatext'
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { ProductItem } from '../mixin/mixin'


const HightLight = (props, { history }) => {

  const { t } = useTranslation();
  const { products, add } = props
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
                  <ProductItem items={products} add={add} />
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



