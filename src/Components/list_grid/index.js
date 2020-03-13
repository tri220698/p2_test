import React, { useState, useEffect } from 'react';
import { BreadCrum, ListTheme, ListColor, ListImg, checkInclude, displayStar } from '../mixin/mixin'
import { DropdownList } from 'react-widgets'
import List from './List'
import Grid from './Grid'
import { useDispatch, useSelector } from 'react-redux';
import { list_item, list_money, list_color, list_img } from '../../database/datatext'
import { getData, updateUser } from '../../database/db'
import { getSort, getProducts, addtoCart, updateOneCart, getUserCart, getCate } from '../../action/action'
import { useTranslation } from 'react-i18next';


const ListGrid = () => {

  const dispatch = useDispatch()
  const [list__Dropitem, setList] = useState(['Tên sản phẩm', 'Giá giảm', 'Giá tăng', 'Đánh giá'])
  const product__DropItem = [9, 18]
  const [dropAmount, setDropAmount] = useState(9)
  const [change, setChange] = useState(true)
  const sortBy = useSelector(state => state.sort)
  const products = useSelector(state => state.products)
  const [Bool, setBool] = useState(false)
  const { t } = useTranslation();
  const user = useSelector(state => state.user)
  const cart = useSelector(state => state.cart)

  const AddToCart = async (e, item) => {
    if (JSON.parse(sessionStorage.getItem('userData'))) {
      e.preventDefault();
      if (cart.length === 0) {
        updateCart(item)
      }
      else if (!checkInclude(cart, item)) {
        updateCart(item)
      }
      else {
        dispatch(updateOneCart(item.id))
        dispatch(getUserCart(user.cart))
        sessionStorage.setItem('userData', JSON.stringify(user))
        const add = await updateUser(user)
        alert(t('detail.update'))
      }
    }
    else {
      alert(t('detail.warning'))
    }
  }

  const updateCart = async (item) => {
    item.quantity = 1
    user.cart = [...user.cart, item]
    dispatch(addtoCart(item))
    sessionStorage.setItem('userData', JSON.stringify(user))
    const add = await updateUser(user)
    alert(t('detail.addCart'))
  }

  useEffect(() => {
    const getProduct = async () => {
      const listProduct = await getData('products')
      const listCate = await getData('category')
      dispatch(getProducts(listProduct))
      dispatch(getCate(listCate))
      setList([...list__Dropitem, ...listCate])
      setBool(true)
    }
    getProduct()
  }, [dispatch])

  if (Bool) {
    return (
      <React.Fragment>
        <BreadCrum path="Danh mục sản phẩm " />
        <section className="main__list">
          <div className="container">
            <div className="row">
              <div className="left__item" >
                <ListTheme items={list_item} />
                <ListTheme items={list_money} />
                <ListColor items={list_color} />
                <ListImg items={list_img} />
              </div>
              <div className="right__item">
                <div className="list__product" >
                  <div className="list__header">
                    <div className="order__style">
                      <p>Sắp xếp theo:</p>
                      <DropdownList data={list__Dropitem} defaultValue={sortBy} style={{ width: '165px' }}
                        onChange={(value) => {
                          dispatch(getSort(value))
                        }}
                      />
                    </div>
                    <div className="order__style -small">
                      <p>Show:</p>
                      <DropdownList data={product__DropItem} value={dropAmount} style={{ width: '90px' }}
                        onChange={(value) => {
                          setDropAmount(value)
                        }} />
                    </div>
                    <div className="order__button">
                      <span>
                        <a href="#" onClick={(e) => {
                          e.preventDefault();
                          document.querySelector(".order__button span a i.-right").classList.remove('-active')
                          document.querySelector(".order__button span a i.-left").classList.add('-active')
                          setChange(true)
                        }}>
                          <i className="fas fa-bars -left -active" />
                        </a>
                      </span>
                      <span>
                        <a href="#" onClick={(e) => {
                          e.preventDefault();
                          document.querySelector(".order__button span a i.-left").classList.remove('-active')
                          document.querySelector(".order__button span a i.-right").classList.add('-active')
                          setChange(false)
                        }}>
                          <i className="fas fa-th -right" />
                        </a>
                      </span>
                    </div>
                  </div>
                  {change ? <List items={sort(products, sortBy).slice(0, dropAmount)} add={AddToCart} /> : <Grid items={sort(products, sortBy).slice(0, dropAmount)} add={AddToCart} />}
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

export default ListGrid

const sort = (data, sort) => {
  switch (sort) {
    case 'Tên sản phẩm':
      return data.sort((a, b) => a.name.localeCompare(b.name));
    case 'Giá tăng':
      return data.sort((a, b) => a.price - b.price);
    case 'Giá giảm':
      return data.sort((a, b) => b.price - a.price);
    case 'Loại sản phẩm':
      return data.sort((a, b) => a.category.localeCompare(b.category));
    case 'Đánh giá':
      return data.sort((a, b) => b.votes - a.votes);
    default:
      return data.filter((item) => item.category === sort)

  }
}