import React, { useState } from 'react'
import Info from './Info'
import Comment from './comment'
import { useTranslation } from 'react-i18next';


const Tag = () => {

  const [Bool, setBool] = useState(true)
  const { t } = useTranslation();


  return (
    <React.Fragment>
      <div className="product__tag">
        <div className="tag__item">
          <a className="-active -left" href="#" onClick={(e) => {
            e.preventDefault();
            document.querySelector(".tag__item a.-right").classList.remove('-active')
            document.querySelector(".tag__item a.-left").classList.add('-active')
            setBool(true)
          }}>{t('detail.info')}</a>
          <a href="#" className="-right" onClick={(e) => {
            e.preventDefault();
            document.querySelector(".tag__item a.-left").classList.remove('-active')
            document.querySelector(".tag__item a.-right").classList.add('-active')
            setBool(false)
          }}>{t('detail.cmt')}</a>
        </div>
        {Bool ? <Info /> : <Comment />}
      </div>
    </React.Fragment>
  )
}


export default Tag