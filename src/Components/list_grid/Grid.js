import React, { useState } from 'react';
import * as img__Arr from '../../img/index'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'
import { formatter, ProductItem } from '../mixin/mixin'


const Grid = (props) => {

  const { items, add } = props
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <ProductItem items={items} add={add} />
    </React.Fragment>
  )
}

export default Grid