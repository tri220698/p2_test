import React from 'react';
import { Tittle_part, Togle, ListNew, formatter, displayStar } from '../mixin/mixin'
import * as img__Arr from '../../img/index'
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { getProducts } from '../../action/action'
import { ProductItem } from '../mixin/mixin'



const New = (props) => {

  const { t } = useTranslation();
  const { new_theme, items, add } = props
  const dispatch = useDispatch()


  return (
    <React.Fragment>
      <section className="news">
        <div className="container">
          <div className="row">
            <div className="new__title">
              <Tittle_part text={t('common.new')} />
              <ListNew items={new_theme}></ListNew>
              <Togle></Togle>
            </div>
          </div>
          <div className="row">
            <div className="new__product" >
              <ProductItem items={items} add={add} />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}


export default New

