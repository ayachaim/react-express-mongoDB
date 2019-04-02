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
import './index.css'
import './config'
import Login from './container/login/login';
import newRegister from './container/register/register';
import reducers from './reducers'

const store = createStore(reducers,compose(
  applyMiddleware(thunk),
 
 
))
ReactDom.render(
    (<Provider store = {store}>
        <BrowserRouter>
          <div>
            <AuthRoute></AuthRoute>
            <Route path = '/login'component = {Login}></Route> 
            <Route path = '/register'component = {newRegister}></Route> 
          </div>
        </BrowserRouter> 
      </Provider>),
      document.getElementById('root')
    )
