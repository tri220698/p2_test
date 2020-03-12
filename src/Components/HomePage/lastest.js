import React from 'react';
import { Tittle_part, Togle, ListNew, formatter, displayStar } from '../mixin/mixin'
import * as img__Arr from '../../img/index'
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { getProducts } from '../../action/action'
import { Link } from 'react-router-dom'
import { localUrl } from '.';


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
            {items.map((item, index) => (
              <div className="product__last -hide" key={index}>
                <div className="img__last">
                  <img src={process.env.PUBLIC_URL + item.image} alt="logo" className="img"></img>
                </div>
                <div className="text__last">
                  <h4>{item.name}</h4>
                  <p>
                    {displayStar(Math.round(item.countRate/item.votes))}
                    {item.votes + " ( " + t('common.rate') + " )"}
                  </p>
                  <p>{t('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore commo...')}</p>
                  <h4 className="-price">{formatter.format(item.price)}</h4>
                  <div className="item__button">
                    <Link className="-left" to="/login" onClick={(e) => { add(e, item) }
                    }>{t('button.buyNow')}</Link>
                    <a className="-right" href={localUrl+"/detail/"+item.id} >{t('button.detail')}</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Lastest