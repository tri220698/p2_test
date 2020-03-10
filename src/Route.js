import React from 'react';
import HomePage from './Components/HomePage/index'
import { Switch, Route } from "react-router-dom";
import ListGrid from './Components/list_grid/index'
import Detail from './Components/detail/index'
import Cart from './Components/Cart/index'
import Login from './Components/Login/index'
import Register from './Components/Register/index'


const Routers = () => {
  return (
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/list" component={ListGrid} />
      <Route path="/detail/:id" component={Detail}/>
      <Route path="/cart" component={Cart}/>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
    </Switch>
  )
}

export default Routers