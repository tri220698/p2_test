import React from 'react';
import { Tittle_part, Togle, ListNew, formatter, displayStar } from '../mixin/mixin'
import * as img__Arr from '../../img/index'
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { ProductItem } from '../mixin/mixin'

const Hot = (props) => {

  const { t } = useTranslation();
  const { new_theme, items, add } = props

  return (
    <React.Fragment>
      <section className="hot">
        <div className="container">
          <div className="row">
            <div className="hot__title" >
              <Tittle_part text={t('common.hot')} />
              <ListNew items={new_theme}></ListNew>
              <Togle></Togle>
            </div>
          </div>
          <div className="row -collum">
            <ProductItem items={items} add={add} />
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Hot