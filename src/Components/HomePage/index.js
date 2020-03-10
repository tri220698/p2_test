import React, { useEffect, useState } from 'react';
import HightLight from './hightlight'
import Slider from './Slider'
import New from './new'
import FirstBanner from './banner1'
import Hot from './hot'
import SecondBanner from './banner2'
import Lastest from './lastest'
import Brand from './brand'
import Letter from './letter'
import { getData } from '../../database/db'
import { useDispatch } from 'react-redux';
import {new_theme} from '../../database/datatext'

const HomePage = () => {

  const [hightlightProduct, setHightlight] = useState(Object)
  const [newProduct, setNew] = useState(Object)
  const [lastestProdcut,setLasest]= useState(Object)
  const [hotProduct,setHot]= useState(Object)
  const [Bool, setBool] = useState(false)
  const dispatch = useDispatch()
  

  useEffect(() => {
    const getProduct = async () => {
      const listProduct = await getData('products')
      setHightlight(() => listProduct.sort((a, b) => a.bought - b.bought).slice(0, 6))
      setNew(() => listProduct.sort(()=> Math.random()-0.5).slice(0, 3))
      setLasest(() => listProduct.sort((a, b) => b.id - a.id).slice(0, 4))
      setHot(() => listProduct.sort(()=> Math.random()-0.5).slice(0, 5))
      setBool(true)
    }
    getProduct()
  }, [dispatch])

  if (Bool) {
    return (
      <React.Fragment>
        <Slider />
        <HightLight products={hightlightProduct} />
        <New new_theme={new_theme} items={newProduct}/>
        <FirstBanner />
        <Hot new_theme={new_theme} items={hotProduct}/>
        <SecondBanner />
        <Lastest new_theme={new_theme} items={lastestProdcut}/>
        <Brand />
        <Letter />
      </React.Fragment>
    )
  }
  else {
    return (
      <React.Fragment></React.Fragment>
    )
  }
}

export default HomePage

