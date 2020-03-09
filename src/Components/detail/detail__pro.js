import React from 'react'
import * as img__Arr from '../../img/index'
import { DropdownList } from 'react-widgets'
import { useTranslation } from 'react-i18next';
import { formatter } from '../mixin/mixin'


const DetailPro = (props) => {

  const { item } = props
  const ListSize = ['Big', 'Normal', 'Small']
  const ListColor = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo blue', 'violet']
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <div className="product__detail">
        <div className="product__detail__img">
          <img src={`http://localhost:3000/image/product_${item.id}.jpg`} className="img"></img>
          <div className="product__detail__bonus">
            <img className="img" src={img__Arr.product2} />
            <img className="img" src={img__Arr.product3} />
            <img className="img" src={img__Arr.product4} />
            <img className="img" src={img__Arr.product5} />
            <img className="img" src={img__Arr.product6} />
          </div>
        </div>
        <div className="product__detail__info">
          <h3>{item.name}</h3>
          <p className="star">
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="far fa-star" />
            {12 +" ( "+ t('common.rate')+" )"}
            <span />
            <a href="#">{t('common.feedback')}</a>
          </p>
          <h4>{formatter.format(item.price)}</h4>
          <h5>{t('detail.infoDetail')}</h5>
          <p>
            {t('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercition ullamco laboris nisi ut aliquip ex ea commodo consequat...')}
          </p>
          <div className="info__dropdown">
            <div className="dropdown__item">
              <h5>{t('Size:')}</h5>
              <DropdownList defaultValue={t('detail.size')} data={ListSize}
                style={{ maxWidth: '157px' }}
              />
            </div>
            <div className="dropdown__item">
              <h5>{t('Màu sắc:')}</h5>
              <DropdownList defaultValue={t('detail.color')} data={ListColor}
                style={{ maxWidth: '157px' }}
              />
            </div>
          </div>
          <div className="info__count">
            <div className="count__input">
              <input placeholder="1" type="number" min='1' />
            </div>
            <div className="count__buy">
              <a href="#">{t('button.buyNow')}</a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default DetailPro