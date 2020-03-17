import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'


export const Tittle_part = (props) => {
  const { text } = props
  return (
    <div className="title__text">
      <h3>
        <i className="fa fa-th-large" />
        {text}
      </h3>
    </div>
  )
}

export const Togle = () => {
  return (
    <div className="title__togle">
      <div className="togle -left">
        <i className="fa fa-caret-right" />
      </div>
      <div className="togle -right">
        <i className="fa fa-caret-left" />
      </div>
    </div>
  )
}

export const ListTheme = (props) => {
  const { items } = props
  return (
    <ul>
      {items.map((item, index) => {
        if (index === 0) {
          return (
            <li className="-active" key={index}>
              <a href="#">
                <i className={item.icon} />
                {item.text}
              </a>
              <i className="fas fa-angle-down -hide" />
            </li>
          )
        }
        else {
          return (
            <li key={index}>
              <a href="#">
                <i className="fa fa-th-large"></i>
                {item.text}
              </a>
              <i className="fas fa-angle-down -hide" />
            </li>
          )
        }
      })}
    </ul>
  )
}


export const ListColor = (props) => {
  const { items } = props;

  return (
    <ul>
      {items.map((item, index) => {
        if (index === 0) return (
          <li className="-active" key={index}>
            <a href="#">
              <i className={item.icon} />
              {item.text}
            </a>
            <i className="fas fa-angle-down -hide" />
          </li>
        )
        else return (
          <li key={index}>
            <a href="#">
              <span style={{ backgroundColor: item.color }} />
              {item.text}
            </a>
          </li>)
      })}
    </ul>

  )
}

export const ListImg = (props) => {

  const { t } = useTranslation();
  const { items } = props

  return (
    <ul>
      {items.map((item, index) => {
        if (index === 0)
          return (
            <li className="-active" key={index}>
              <a href="#">
                <i className={item.icon} />
                {item.text}
              </a>
              <i className="fas fa-angle-down -hide" />
            </li>
          )
        else return (
          <li key={index}>
            <div className="list__img">
              <div className="img__link">
                <img className="img" src={item.img} />
              </div>
              <div className="img__info">
                <a href="#">
                  <h3>{t('MÁY KHOAN BLACK DECKER LOẠI 1')}</h3>
                  <p>{t('1.550.000Đ')}</p>
                </a>
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export const ListNew = (props) => {
  const { items } = props
  return (
    <div className="title_list">
      {items.map((item, index) =>
        <a href="#" key={index}> {item}
        </a>)}
    </div>
  )
}


export const BreadCrum = (props) => {
  const { path } = props
  return (
    <div className="container">
      <div className="row">
        <div className="breadcrumb">
          <span>{("Home")}</span>
          <span> / </span>
          <span>{(path)}</span>
        </div>
      </div>
    </div>
  )
}

export const formatter = new Intl.NumberFormat('it-IT', {
  style: 'currency',
  currency: 'VND',
  minimumFractionDigits: 0
})

export const checkInclude = (data, item) => {
  let bool = false
  data.forEach(cartOnly => {
    if (cartOnly.id === item.id)
      bool = true
  });
  return bool
}

export const displayStar = (countRate) => {
  if (countRate > 0) {
    let element = []
    for (let i = 1; i <= countRate; i++) {
      element.push(<i key={i} className="fa fa-star" />)
    }
    for (let i = 1; i <= (5 - countRate); i++) {
      element.push(<i key={countRate + i} className="far fa-star" />)
    }
    return element;
  } else {
    return (
      <React.Fragment>
        <i className="far fa-star" />
        <i className="far fa-star" />
        <i className="far fa-star" />
        <i className="far fa-star" />
        <i className="far fa-star" />
      </React.Fragment>
    );
  }
}


export const TotalMoney = (data) => {
  let totalMoney = 0
  data.map(item => {
    totalMoney += (item.price * item.quantity)
  })
  return totalMoney
}

export const formatDate = (date) => {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
}

export const TotalQuan = (data) => {
  let totalQuantity = 0
  data.map(item => {
    totalQuantity += parseInt(item.quantity)
  })
  return totalQuantity
}

export const localUrl = window.location.protocol + "//" + window.location.host;

export const ProductItem = (props) => {

  const { items, add } = props
  const { t } = useTranslation();

  return (
    <React.Fragment>
      {items.map((item, index) => (
        < div className="product__item" key={index}>
          <div className="item__img">
            <img src={process.env.PUBLIC_URL + item.image} alt="logo" className="img"></img>
          </div>
          <div className="item__info">
            <h4 className="-price">{formatter.format(item.price)}</h4>
            <h4>{item.name}</h4>
            <p>
              {displayStar(Math.round(item.countRate / item.votes))}
              <br />
              {item.votes + " ( " + t('common.rate') + " )"}
            </p>
          </div>
          <div className="item__button">
            <Link className="-left" to="/login" onClick={(e) => { add(e, item) }
            }>{t('button.buyNow')}</Link>
            <a className="-right" href={localUrl + "/detail/" + item.id} >{t('button.detail')}</a>
          </div>
        </div >
      ))}
    </React.Fragment>
  )
}


export const ProductLast = (props) => {
  const { items, add } = props
  const { t } = useTranslation();

  return (
    <React.Fragment>
      {
        items.map((item, index) => (
          <div className="product__last -hide" key={index}>
            <div className="img__last">
              <img src={process.env.PUBLIC_URL + item.image} alt="logo" className="img"></img>
            </div>
            <div className="text__last">
              <h4>{item.name}</h4>
              <p>
                {displayStar(Math.round(item.countRate / item.votes))}
                {item.votes + " ( " + t('common.rate') + " )"}
              </p>
              <p>{t('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore commo...')}</p>
              <h4 className="-price">{formatter.format(item.price)}</h4>
              <div className="item__button">
                <Link className="-left" to="/login" onClick={(e) => { add(e, item) }
                }>{t('button.buyNow')}</Link>
                <a className="-right" href={localUrl + "/detail/" + item.id} >{t('button.detail')}</a>
              </div>
            </div>
          </div>
        ))
      }
    </React.Fragment>
  )
}