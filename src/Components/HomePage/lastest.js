import React from 'react';
import { Tittle_part, Togle, ListNew, formatter, displayStar } from '../mixin/mixin'
import * as img__Arr from '../../img/index'
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { ProductLast } from '../mixin/mixin'


const Lastest = (props) => {

  const { t } = useTranslation();
  const { new_theme, items, add } = props
  const dispatch = useDispatch()


  return (
    <React.Fragment>
      <section className="lastest">
        <div className="container">
          <div className="row">
            <div className="title__last">
              <Tittle_part text={t('common.lasest')} />
              <ListNew items={new_theme}></ListNew>
              <Togle></Togle>
            </div>
          </div>
          <div className="row">
            <ProductLast items={items} add={add} />
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Lastest