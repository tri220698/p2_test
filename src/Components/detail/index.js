import React, { useEffect, useState } from 'react';
import { BreadCrum, ListTheme, ListImg } from '../mixin/mixin'
import * as img__Arr from '../../img/index'
import DetailPro from './detail__pro'
import Tag from './tag'
import { Tittle_part, Togle } from '../mixin/mixin'
import { list_item, list_img } from '../../database/datatext'
import { useSelector } from 'react-redux';
import {getProduct} from '../../database/db'
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

const Detail = (props) => {

  const [product,setProduct] = useState(Object);
  const dispatch = useDispatch()
  const { t } = useTranslation();
  const id = props.match.params.id;


  useEffect(() => {
    const GetProduct = async () => {
      const pro = await getProduct(id)
      setProduct(pro)
    }
    GetProduct()
  },[dispatch])

  if (product) {
    return (
      <React.Fragment>
        <BreadCrum path="Sản phẩm" />
        <section className="main__list">
          <div className="container">
            <div className="row">
              <div className="left__item">
                <ListTheme items={list_item} />
                <ListImg items={list_img} />
              </div>
              <div className="right__item">
                <DetailPro item={product} />
                <Tag id={id}/>
                <div className="product__same">
                  <div className="same__title">
                    <Tittle_part text={t('common.same')} />
                    <Togle></Togle>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
  else {
    return (
      <React.Fragment>

      </React.Fragment>
    )
  }

}

export default Detail
