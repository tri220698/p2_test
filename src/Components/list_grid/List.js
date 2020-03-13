import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { formatter, ProductLast } from '../mixin/mixin'


const List = (props) => {

  const { items , add } = props
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <ProductLast add={add} items={items} />
    </React.Fragment>
  )
}

export default List