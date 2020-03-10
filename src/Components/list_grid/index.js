import React, { useState, useEffect } from 'react';
import { BreadCrum, ListTheme, ListColor, ListImg } from '../mixin/mixin'
import { DropdownList } from 'react-widgets'
import List from './List'
import Grid from './Grid'
import { useDispatch, useSelector } from 'react-redux';
import { list_item, list_money, list_color, list_img } from '../../database/datatext'
import { getData } from '../../database/db'
import { getSort, getProducts } from '../../action/action'

const ListGrid = () => {

  const dispatch = useDispatch()
  const list__Dropitem = ['Tên sản phẩm', 'Giá giảm', 'Giá tăng', 'Loại sản phẩm', 'Đánh giá']
  const product__DropItem = [9, 18]
  const [dropAmount, setDropAmount] = useState(9)
  const sortBy = useSelector(state => state.sort)
  const products = useSelector(state => state.products)

  const [Bool, setBool] = useState(false)

  useEffect(() => {
    const getProduct = async () => {
      const listProduct = await getData('products')
      dispatch(getProducts(listProduct))
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
                          setDropAmount(9)
                        }}>
                          <i className="fas fa-bars -left -active" />
                        </a>
                      </span>
                      <span>
                        <a href="#" onClick={(e) => {
                          e.preventDefault();
                          document.querySelector(".order__button span a i.-left").classList.remove('-active')
                          document.querySelector(".order__button span a i.-right").classList.add('-active')
                          setDropAmount(18)
                        }}>
                          <i className="fas fa-th -right" />
                        </a>
                      </span>
                    </div>
                  </div>
                  {dropAmount === 9 ? <List items={sort(products, sortBy).slice(0, 9)} /> : <Grid items={sort(products, sortBy).slice(0, 18)} />}
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
    default:
      return data

  }
}