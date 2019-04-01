import React from 'react'
import ReactDom from 'react-dom'
import {
  createStore,
  applyMiddleware,
  compose
} from 'redux'
import thunk from 'redux-thunk'
import {
  Provider
} from 'react-redux'
import {
  BrowserRouter,
  Route,
 
} from 'react-router-dom'
import AuthRoute from './component/authroute/authroute'

import './config'
import Login from './container/login/login';
import Register from './container/register/register';

const store = createStore(compose(
  applyMiddleware(thunk),
 
 
))
ReactDom.render(
    (<Provider store = {store}>
        <BrowserRouter>
          <div>
            <AuthRoute></AuthRoute>
            <Route path = '/login'component = {Login}></Route> 
            <Route path = '/register'component = {Register}></Route> 
          </div>
        
        </BrowserRouter> 
      </Provider>),
      document.getElementById('root')
    )
