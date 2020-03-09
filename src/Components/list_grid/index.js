import React, { useState } from 'react';
import { BreadCrum, ListTheme, ListColor, ListImg } from '../mixin/mixin'
import * as img__Arr from '../../img/index'
import { DropdownList } from 'react-widgets'
import List from './List'
import Grid from './Grid'
import {list_item,list_money,list_color,list_img} from '../../database/datatext'


const ListGrid = () => {

  const list__Dropitem = ['Tên sản phẩm', 'Giá', 'Loại sản phẩm', 'Đánh giá']
  const product__DropItem = [9, 18]
  const [dropAmount, setDropAmount] = useState(9)

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
                    <DropdownList data={list__Dropitem} defaultValue={'Tên sản phẩm'} style={{ width: '165px' }}
                    />
                  </div>
                  <div className="order__style -small">
                    <p>Show:</p>
                    <DropdownList data={product__DropItem} value={dropAmount} style={{ width: '90px' }}
                    onChange={(value)=>{
                      setDropAmount(value)
                    }}/>
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
                {dropAmount===9 ? <List /> : <Grid />}
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default ListGrid

